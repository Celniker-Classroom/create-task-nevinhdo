//setting variables
let randQuestion = "";
let questionCount = 0;
let userAnswers = [];
let correspondingAnswer = [];
//creating lists
const mathQuestionlist = ["What is 2 + 3?", "What is 5 + 4?", "What is 10 - 3?", "What is 8 - 2?", "What is 3 x 4?", "What is 5/1?", "What is 15/3?", "What is 2 x 4?", "What is 25/5?", "What is 9 - 8?"];
const mathAnswerlist = ["5", "9", "7", "6", "12", "5", "5", "8", "5", "1"];
let usedQuestions = [];
let gameStage = "beginning";
let gameMode = "math";
console.log("Game Stage: " + gameStage);


// A simple reusable wait function
function waitUntil(conditionFunction, checkInterval = 100) {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (conditionFunction()) {
        clearInterval(interval);
        resolve();
      }
    }, checkInterval);
  });
}

document.getElementById("startButton").disabled = true;





//wait until gamestage is not begginning

async function checkData() {
  await waitUntil(() => gameStage === "beginning");
checkData();}


console.log("lebron james1");

    console.log("Game Stage: " + gameStage);
    //load sportsmode
    document.getElementById("sportsButton").addEventListener("click", function() {
        gameMode = "sports";
        gameStage = "waiting";
        document.getElementById("myInput").disabled = false;
        document.getElementById("myButton").disabled = false;
    });

    //load music
            document.getElementById("musicButton").addEventListener("click", function() {
        gameMode = "music";
        gameStage = "waiting";
        document.getElementById("myInput").disabled = false;
        document.getElementById("myButton").disabled = false;
    });

    //load movies
            document.getElementById("movieButton").addEventListener("click", function() {
        gameMode = "movies";
        gameStage = "waiting";
        document.getElementById("myInput").disabled = false;
        document.getElementById("myButton").disabled = false;
    });



    console.log("Game Stage: " + gameStage);

//wait until start button pressed


async function checkData() {
  await waitUntil(() => gameStage === "waiting");
checkData();}
console.log("lebron james2");

        document.getElementById("myInput").disabled = true;
        document.getElementById("myButton").disabled = true;
        document.getElementById("startButton").disabled = true;
        document.getElementById("startButton").addEventListener("click", function() {   
        gameStage = "playing";
        document.getElementById("myInput").disabled = false;
        document.getElementById("myButton").disabled = false;
            loadQuestion();
        });
 

console.log("Game Stage: " + gameStage);



//loading questions
function loadQuestion() {
    if (gameStage === "playing") {

     //math mode
if (gameMode === "math") {

    if (questionCount < 5) {
        randQuestion = mathQuestionlist[Math.floor(Math.random() * mathQuestionlist.length)];
        while (usedQuestions.includes(randQuestion)) {
            randQuestion = mathQuestionlist[Math.floor(Math.random() * mathQuestionlist.length)];
        }
        usedQuestions.push(randQuestion);
        correspondingAnswer.push(randQuestion);
        document.getElementById("questionText").innerText = randQuestion;
    }}


}}

//checking answers
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


//checking all answers at the end
function checkAll(answers) {
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answerlist[questionlist.indexOf(correspondingAnswer[i])]) {
            correct++;
        }
    }
    return correct;
}









//initializing quiz
async function checkData() {
  await waitUntil(() => gameStage === "playing");
checkData();}
console.log("lebron james3");

loadQuestion();
if (gameMode === "math") {
    document.getElementById("guessButton").addEventListener("click", function() {
        checkAnswer(document.getElementById("myInput").value);
    });
}
document.getElementById("guessButton").addEventListener("submit", function(event) {
    event.preventDefault();
    checkAnswer(document.getElementById("myInput").value);
});
