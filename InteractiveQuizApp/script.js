// script.js

document.getElementById("submit").addEventListener("click", function(){
    const answers = document.getElementsByName("answer");
    let selectedAnswer = "";

    //Find the selected answer
    for (const answer of answers) {
        if (answer.checked) {
            selectedAnswer=answer.value;
            break;
        }
    }

    //Check the answer and display result
    const resultElement = document.getElementById("result");
    if (selectedAnswer == "Paris") {
        resultElement.textContent = "Correct! Paris is the capital of France.";
        resultElement.style.color = "green";
    } else if (selectedAnswer) {
            resultElement.textContent = "Wrong! The answer is France.";
            resultElement.style.color = "red";
    } else {
        resultElement.textContent = "Please select an answer.";
            resultElement.style.color = "orange";

    }
    });
