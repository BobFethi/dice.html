var randomNumber1 = Math.floor(Math.random() * 6) +1;
document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor(Math.random() * 6) +1;
document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var score = "";
if (randomNumber1 > randomNumber2) {
    score = "Fethi Won";
} else if (randomNumber2 > randomNumber1) {
    score = "El-Hadi Won";
} else {
    score = "drow"
}

document.querySelector("h1").innerHTML = score;
