/*
File Name: index.js
Student's Name: Jason N'Guessan
StudentID: 300848224
Date: February 16 2019
*/
let express = require("express");
let router = express.Router();

let indexController = require("../controller/index");

/*Content For Home */

/* GET home page. */
router.get("/", indexController.displayHome);

/* GET about page. */
router.get("/about", indexController.displayAbout);

/* GET Products page. */
router.get("/Projects", indexController.displayProjects);

/* GET Service page. */
router.get("/Services", indexController.displayServices);

/* GET Contact page. */
router.get("/Contact", indexController.displayContact);
/* POST Contact Page */
router.post("/Contact", indexController.postContact);

module.exports = router;
