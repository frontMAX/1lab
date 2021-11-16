/** @type {HTMLElement} */
let start;
/** @type {HTMLElement} */
let second;
/** @type {HTMLElement} */
let second2;
/** @type {HTMLElement} */
let third; 
/** @type {HTMLElement} */
let lastWalk;
/** @type {HTMLElement} */
let skiThird;
/** @type {HTMLElement} */ 
let lastJump;
/** @type {HTMLElement} */ 
let afterSki; 
/** @type {HTMLElement} */
let finish;


window.onload = main 
/** start of the program */
function main() {
  start   = document.getElementById("start-content");
  second   = document.getElementById('second-content');
  second2  = document.getElementById('second-content2');
  third  = document.getElementById('third-content');
  lastWalk   = document.getElementById('last-content');
  skiThird  = document.getElementById('skiThird');
  lastJump = document.getElementById('lastJump');
  afterSki = document.getElementById('afterSki');
  finish = document.getElementById('rightWay');
    second.style.display = "none"
    second2.style.display = "none"
    third.style.display = "none"
    lastWalk.style.display = "none"
    skiThird.style.display = "none"
    lastJump.style.display = "none"
    afterSki.style.display = "none"
    finish.style.display = "none"
    
}

 function addEventListener(){  
 
}

/**ski way second page*/
function skiLift() {
    let start = document.getElementById("start-content");
    if (start.style.display = "block") {
        start.style.display = "none"
        second.style.display = "block"
  }   
}
/** walk way second page*/
function walk() {
    if (start.style.display = "block") {
        start.style.display = "none"
        second2.style.display = "block"
    } 
}
/** walk way third page*/
function sunOverThere() {
    if (second2.style.display = "block") {
        second2.style.display = "none"
        third.style.display = "block"
    } 
}
/**  walk way Last page*/
function lastBtn() {
    if (third.style.display = "block") {
        third.style.display = "none"
        lastWalk.style.display = "block"
    }
}

/**  ski way third page*/
function jump() {
    if (second.style.display = "block") {
        second.style.display = "none"
        skiThird.style.display = "block"
    }
}
/** last jump picture */
function theEnd() {
    if (skiThird.style.display = "block") {
        skiThird.style.display = "none"
        lastJump.style.display = "block"
    }
}
/** on the side, page after that */
function theSide() {
    if (second.style.display = "block") {
        second.style.display = "none"
        afterSki.style.display = "block"
    }

}
   /** last page on the walk */
function sunGlasses() {
    if (lastWalk.style.display = "block") {
        lastWalk.style.display = "none"
        finish.style.display = "block"
    }
}





/** home button */
function startOver() {
    second.style.display = "none"
    second2.style.display = "none"
    third.style.display = "none"
    start.style.display = "block"
    lastWalk.style.display = "none"
    skiThird.style.display = "none"
    lastJump.style.display = "none"
    afterSki.style.display = "none"
    finish.style.display = "none"

}












