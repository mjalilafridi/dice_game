
var a=Math.floor(Math.random() * 6)+ 1;
var b="dice"+ a + ".png";
var bc ="images/" + b;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src" ,bc);


var a1=Math.floor(Math.random()*6)+1;
var ris2='images/dice'+a1+".png";
document.querySelectorAll("img")[1].setAttribute("src",ris2);


if(a>a1)
{
  document.querySelector("h1").innerHTML="Player 1 is winer";
}
else if (a1>a)
{
  document.querySelector("h1").innerHTML="player 2 is winner";
}
else{
  document.querySelector("h1").innerHTML="draw";
}
