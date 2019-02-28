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

/* GET Service page. */
router.get("/Service", indexController.displayService);

/* GET About page. */
router.get("/AboutUs", indexController.displayAboutUs);

/* GET Inbox page. */

router.get("/Inbox", indexController.displayInbox);




module.exports = router;
