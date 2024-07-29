var n1= Math.random();
n1= n1*6;
n1= Math.floor(n1)+1;
var randomimagedice1="dice" + n1 +".png";
var randomimgsrc1="images/" + randomimagedice1;
document.querySelectorAll("img")[0].setAttribute("src", randomimgsrc1);

var n2= Math.random();
n2= n2*6;
n2= Math.floor(n2)+1;
var randomimagedice2="dice" + n2 +".png";
var randomimgsrc2="images/" + randomimagedice2;
document.querySelectorAll("img")[1].setAttribute("src", randomimgsrc2);

if( randomimagedice1 > randomimagedice2){
    document.querySelector("h1").innerHTML="Player 1 wins!!!";
  
}
else if( randomimagedice2 > randomimagedice1){
    document.querySelector("h1").innerHTML="Player 2 wins!!!";
}
else{
    document.querySelector("h1").innerHTML="Draw++";
}
