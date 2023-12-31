const MonthlyMealRates = require("../models/monthlyMealRates");

// Set meal rates for specific months (Admin)

exports.set_a_meal_rate = async (req, res) => {
  try {
    // Extract the data from the request body
    const { month, meal_rate, is_visible, month_start_date, month_end_date } =
      req.body;

    // Check if a meal rate for the same month already exists
    const existingMealRate = await MonthlyMealRates.findOne({ month });

    if (existingMealRate) {
      return {
        message:
          "A meal rate for this month already exists. You cannot create a new one.",
      };
    }

    // Create a new MonthlyMealRates entry using the create method
    const newMealRate = await MonthlyMealRates.create({
      month,
      meal_rate,
      is_visible,
      month_start_date,
      month_end_date,
      creator: req.userInfo.user._id, // Assign the admin's user ID as the creator
    });

    return {
      message: "Meal rate set successfully",
      mealRate: newMealRate,
    };
  } catch (error) {
    return { error: "Failed to set the meal rate" };
  }
};

// Get all meal rates (Admin and User)
exports.get_all_meal_rate_list = async (req, res) => {
  try {
    // Define the filter based on the user's role
    const filter =
      req.userInfo.user.user_role === "Admin" ? {} : { is_visible: 1 };

    // Fetch meal rates based on the filter
    const mealRates = await MonthlyMealRates.find(filter).sort({
      month: "desc",
    });

    return {
      message: "Meal rates retrieved successfully",
      mealRates,
    };
  } catch (error) {
    return { message: "Failed to fetch meal rates" };
  }
};

// Get a meal rate by ID (Admin)
exports.get_meal_rate_by_id = async (req, res) => {
  try {
    // Find the meal rate by its ID
    const mealRate = await MonthlyMealRates.findById(req.params.id);
    if (!mealRate) {
      return { message: "Meal rate not found." };
    }

    return {
      message: "Meal rate retrieved successfully",
      mealRate,
    };
  } catch (error) {
    console.log(error);
    return { message: "Failed to retrieve meal rate" };
  }
};

// Update a meal rate (Admin)
exports.update_meal_rate = async (req, res) => {
  try {
    const mealRateId = req.params.id; // Get the ID from the request parameters
    const updates = req.body; // Get the updated data from the request body

    // Check if the "month" field is being updated
    if ("month" in updates) {
      // Check if a meal rate with the same "month" value already exists
      const existingMealRate = await MonthlyMealRates.findOne({
        month: updates.month,
      });
      if (existingMealRate && existingMealRate._id != mealRateId) {
        return {
          message:
            'A meal rate with the same "month" value already exists. Cannot update.',
        };
      }
    }

    // Find and update the meal rate by its ID
    const updatedMealRate = await MonthlyMealRates.findByIdAndUpdate(
      mealRateId,
      updates,
      { new: true }
    );

    if (!updatedMealRate) {
      return { message: "Meal rate not found or update failed." };
    }

    return {
      message: "Meal rate updated successfully",
      mealRate: updatedMealRate,
    };
  } catch (error) {
    return { message: "Failed to update meal rate" };
  }
};

// Delete a meal rate (Admin)
exports.delete_a_meal_rate = async (req, res) => {
  try {
    const mealRateId = req.params.id;
    const mealRate = await MonthlyMealRates.findByIdAndDelete(mealRateId);
    if (!mealRate) {
      return { message: "Meal rate not found" };
    }
    return { message: "Meal rate deleted successfully" };
  } catch (error) {
    return { message: "Failed to delete meal rate" };
  }
};
