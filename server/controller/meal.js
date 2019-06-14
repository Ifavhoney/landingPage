let express = require("express");
let router = express.Router();


let mealModel = require('../models/meal');
//Show all Meals

module.exports.displayMeals = (req, res, next) => {
    mealModel.meal.find((err, mealList) => {
        if (err) {
            return console.error('err');
        }
        else {
            res.json({ success: true, msg: 'Meals Available right now !', mealList: mealList });

        }
    });
}