
let start = document.getElementById ("start-content");  
let second = document.getElementById('second-content') ;
let second2 = document.getElementById('second-content2');
let third = document.getElementById('third-content');
let lastWalk = document.getElementById('last-content');
let skiThird = document.getElementById('skiThird')

second.style.display = "none"  
second2.style.display = "none"  
third.style.display = "none"   
lastWalk.style.display = "none"
skiThird.style.display = "none"

window.onload = main()

  function main (){
   addEventListener();
 }  
 /* the first side*/ 
 function addEventListener(){  
let startTheGame = alert('Välj en av dom två pulserande texterna som passar dig bäst '); }

/*ski way second page*/
 function skiLift() {
       let start = document.getElementById ("start-content"); 
    if(start.style.display = "block") {   
     start.style.display = "none"    
     second.style.display = "block" 
  }  let jump = alert('Det går nu med en väldig fart ner. Du ser en stubbe vad gör du?')
}
/* walk way second page*/
function walk() {
    if (start.style.display = "block"){
        start.style.display = "none"
        second2.style.display = "block"
     } alert("Du valde att gå du får lite olika känslor, vilket av alternativen väljer du?")
    } 
/* walk way third page*/
function sunOverThere(){
    if (second2.style.display = "block"){
        second2.style.display = "none"
        third.style.display = "block"
    } alert('Uppe på topppen, tryck på klar knappen för att njuta av dagens utsikt')
}
/* walk way Last page*/
function lastBtn() {
    if (third.style.display = "block"){
        third.style.display = "none"
        lastWalk.style.display = "block"
    }
   }

   /* ski way third page*/ 
   function jump () {
     if (  second.style.display = "block"){
       second.style.display = "none"
       skiThird.style.display = "block" 
       }
   }

 









//     const answer = prompt ('ange ditt namn');
//      username = answer;
//      prepareStory ();
// }
// function prepareStory () {
//     alert('asdada' '+ username +' 'asdadd');

// //     const answer = prompt ('vad vill du göra? gi till vardagsrummer eller köket? skriv "vardagsrummet" eller "köket"')
// //     if (answer === 'vardagsrummet'){
// //         enterlivingroom();
// //     } else if (answer === 'köket') {
// //         enterkitchen ();
// //     } else {
// //         alert ('var god ange något av dom')
// //         prepareStory();    
// //     }   
// // }










function startOver() {
    second.style.display = "none"  
    second2.style.display = "none"  
    third.style.display = "none" 
    start.style.display = "block"
    lastWalk.style.display ="none"
    skiThird.style.display ="none"
}
