//setting variables
let randQuestion = "";
let questionCount = 0;
let userAnswers = [];
let correspondingAnswer = [];

//creating lists
const mathQuestionlist = ["What is 2 + 3?", "What is 5 + 4?", "What is 10 - 3?", "What is 8 - 2?", "What is 3 x 4?", "What is 5 / 1?", "What is 15 / 3?", "What is 2 x 4?", "What is 25 / 5?", "What is 9 - 8?"];
const mathAnswerlist = ["5", "9", "7", "6", "12", "5", "5", "8", "5", "1"];
const mathChoiceslist = [["3", "4", "5", "6"], ["7", "8", "9", "10"], ["5", "6", "7", "8"], ["4", "5", "6", "7"], ["8", "10", "12", "14"], ["3", "4", "5", "6"], ["3", "4", "5", "6"], ["6", "7", "8", "9"], ["3", "4", "5", "6"], ["1", "2", "3", "4"]];

const musicQuestionlist = ["Who was the most-streamed artist on Spotify during 2025?", "Which artist is known as the 'King of Pop'?", "Which band recorded the album Abbey Road?", "Who was the youngest artist to headline Coachella in 2019?", "Which artist released the hit song 'Blinding Lights'?", "Which artist is famous for the song 'Bohemian Rhapsody'?", "Who became famous from the album SOUR in 2021?", "Which artist is known for the album Purple Rain?", "Which artist popularized reggaeton globally in recent years?", "Which band is known for the song 'Hotel California'?", "Who was the first female artist to win Album of the Year at the Grammys three times?", "Which legendary band performed at Live Aid in one of the greatest live performances ever?"];
const musicAnswerlist = ["Bad Bunny", "Michael Jackson", "The Beatles", "Ariana Grande", "The Weeknd", "Queen", "Olivia Rodrigo", "Prince", "Bad Bunny", "Eagles", "Taylor Swift", "Queen"];
const musicChoiceslist = [["Bad Bunny", "Taylor Swift", "Kendrick Lamar", "Drake"], ["Elvis Presley", "Michael Jackson", "Prince", "Stevie Wonder"], ["The Rolling Stones", "The Beatles", "Queen", "Pink Floyd"], ["Ariana Grande", "Billie Eilish", "Doja Cat", "Olivia Rodrigo"], ["The Weeknd", "Post Malone", "Justin Bieber", "Harry Styles"], ["Queen", "Led Zeppelin", "The Who", "Eagles"], ["Olivia Rodrigo", "Billie Eilish", "SZA", "Dua Lipa"], ["Prince", "David Bowie", "Elton John", "Bruce Springsteen"], ["Bad Bunny", "J Balvin", "Daddy Yankee", "Maluma"], ["Eagles", "Fleetwood Mac", "Journey", "Boston"], ["Adele", "Taylor Swift", "Beyoncé", "Whitney Houston"], ["Queen", "U2", "The Who", "Dire Straits"]];

const movieQuestionlist = ["In Titanic, who plays Jack Dawson?", "What is the name of the wizard school in Harry Potter?", "In The Lion King, what is Simba's father's name?", "What color pill does Neo take in The Matrix?", "Who directed Jurassic Park?", "In Forrest Gump, what phrase does Forrest often say about life?", "What movie features the quote 'I'm the king of the world!'?", "Which superhero is known as the Dark Knight?", "What animated movie features the character Woody?", "In Frozen, what is the name of Elsa's sister?", "Who directed Pulp Fiction?", "What year was the original Star Wars released?"];
const movieAnswerlist = ["Leonardo DiCaprio", "Hogwarts", "Mufasa", "Red pill", "Steven Spielberg", "Life is like a box of chocolates.", "Titanic", "Batman", "Toy Story", "Anna", "Quentin Tarantino", "1977"];
const movieChoiceslist = [["Leonardo DiCaprio", "Brad Pitt", "Johnny Depp", "Tom Cruise"], ["Hogwarts", "Durmstrang", "Beauxbatons", "Ravenhall"], ["Mufasa", "Scar", "Ahadi", "Zazu"], ["Red pill", "Blue pill", "Green pill", "Black pill"], ["Steven Spielberg", "James Cameron", "Christopher Nolan", "George Lucas"], ["Life is like a rollercoaster.", "Life is like a box of chocolates.", "Life is what you bake it.", "Life is just a dream."], ["Titanic", "Avatar", "The Wolf of Wall Street", "Cast Away"], ["Batman", "Iron Man", "Spider-Man", "Black Panther"], ["Toy Story", "Cars", "Shrek", "Monsters, Inc."], ["Anna", "Elsa", "Rapunzel", "Kristoff"], ["Quentin Tarantino", "Martin Scorsese", "Guy Ritchie", "Ridley Scott"], ["1975", "1977", "1980", "1983"]];

