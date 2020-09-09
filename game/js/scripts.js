"use strict"

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resuts = document.getElementById("results");

const num = Math.floor((Math.random() * 35) + 1);

const handGesture = document.querySelectorAll("i");

handGesture.forEach(function (element) {
    element.addEventListener("click", function (e) {
        document.getElementById("youChose").innerHTML = "You Chose:" + " " + element.id.charAt(0).toUpperCase() + element.id.slice(1);
        switch (true) {
            case num <= 5 && element.id == "scissors":
                document.getElementById("compChose").innerHTML = "Computer Chose: Rock";
                results.innerHTML = "Sorry you lost";
                break;
            case num <= 10 && element.id == "rock":
                document.getElementById("compChose").innerHTML = "Computer Chose: Paper";
                resuts.innerHTML = "Sorry you lost";
                break;
            case num <= 15 && element.id == "paper":
                document.getElementById("compChose").innerHTML = "Computer Chose: Scissors";
                results.innerHTML = "Sorry you lost";
                break;
            case num <= 20 && element.id == "paper":
                document.getElementById("compChose").innerHTML = "Computer Chose: Rock";
                results.innerHTML = "You win!";
                break;
            case num <= 25 && element.id == "scissors":
                document.getElementById("compChose").innerHTML = "Computer Chose: Paper";
                results.innerHTML = "You win!";
                break;
            case num <= 30 && element.id == "rock":
                document.getElementById("compChose").innerHTML = "Computer Chose: Scissors";
                results.innerHTML = "You win!";
                break;
            default:
                document.getElementById("compChose").innerHTML = "Computer Chose:" + " " + element.id.charAt(0).toUpperCase() + element.id.slice(1);
                results.innerHTML = "It's a tie!";
        }
        setTimeout(function () {
            location.reload();
        }, 3000);
    });
});