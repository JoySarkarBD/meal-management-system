const User = require("../models/user");
const UserMeals = require("../models/userMeals");

// Register meals for users (Admin) (Multiple or single)
exports.registerMeal = async (req, res) => {
  try {
    const mealData = req.body; // Assuming meal data is sent in the request body

    // Validate meal data, check if users array is present and not empty
    if (!mealData.users || mealData.users.length === 0) {
      return { message: "Users array is required and should not be empty" };
    }

    // Check if there is an existing meal on the specified date for any of the users
    const existingMeals = await UserMeals.find({
      users_id: { $in: mealData.users }, // Check for any user in the list
      date: mealData.date,
    });

    const registeredMeals = [];
    const conflictingUsers = [];

    for (const userId of mealData.users) {
      const isRegistered = existingMeals.some((meal) =>
        meal.users_id.equals(userId)
      );

      if (isRegistered) {
        conflictingUsers.push(userId);
      } else {
        const newMeal = new UserMeals({
          users_id: userId,
          qty: mealData.qty,
          date: mealData.date,
          status: mealData.status || 1, // Default status if not provided
          creator: req.userInfo.user._id,
        });

        const savedMeal = await newMeal.save();
        registeredMeals.push(savedMeal);
      }
    }

    if (conflictingUsers.length > 0) {
      // Some users already have meals registered
      const conflictingUsersDetails = await User.find(
        { _id: { $in: conflictingUsers } },
        {
          _id: 1,
          full_name: 1,
          email: 1,
          mobile: 1,
        }
      );

      return {
        message: `Meal(s) already registered for user(s) on ${mealData.date}.`,
        alreadyRegisterUserMeal: conflictingUsersDetails,
        successfullyRegisteredMeals: registeredMeals,
      };
    }

    return {
      message: "Meals registered successfully",
      successfullyRegisteredMeals: registeredMeals,
    };
  } catch (error) {
    return { error: "Failed to register meals" };
  }
};

// Get all meals (Admin)
exports.getAllMealsList = async (req, res) => {
  try {
    const meals = await UserMeals.find()
      .sort({ date: -1 }) // Sort by date in descending order (most recent first)
      .exec();

    const mealsWithUsers = [];

    for (const meal of meals) {
      const user = await User.findById(meal.users_id);

      if (user) {
        mealsWithUsers.push({
          _id: meal._id,
          qty: meal.qty,
          date: meal.date,
          status: meal.status,
          creator: meal.creator,
          user: {
            _id: user._id,
            full_name: user.full_name,
            email: user.email,
            mobile: user.mobile,
            // Add other user details here if needed
          },
        });
      }
    }

    return {
      message: "Meals list retrieved successfully",
      meals: mealsWithUsers,
    };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch meals" };
  }
};

// Get all meals of logged in user's (View a list of meals)
exports.getMyMealsList = async (req, res) => {
  try {
    const loggedInUserID = req.userInfo.user._id;

    const myMeals = await UserMeals.find({ users_id: loggedInUserID })
      .sort({ date: -1 }) // Sort by date in descending order (most recent first)
      .exec();

    if (!myMeals || myMeals.length === 0) {
      return {
        message: "No meals found for the logged-in user",
        myMeals: [],
      };
    }

    const myMealsWithUserDetails = [];

    for (const meal of myMeals) {
      const user = await User.findById(meal.users_id);

      if (user) {
        const mealWithUser = {
          _id: meal._id,
          qty: meal.qty,
          date: meal.date,
          status: meal.status,
          creator: meal.creator,
          user: {
            _id: user._id,
            full_name: user.full_name,
            email: user.email,
            mobile: user.mobile,
            // Add other user details here if needed
          },
        };
        myMealsWithUserDetails.push(mealWithUser);
      }
    }

    return {
      message: "Meals list retrieved successfully with user details",
      myMeals: myMealsWithUserDetails,
    };
  } catch (error) {
    console.error(error);
    return { error: "Failed to fetch meals" };
  }
};

// Get Meal Details by id (Admin)
exports.getMealByTheId = async (req, res) => {
  try {
    const mealId = req.params.id;

    const meal = await UserMeals.findById(mealId);

    if (!meal) {
      return { message: "Meal not found" };
    }

    // Find user details using the user_id from the meal
    const user = await User.findById(meal.users_id);

    if (!user) {
      return { message: "User not found for this meal" };
    }

    // Combine meal and user details
    const mealWithUser = {
      _id: meal._id,
      qty: meal.qty,
      date: meal.date,
      status: meal.status,
      creator: meal.creator,
      user: {
        _id: user._id,
        full_name: user.full_name,
        email: user.email,
        mobile: user.mobile,
        // Add other user details here if needed
      },
    };

    return mealWithUser;
  } catch (error) {
    console.error(error);
    return { message: "Failed to fetch meal" };
  }
};
