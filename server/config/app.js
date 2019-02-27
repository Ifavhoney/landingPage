/*
File Name: App.js
Student's Name: Jason N'Guessan
StudentID: 300848224
Date: February 16 2019
*/

let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");

//DEPENDENCY FOUR OUR VIEWS THAT IS LINKED TO OUR ROUTES
let indexRouter = require("../routes/index");

let app = express();

// view engine setup
//Join the views folder with my directory path
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

//apps.use uses a function as a midleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//middleware -> /public... so now we dont have to know the exact path all the time

app.use(express.static(path.join(__dirname, "../../public")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

app.use("/", indexRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
