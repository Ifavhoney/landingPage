let mongoose = require("mongoose");

let mealSchema = mongoose.Schema(
    {
        meal: {
            type: String
        },
        ingredients: {
            type: [String]
        },
        type: {
            type: String
        },
        price: {
            type: Number
        }
    }, {
        collection: "meal"
    }
);
//Changed from survey to meal
module.exports.meal = mongoose.model("Meal", mealSchema);
