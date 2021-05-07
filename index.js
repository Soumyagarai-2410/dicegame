var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var ranimg1 = "dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",ranimg1);
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2)+1;
var ranimg2 = "dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",ranimg2);

if(randomNumber1>randomNumber2){
  document.querySelector("h3").innerHTML="Soumya WINS AS ALWAYS!😎";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h3").innerHTML="You CHEATED...😒 Soumya WINS🥱 ";
  }
  else{
    document.querySelector("h3").innerHTML="You NEED TO LEARN HOW TO PLAY🤪";
  }
