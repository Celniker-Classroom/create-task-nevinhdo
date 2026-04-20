//setting variables
let randQuestion = "";
let questionCount = 0;
let userAnswers = [];

//questions and answers lists
const questionlist = ["What is 2 + 3?", "What is 5 + 4?", "What is 10 - 3?", "What is 8 - 2?", "What is 3 x 4?", "What is 5/1?", "What is 15/3?", "What is 2 x 4?", "What is 25/5?", "What is 9 - 8?"];
const answerlist = ["5", "9", "7", "6", "12", "5", "5", "8", "5", "1"];

//Loading question function
function loadQuestion() {
    if (questionCount < 5) {
        randQuestion = questionlist[questionCount];
        document.getElementById("questionText").innerText = randQuestion;
    }
}

//Checking answer function
function checkAnswer(userAnswer) {
    userAnswers.push(userAnswer);
    questionCount++;
    if (questionCount >= 5) {
        const finalScore = checkAll(userAnswers);
        document.getElementById("score").innerText = "Final Score: " + (finalScore) + "/5";
        document.getElementById("questionText").innerText = "Quiz Complete!";
        document.getElementById("myInput").disabled = true;
        document.getElementById("myButton").disabled = true;
    } else {
        document.getElementById("score").innerText = "Questions answered: " + questionCount + "/5";
        document.getElementById("myInput").value = "";
        loadQuestion();
    }
}

//Function to check all answers
function checkAll(answers) {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answerlist[i]) {
            correct++;
        }
    }
    return correct;
}

//calling the load question function and setting up event listener for the submit button
loadQuestion();
document.getElementById("guessButton").addEventListener("submit", function(event) {
    event.preventDefault();
    checkAnswer(document.getElementById("myInput").value);
});