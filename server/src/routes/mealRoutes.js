// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Meal Controller for meal-related logic
const MealController = require("../controllers/MealController");
const { isLoggedIn, isAdmin } = require("../middlewares/authMiddleware");

// Register meals for users (Admin)
router.post("/meals", isLoggedIn, isAdmin, MealController.registerMeals);

// Get all meals (Admin and User)
router.get("/meals", MealController.getAllMeals);

// Get a meal by ID (Admin and User)
router.get("/meals/:id", MealController.getMealById);

// Update a meal (Admin)
router.put("/meals/:id", MealController.updateMeal);

// Delete a meal (Admin)
router.delete("/meals/:id", MealController.deleteMeal);

// Reserve meals for the next day until 6 PM (User)
router.post("/meals/reserve", MealController.reserveMeals);

// List and cancel bookings for the next day before 6 PM (User)
router.get("/meals/bookings", MealController.getUserBookings);
router.delete("/meals/bookings/:id", MealController.cancelBooking);

module.exports = router;
