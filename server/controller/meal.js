let express = require("express");
let router = express.Router();

let mealModel = require('../models/meal');

module.exports.displayMeals = (req, res, next) => {
    mealModel.find((err, mealList) => {
        if (err) {
            return console.error('err');
        }
        else {
            res.json({ success: true, msg: 'Meals Available right now !', mealList: mealList });

        }
    });
}