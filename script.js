let number = Math.floor(Math.random() * 10) + 1;

function checkGuess() {

    let guess = document.getElementById("guess").value;

    if (guess == "") {
        document.getElementById("result").innerHTML = "Please enter a number!";
    }

    else if (guess == number) {
        document.getElementById("result").innerHTML = "Correct! You won!";
    }

    else if (guess > number) {
        document.getElementById("result").innerHTML = "Too high! Try again.";
    }

    else {
        document.getElementById("result").innerHTML = "Too low! Try again.";
    }
}

function restartGame() {

    number = Math.floor(Math.random() * 10) + 1;

    document.getElementById("guess").value = "";

    document.getElementById("result").innerHTML = "";
}