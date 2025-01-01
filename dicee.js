function randomNum1(){
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDiceNumber="dice"+randomNumber1+".png";
var randomImageSource="images43/"+randomDiceNumber;

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
return randomNumber1;
}




function randomNum2(){
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
var randomDicesNumber="dice"+randomNumber2+".png";
var randomImage43Source="images43/"+randomDicesNumber;

document.querySelectorAll("img")[1].setAttribute("src",randomImage43Source);

return randomNumber2;
}

const btn = document.getElementById('btnFlip');
btn.addEventListener('click',function(){
    let randomNumber1 = randomNum1();
    let randomNumber2 = randomNum2();

    if (randomNumber1>randomNumber2) {
        document.querySelector("h1").innerHTML= "Player1 Wins";
    }
    else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player2Wins";
    }
    else if  (randomNumber1== randomNumber2) {
    document.querySelector("h1").innerHTML="Draw!";
    }

})


