// Import Express and create an Express Router for defining routes
const express = require("express");
const router = express.Router();

// Import the Monthly Meal Rate Controller for monthly-meal-rate-related logic
const MonthlyMealRateController = require("../controllers/MonthlyMealRateController");

// Set meal rates for specific months (Admin)
router.post("/meal-rates", MonthlyMealRateController.setMealRate);

// Get all meal rates (Admin and User)
router.get("/meal-rates", MonthlyMealRateController.getAllMealRates);

// Get a meal rate by ID (Admin and User)
router.get("/meal-rates/:id", MonthlyMealRateController.getMealRateById);

// Update a meal rate (Admin)
router.put("/meal-rates/:id", MonthlyMealRateController.updateMealRate);

// Delete a meal rate (Admin)
router.delete("/meal-rates/:id", MonthlyMealRateController.deleteMealRate);

module.exports = router;
