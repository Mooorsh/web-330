"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Samuel Marsh
      Date: 3/22/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Object Definition
function Timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Object Methods
Timer.prototype.runPause = function(timer, minBox, secBox) {
  if (timer.timeID) {
     clearInterval(timer.timeID);
     timer.timeID = null;
  } else {
     timer.timeID = setInterval(function() {
        countdown(timer, minBox, secBox);
     }, 1000);
  }
}


// Countdown Function
function countdown(timer, minBox, secBox) {
  if (timer.seconds > 0) {
     timer.seconds--;
  } else {
     if (timer.minutes > 0) {
        timer.minutes--;
        timer.seconds = 59;
     } else {
        clearInterval(timer.timeID);
        timer.timeID = null;
     }
  }
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}

// Timer Object Instance
let myTimer = new Timer(document.getElementById("minutesBox").value, document.getElementById("secondsBox").value);


/*---------------Interface Code -----------------*/

/* Interface Objects */

// Input Event Handlers
document.getElementById("minutesBox").onchange = function() {
  myTimer.minutes = this.value;
}

document.getElementById("secondsBox").onchange = function() {
  myTimer.seconds = this.value;
}

// Button Event Handler
document.getElementById("runPauseButton").onclick = function() {
  myTimer.runPause(myTimer, document.getElementById("minutesBox"), document.getElementById("secondsBox"));
}