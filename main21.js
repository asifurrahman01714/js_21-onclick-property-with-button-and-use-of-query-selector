
document.querySelector("ul li a").innerHTML="hello";
var mypara = document.querySelector("#paraId");
function myMessage1(){
  // var mypara = document.querySelector("#paraId");
   mypara.innerHTML="You have clicked button 1";
}

function myMessage2(){
  // var mypara = document.querySelector("#paraId");
   mypara.innerHTML="You have clicked button 2";
}

function mypicture(){
   var mypara = document.querySelector("#battery");
    mypara.src="images/battery-charge-icon.png";
}