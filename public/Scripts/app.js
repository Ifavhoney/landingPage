/*
File Name: app.js
Student's Name: Jason N'Guessan
StudentID: 300848224
Date: February 08 2019
*/
/* Custom JavaScript goes here */
//IIFE
(function () {

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

  //Animates Elements
  function animate(element, animation) {

    let animation_txt = "animated " + animation;

    $(element).addClass(animation_txt);
    setTimeout(() => {

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





