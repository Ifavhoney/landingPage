let express = require("express");
let router = express.Router();

module.exports.displayHome = (req, res, next) => {
  res.render("index", {
    title: "Home"
  })
}

module.exports.displayService = (req, res, next) => {
  res.render("index", {
    title: "Service"
  })
}

module.exports.displayAboutUs = (req, res, next) => {
  res.render("index", {
    title: "AboutUs"
  })
}


module.exports.displayInbox = (req, res, next) => {
  res.render("index", {
    title: "Send a Mail"
  })
}
