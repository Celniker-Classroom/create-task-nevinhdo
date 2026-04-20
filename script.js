// add javascript here

let correct = 0;
let randQuestion = "";

const questionlist = ["What is 15 + 27?", "What is 84 - 39?", "What is 12 \ times 6?", "What is 144 / 12?", "What is 53 + 68?", "What is 120 - 45?", "What is 9 \ times 7?", "What is 56 / 8?", "What is 250 + 175?", "What is 15 \ times 4?"];

const answerlist = ["42", "45", "72", "12", "121", "75", "63", "7", "425", "60"];

function getQuestion() {
    const randomIndex = Math.floor(Math.random() * questionlist.length);
    return questionlist[randomIndex];
}

function loadQuestion() {
    randQuestion = getQuestion();
    document.getElementById("questionText").innerText = randQuestion;
}

function getOutput() {
    const answer = document.getElementById("myInput").value;
    return answer;
}

function checkAnswer(userAnswer) {
    const questionIndex = questionlist.indexOf(randQuestion);
    const correctAnswer = answerlist[questionIndex];
    if (userAnswer === correctAnswer) {
        correct++;
    }
    document.getElementById("score").innerText = "Score: " + correct;
    document.getElementById("myInput").value = "";
    loadQuestion();
}

loadQuestion();
document.getElementById("guessButton").addEventListener("submit", function(event) {
    event.preventDefault();
    checkAnswer(getOutput());
});

