/*
File Name: app.js
Student's Name: Jason N'Guessan
StudentID: 300848224
Date: February 08 2019
*/
/* Custom JavaScript goes here */
//IIFE
(function () {

  //Events

  //Btn to set the action 

  $("#btn-1").click(() => {
    animate("#anim-head", "bounce")
    animate("#anim-body", "slideInLeft")

  })

  //Btn to hover 
  $("#btn-1").hover(() => {
    animate("#anim-head", "bounce")
    animate("#anim-body", "slideInRight")

  })

  $("#rex-btn").click(() => {
    animate("#rex-btn", "bounceInDown")
  })

  //Run time
  animate("#rex-btn", "slideInRight")

  animate(".rex-feature", "slideInRight")

  animate(".rex-feature-economy", "lightSpeedIn")

  //Need answer  on why it doesnt work
  animate(".rex-feature-responsive", "bounceIn");

  animate(".rex-feature-private", "rollIn");

  animate(".rex-num", "fadeIn")

  animate(".rex-content", "fadeInUp")



  //Animates Elements
  function animate(element, animation) {

    let animation_txt = "animated " + animation;
    console.log(animation_txt)
    $(element).addClass(animation_txt);
    setTimeout(() => {

      //runs only once 
      $(element).removeClass(animation_txt)

    }, 1000)


  }



  function Start() {
    console.log(
      `%c App Started...`,
      "font-size: 20px; color:blue; font-weight: bold"
    );
  }

  window.addEventListener("load", Start);
})();





