var dice1="images\\dice" + (Math.floor(Math.random()* 6)+1)+".png";
var dice2="images\\dice" + (Math.floor(Math.random()* 6)+1)+".png";
document.getElementsByTagName("img")[0].setAttribute("src",dice1);
document.getElementsByTagName("img")[1].setAttribute("src",dice2);
var h1=document.querySelector("h1");
if(dice1>dice2)
{
  h1.innerHTML="Player 1 wins!";
}
else if(dice1<dice2){
  h1.innerHTML="Player 2 wins!";
}
else if(dice1==dice2){
  h1.innerHTML="Draw!";
}
