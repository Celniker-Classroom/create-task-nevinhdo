// setting variables
let randQuestion = "";
let questionCount = 0;
let userAnswers = [];
let correspondingAnswer = [];

// creating lists
const mathQuestionlist = ["What is 2 + 3?", "What is 5 + 4?", "What is 10 - 3?", "What is 8 - 2?", "What is 3 x 4?", "What is 5/1?", "What is 15/3?", "What is 2 x 4?", "What is 25/5?", "What is 9 - 8?"];
const mathAnswerlist = ["5", "9", "7", "6", "12", "5", "5", "8", "5", "1"];
let usedQuestions = [];
let gameStage = "beginning";
let gameMode = "math";

// set initial UI state
document.getElementById("startButton").disabled = true;
document.getElementById("myInput").disabled = true;
document.getElementById("myButton").disabled = true;

// mode buttons — enable start after picking
document.getElementById("sportsButton").addEventListener("click", function() {
    gameMode = "sports";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

document.getElementById("musicButton").addEventListener("click", function() {
    gameMode = "music";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

document.getElementById("movieButton").addEventListener("click", function() {
    gameMode = "movies";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

document.getElementById("mathButton").addEventListener("click", function() {
    gameMode = "math";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

// start button — enable input after clicking
document.getElementById("startButton").addEventListener("click", function() {
    if (gameStage !== "waiting") return;
    gameStage = "playing";
    document.getElementById("myInput").disabled = false;
    document.getElementById("myButton").disabled = false;
    loadQuestion();
});

// loading questions
function loadQuestion() {
    if (gameStage === "playing") {
        if (gameMode === "math") {
            if (questionCount < 5) {
                randQuestion = mathQuestionlist[Math.floor(Math.random() * mathQuestionlist.length)];
                while (usedQuestions.includes(randQuestion)) {
                    randQuestion = mathQuestionlist[Math.floor(Math.random() * mathQuestionlist.length)];
                }
                usedQuestions.push(randQuestion);
                correspondingAnswer.push(randQuestion);
                document.getElementById("questionText").innerText = randQuestion;
            }
        }
    }
}

// checking answers
function checkAnswer(userAnswer) {
    userAnswers.push(userAnswer);
    questionCount++;
    if (questionCount >= 5) {
        const finalScore = checkAll(userAnswers);
        document.getElementById("score").innerText = "Final Score: " + finalScore + "/5";
        document.getElementById("questionText").innerText = "Quiz Complete!";
        document.getElementById("myInput").disabled = true;
        document.getElementById("myButton").disabled = true;
    } else {
        document.getElementById("score").innerText = "Questions answered: " + questionCount + "/5";
        document.getElementById("myInput").value = "";
        loadQuestion();
    }
}

// checking all answers at the end
function checkAll(answers) {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i].trim() === mathAnswerlist[mathQuestionlist.indexOf(correspondingAnswer[i])]) {
            correct++;
        }
    }
    return correct;
}

// FIXED: listener is on the form element, and we prevent default to stop page reload
document.getElementById("guessButton").addEventListener("submit", function(event) {
    event.preventDefault();
    if (gameStage === "playing") {
        checkAnswer(document.getElementById("myInput").value);
        document.getElementById("myInput").value = "";
    }
});