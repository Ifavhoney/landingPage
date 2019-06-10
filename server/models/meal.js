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
module.exports.survey = mongoose.model("Meal", mealSchema);
