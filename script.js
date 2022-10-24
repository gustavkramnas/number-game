"use strict";

/*
let number = Number(prompt("insert a number!"));

if (number % 2 === 0) {
  alert("div by 2");
} else {
  alert("not div by 2");
}
---------------------------------------
/*
let count = 0;

while (count < 10) {
  alert(count);
  let answer = confirm("do you want to continue");

  break;

  count += 1;
}

---------------------------------------
/* number game!
while (true) {
  let answer = prompt("What's your answer?");
  if (answer === "loop-the-loops") {
    break;
  }
}
--------------------------------------
/*
let count = 0;

  alert(count);
  let answer = confirm("do you want to continue"); {

    break
  }

  count += 1;
--------------------------------------

"use strict";

for (let count = 10; count > 0; count--) {
  alert(count);
}
---------------------------------------
/*

let loops = Number(prompt("Pick a number:"));
for (let i = 0; i < loops; i++) {
  alert(i);
}
----------------------------------------
FIZZBUZZ

for (let i = 1; i < 31; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

----------------------------------------
// FUNCTIONS

function sum(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

let num = sum(1000, 100);
alert(num);

----------------------------------------
// OBJECTS

let movie = {
  length: 170,
  genre: "drama",
  year: 1998,
};
------------------------------------
alert(movie.genre);
alert(movie.length);
alert(movie.year);
------------------------------------
movie.genre = prompt("genre");
movie.length = prompt("length");
movie.year = prompt("year");
------------------------------------
//ACCESS PROPERTIES AND STRINGS
let movie = {
  title: "Hackers",
}:

let key = "title";

alert(movie[key]);


function createMovie(length, year, title) {
  return {
    length: length,
    year: year,
    title: title,
  };
}
let movie = createMovie("hackers", 105, 1995);
console.log(movie);
--------------------------------
//CAN CONTAIN FUNCTIONS

let calculator = {
  sum: function (a, b) {
    return a + b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

let result = calculator.multiply(5, 5);
console.log(result);
-------------------------------------
// Random number between 1-100
let number = Math.floor(Math.random() * 100) + 1;
x
//LISTS/ARRAY

let colors = ["red", "green", "blue"];

alert(color[0]);
alert(color[1]);
alert(color[2]);
---------------------------------

let movies = ["bamse", "lilleskutt", "360 days"];
let index = Number(prompt("pick a number between 1-3") - 1);
alert(movies[index]);
----------------------------------
//ADDING NUMBERS
let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

----------------------------

let number = 23;

let myNumber = prompt("Can you guess my extremly secret number?");
let myNum = Number(myNumber);

for (i = 0 ; i < 20; i++) {
  if (myNum === number) {
    alert("That hurts! You are Correct🔑");
  } else if (myNum < number) {
    alert("guess higher!");
  } else {
    alert("guess lower!");
  }
}
---------------------
let element = document.createElement("li");
element.innerHTML = "Helloooooo";

let list = document.querySelector("#list");
list.append(element);

function changeColor(newColor) {
  let elem = document.getElementById("color");
  elem.style.color = newColor;
}
---------------------
CREATE ELEMENTS WITH JS

let div = document.createElement("div");
div.className = "alert";

let img = document.createElement("img");
img.src = "http://example.com/image.jpg";
div.append(img);

let strong = document.createElement("strong");
strong.innerHTML = "Warning!";
div.append(strong);

div.append("skitsamma");

document.body.append(div);

*/

function blue() {
  document.getElementById("p").style.color = "blue";
}

function red() {
  document.getElementById("p").style.color = "red";
}

function orange() {
  document.getElementById("p").style.color = "orange";
}

function white() {
  document.getElementById("p").style.color = "white";
}

let btnStartGame = document.getElementById("btnStartGame");
btnStartGame.addEventListener("click", startGame);

function startGame(firstRun = true) {
  alert("You have 10 guesses. Guess from 1-40 :)");

  let answer = 20;
  let guess = Number(prompt("what's your guess?🌟"));

  for (let i = 1; i < 10; i++) {
    if (answer === guess) {
      alert("you guessed correctly🎉🔑");
      break;
    } else {
      guess = prompt("please try again 😋");
    }
    if (guess === null) {
      if (confirm("Are you sure you want to quit? 😱")) {
        alert("😢");
        break;
      } else {
        continue;
      }
    }
  }
  if (guess === answer) {
  } else {
    alert("The answer was 2️⃣0️⃣ unfortunatly");
  }
}
