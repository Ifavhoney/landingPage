let mongoose = require("mongoose");

let fooditemsSchema = mongoose.Schema(
    {
        ingredients: {
            type: String
        },
        price: {
            type: Number
        }
    }, {
        collection: "fooditems"
    }
);
module.exports.survey = mongoose.model("FoodItems", fooditemsSchema);
