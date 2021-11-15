
let start = document.getElementById ("start-content");  
let second = document.getElementById('second-content') ;
let second2 = document.getElementById('second-content2');
let third = document.getElementById('third-content');
second.style.display = "none"  
second2.style.display = "none"  
third.style.display = "none"   
 window.onload = main()

  function main (){
   addEventListener();
 }  
 function addEventListener(){  
let startTheGame = alert('Välj en av dom två pulserande texterna som passar dig bäst '); }
 function skiLift() {
    //   let start = document.getElementById ("start-content"); 
    if(start.style.display = "block") {   
     start.style.display = "none"    
     second.style.display = "block" 
  } 
  let jump = alert('Det går nu med en väldig fart ner. Du ser en stubbe vad gör du?')
}

function walk() {
    if (start.style.display = "block"){
        start.style.display = "none"
        second2.style.display = "block"
     }
     alert("Du valde att gå du får lite olika känslor, vilket av alternativen väljer du?")
    
} 

function sunOverThere(){
    if (second2.style.display = "block"){
        second2.style.display = "none"
        third.style.display = "block"
    }
}


function startOver() {
    second.style.display = "none"  
    second2.style.display = "none"  
    third.style.display = "none" 
    start.style.display = "block"
}