//sports lists
const sportsQuestionlist = ["Who won the most recent NBA championship (2024 season)?", "Who won the 2022 FIFA World Cup?", "Which NFL team has the most Super Bowl wins?", "Who holds the 100m world record?", "Which country has won the most Olympic gold medals historically?", "How many points is a 3-pointer worth in basketball?", "How many players are on the field per soccer team?", "How many points is a touchdown worth?", "How many meters is one lap around a standard outdoor track?", "Who has the most Olympic gold medals of all time?", "Which player is known as 'King James'?", "Which player is widely known as 'CR7'?", "What position usually throws the ball in football?", "What event measures explosive horizontal jumping distance?", "In which city were the 2016 Summer Olympics held?", "Which NBA player is known for 'Splash Brothers' with Klay Thompson?", "What country is Lionel Messi from?", "How many downs does a team get to advance 10 yards?", "Which event involves jumping over a bar using a pole?", "What symbol represents the Olympic Games?"];
const sportsAnswerlist = ["Boston Celtics", "Argentina", "New England Patriots", "Usain Bolt", "United States", "3", "11", "6", "400m", "Michael Phelps", "LeBron James", "Cristiano Ronaldo", "Quarterback", "Long Jump", "Rio de Janeiro", "Stephen Curry", "Argentina", "4", "Pole Vault", "Rings"];
const sportsChoiceslist = [["Boston Celtics", "Golden State Warriors", "Denver Nuggets", "Miami Heat"], ["Argentina", "France", "Brazil", "Germany"], ["New England Patriots", "Kansas City Chiefs", "Green Bay Packers", "Chicago Bears"], ["Usain Bolt", "Tyson Gay", "Noah Lyles", "Asafa Powell"], ["United States", "China", "Russia", "United Kingdom"], ["1", "2", "3", "4"], ["9", "10", "11", "12"], ["3", "6", "7", "8"], ["200m", "300m", "400m", "500m"], ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"], ["LeBron James", "Kevin Durant", "Stephen Curry", "Kawhi Leonard"], ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappé"], ["Running Back", "Quarterback", "Wide Receiver", "Linebacker"], ["High Jump", "Long Jump", "Pole Vault", "Triple Jump"], ["Rio de Janeiro", "Tokyo", "London", "Beijing"], ["Stephen Curry", "Damian Lillard", "James Harden", "Russell Westbrook"], ["Brazil", "Argentina", "Spain", "Portugal"], ["3", "4", "5", "6"], ["High Jump", "Long Jump", "Pole Vault", "Hurdles"], ["Star", "Flame", "Rings", "Shield"]];

let usedQuestions = [];
let gameStage = "beginning";
let gameMode = "math";
console.log("Game Stage: " + gameStage);

const colors = ["#e63946", "#2a9d8f", "#e9c46a", "#457b9d"];

//disable start button at beginning
document.getElementById("startButton").disabled = true;

//load sports mode
document.getElementById("sportsButton").addEventListener("click", function() {
    gameMode = "sports";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

//load music mode
document.getElementById("musicButton").addEventListener("click", function() {
    gameMode = "music";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

//load movies mode
document.getElementById("movieButton").addEventListener("click", function() {
    gameMode = "movies";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

//load math mode
document.getElementById("mathButton").addEventListener("click", function() {
    gameMode = "math";
    gameStage = "waiting";
    document.getElementById("startButton").disabled = false;
});

//wait until start button is pressed
document.getElementById("startButton").addEventListener("click", function() {
    if (gameStage !== "waiting") return;
    gameStage = "playing";
    questionCount = 0;
    userAnswers = [];
    correspondingAnswer = [];
    usedQuestions = [];
    loadQuestion();
});


//loading questions
function loadQuestion() {
    if (gameStage === "playing") {

        let questionlist = gameMode === "math" ? mathQuestionlist : gameMode === "music" ? musicQuestionlist : gameMode === "movies" ? movieQuestionlist : sportsQuestionlist;
        let choiceslist = gameMode === "math" ? mathChoiceslist : gameMode === "music" ? musicChoiceslist : gameMode === "movies" ? movieChoiceslist : sportsChoiceslist;

        if (questionCount < 4) {
            let randIndex = Math.floor(Math.random() * questionlist.length);
            while (usedQuestions.includes(randIndex)) {
                randIndex = Math.floor(Math.random() * questionlist.length);
            }
            usedQuestions.push(randIndex);
            correspondingAnswer.push(randIndex);
            document.getElementById("questionText").innerText = questionlist[randIndex];

            let choices = choiceslist[randIndex];
            document.getElementById("choicesContainer").innerHTML = "";
            for (let i = 0; i < choices.length; i++) {
                let btn = document.createElement("button");
                btn.innerText = choices[i];
                btn.className = "choiceBtn";
                btn.style.backgroundColor = colors[i];
                btn.addEventListener("click", function() {
                    checkAnswer(choices[i]);
                });
                document.getElementById("choicesContainer").appendChild(btn);
            }
        }
    }
}


//checking answers
function checkAnswer(userAnswer) {
    userAnswers.push(userAnswer);
    questionCount++;
    if (questionCount >= 4) {
        const finalScore = checkAll(userAnswers);
        document.getElementById("score").innerText = "Final Score: " + finalScore + "/4";
        document.getElementById("questionText").innerText = "Quiz Complete!";
        document.getElementById("choicesContainer").innerHTML = "";
    } else {
        document.getElementById("score").innerText = "Questions answered: " + questionCount + "/4";
        loadQuestion();
    }
}


//checking all answers at the end
function checkAll(answers) {
    let answerlist = gameMode === "math" ? mathAnswerlist : gameMode === "music" ? musicAnswerlist : gameMode === "movies" ? movieAnswerlist : sportsAnswerlist;
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answerlist[correspondingAnswer[i]]) {
            correct++;
        }
    }
    return correct;
}