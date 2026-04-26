//setting variables
let randQuestion = "";
let questionCount = 0;
let userAnswers = [];
let correspondingAnswer = [];
let totalScore = 0;
let questionScore = 0;

// Timer variables
let timerInterval = null;
let timeLeft = 10;
const TIME_PER_QUESTION = 10;
const MAX_POINTS = 100;

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

const sportsQuestionlist = ["Who won the 2023-2024 NBA championship?", "Who won the 2022 FIFA World Cup?", "Which NFL team has the most Super Bowl wins?", "Who holds the 100m world record?", "Which country has won the most Olympic gold medals historically?", "How many points is a 3-pointer worth in basketball?", "How many players are on the field per soccer team?", "How many points is a touchdown worth?", "How many meters is one lap around a standard outdoor track?", "Who has the most Olympic gold medals of all time?", "Which player is known as 'King James'?", "Which player is widely known as 'CR7'?", "What position usually throws the ball in football?", "What event measures explosive horizontal jumping distance?", "In which city were the 2016 Summer Olympics held?", "Which NBA player is known for 'Splash Brothers' with Klay Thompson?", "What country is Lionel Messi from?", "How many downs does a team get to advance 10 yards in American Football?", "Which event involves jumping over a bar using a pole?", "What symbol represents the Olympic Games?"];
const sportsAnswerlist = ["Boston Celtics", "Argentina", "New England Patriots", "Usain Bolt", "United States", "3", "11", "6", "400m", "Michael Phelps", "LeBron James", "Cristiano Ronaldo", "Quarterback", "Long Jump", "Rio de Janeiro", "Stephen Curry", "Argentina", "4", "Pole Vault", "Rings"];
const sportsChoiceslist = [["Boston Celtics", "Golden State Warriors", "Denver Nuggets", "Miami Heat"], ["Argentina", "France", "Brazil", "Germany"], ["New England Patriots", "Kansas City Chiefs", "Green Bay Packers", "Chicago Bears"], ["Usain Bolt", "Tyson Gay", "Noah Lyles", "Asafa Powell"], ["United States", "China", "Russia", "United Kingdom"], ["1", "2", "3", "4"], ["9", "10", "11", "12"], ["3", "6", "7", "8"], ["200m", "300m", "400m", "500m"], ["Michael Phelps", "Usain Bolt", "Simone Biles", "Carl Lewis"], ["LeBron James", "Kevin Durant", "Stephen Curry", "Kawhi Leonard"], ["Cristiano Ronaldo", "Lionel Messi", "Neymar", "Kylian Mbappé"], ["Running Back", "Quarterback", "Wide Receiver", "Linebacker"], ["High Jump", "Long Jump", "Pole Vault", "Triple Jump"], ["Rio de Janeiro", "Tokyo", "London", "Beijing"], ["Stephen Curry", "Damian Lillard", "James Harden", "Russell Westbrook"], ["Brazil", "Argentina", "Spain", "Portugal"], ["3", "4", "5", "6"], ["High Jump", "Long Jump", "Pole Vault", "Hurdles"], ["Star", "Flame", "Rings", "Shield"]];

const scienceQuestionlist = ["What process do plants use to make their own food?", "What force keeps us on the ground?", "What is the chemical symbol for water?", "What is the outermost layer of Earth called?", "Which organ pumps blood through the body?", "What type of energy is stored in a stretched rubber band?", "What is a substance made of only one type of atom called?", "What is the water cycle process where water turns into vapor?", "What is the basic unit of life?", "What do we call the push or pull on an object?", "Which gas do humans need to breathe?", "What causes day and night on Earth?", "Which system in the body is responsible for fighting disease?", "What happens to an object when an unbalanced force acts on it?", "What is the smallest part of an element called?", "What natural disaster is measured with the Richter scale?"];
const scienceAnswerlist = ["Photosynthesis", "Gravity", "H₂O", "Crust", "Heart", "Potential", "Element", "Evaporation", "Cell", "Force", "Oxygen", "Rotation", "Immune", "It accelerates", "Atom", "Earthquakes"];
const scienceChoiceslist = [["Respiration", "Digestion", "Photosynthesis", "Fermentation"], ["Magnetism", "Friction", "Gravity", "Tension"], ["O₂", "H₂O", "CO₂", "HO"], ["Core", "Mantle", "Crust", "Lava"], ["Brain", "Liver", "Heart", "Lung"], ["Kinetic", "Thermal", "Potential", "Electrical"], ["Mixture", "Compound", "Element", "Solution"], ["Condensation", "Precipitation", "Evaporation", "Collection"], ["Tissue", "Organ", "Cell", "Atom"], ["Energy", "Force", "Power", "Mass"], ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], ["Revolution", "Rotation", "Orbit", "Tilt only"], ["Digestive", "Immune", "Nervous", "Skeletal"], ["It stays still", "It disappears", "It accelerates", "It becomes lighter"], ["Molecule", "Atom", "Cell", "Proton"], ["Hurricanes", "Tornadoes", "Earthquakes", "Volcanoes"]];

const historyQuestionlist = ["Which ancient civilization built the pyramids of Giza?", "Who was the leader of Nazi Germany during WWII?", "Who was the first President of the United States?", "Who is credited with discovering the Americas in 1492?", "What was the main language of the Roman Empire?", "Which side won the American Civil War?", "What city-state is known for democracy?", "Which two countries were the main rivals during the Cold War?", "What was a major cause of the French Revolution?", "What writing system did Egyptians use?", "What was the system where lords gave land to vassals called?", "Which document begins with 'We the People'?", "What event triggered WWI?", "Which structure was built to protect China from invasions?", "What does the Renaissance primarily refer to?", "Which amendment abolished slavery in the U.S.?", "What was the Roman arena used for gladiator fights called?", "What was the name of the plane that dropped the first atomic bomb?", "Where did the Industrial Revolution begin?", "What international organization was created after WWII to promote peace?", "Which ancient civilization invented cuneiform writing?"];
const historyAnswerlist = ["Egyptians", "Adolf Hitler", "George Washington", "Christopher Columbus", "Latin", "Union", "Athens", "U.S. and Soviet Union", "Social inequality", "Hieroglyphics", "Feudalism", "U.S. Constitution", "Assassination of Archduke Franz Ferdinand", "Great Wall of China", "Rebirth of art and learning", "13th", "Colosseum", "Enola Gay", "England", "United Nations", "Sumerians"];
const historyChoiceslist = [["Romans", "Greeks", "Egyptians", "Persians"], ["Joseph Stalin", "Benito Mussolini", "Adolf Hitler", "Winston Churchill"], ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], ["Ferdinand Magellan", "Christopher Columbus", "Marco Polo", "Vasco da Gama"], ["Greek", "Latin", "Italian", "Hebrew"], ["Confederacy", "Union", "Britain", "France"], ["Sparta", "Athens", "Troy", "Corinth"], ["U.S. and China", "U.S. and Germany", "U.S. and Soviet Union", "U.K. and France"], ["Space exploration", "Social inequality", "Industrial automation", "Colonization of America"], ["Cuneiform", "Hieroglyphics", "Latin script", "Sanskrit"], ["Democracy", "Feudalism", "Communism", "Capitalism"], ["Bill of Rights", "Declaration of Independence", "U.S. Constitution", "Articles of Confederation"], ["Attack on Pearl Harbor", "Assassination of Archduke Franz Ferdinand", "Russian Revolution", "Treaty of Versailles"], ["Colosseum", "Great Wall of China", "Taj Mahal", "Parthenon"], ["Religious wars", "Rebirth of art and learning", "Industrial revolution", "Space age"], ["1st", "10th", "13th", "19th"], ["Forum", "Pantheon", "Colosseum", "Agora"], ["USS Arizona", "Enola Gay", "HMS Victory", "USS Missouri"], ["United States", "Germany", "England", "France"], ["NATO", "United Nations", "European Union", "World Bank"], ["Egyptians", "Sumerians", "Romans", "Greeks"]];

const videogamesQuestionlist = ["Which company created Mario?", "What is the best-selling video game of all time?", "What is the name of Mario's brother?", "Which game features a battle royale mode called 'Warzone'?", "Who is the main character in The Legend of Zelda series?", "What company created PlayStation?", "Which game features Creepers, Endermen, and the Ender Dragon?", "What is the name of the princess Mario often rescues?", "Which game popularized the battle royale genre in 2017?", "What is the main currency in Roblox?", "Which character is known for 'It's-a me, -----!'?", "Which game series features the character Master Chief?", "What animal is Sonic?", "Which company makes Xbox?", "What is the goal of most battle royale games?", "Which game features blocks and survival crafting?", "What is a person who uses pokemon to battle called", "Which game features a map called Verdansk?", "What is the main goal in The Sims?", "Which company created Pokemon?"];
const videogamesAnswerlist = ["Nintendo", "Minecraft", "Luigi", "Call of Duty", "Link", "Sony", "Minecraft", "Peach", "Fortnite", "Robux", "Mario", "Halo", "Hedgehog", "Microsoft", "Be the last player alive", "Minecraft", "Trainer", "Call of Duty Warzone", "Control and simulate life", "Game Freak"];
const videogamesChoiceslist = [["Nintendo", "Sony", "Microsoft", "Sega"], ["Minecraft", "Grand Theft Auto V", "Tetris", "Wii Sports"], ["Wario", "Luigi", "Toad", "Bowser"], ["Call of Duty", "Fortnite", "Apex Legends", "PUBG"], ["Zelda", "Link", "Ganon", "Epona"], ["Sony", "Nintendo", "Microsoft", "Atari"], ["Minecraft", "Roblox", "Terraria", "Fortnite"], ["Daisy", "Peach", "Rosalina", "Zelda"], ["Fortnite", "PUBG", "Apex Legends", "Call of Duty"], ["Coins", "Credits", "Robux", "Gems"], ["Luigi", "Mario", "Waluigi", "Bowser"], ["Halo", "Destiny", "Call of Duty", "Titanfall"], ["Fox", "Hedgehog", "Porcupine", "Cat"], ["Microsoft", "Sony", "Nintendo", "Valve"], ["Build cities", "Collect coins", "Be the last player alive", "Complete puzzles"], ["Terraria", "Minecraft", "Stardew Valley", "The Sims"], ["Ash", "Red", "Trainers", "Pikachu"], ["Call of Duty Warzone", "Fortnite", "PUBG", "Apex Legends"], ["Win wars", "Build cities", "Control and simulate life", "Solve mysteries"], ["Nintendo", "Game Freak", "Sony", "Ubisoft"]];

const animalsQuestionlist = ["What is the largest species of shark in the world?", "Which mammal is known to have the strongest bite force?", "What is a group of crows called?", "Which animal has the longest migration of any mammal?", "What is the only mammal capable of true flight?", "Which big cat is the fastest land animal?", "What is a group of lions called?", "Which animal has the largest brain relative to body size?", "What is the largest living land animal?", "Which bird is known for mimicking human speech best?", "What is the fastest bird in the world?", "Which ocean animal has three hearts?", "What is the only continent where giraffes live in the wild?", "Which animal sleeps the most per day on average?", "What is the name of a baby kangaroo?", "Which animal has the longest lifespan among commonly known animals?", "What is the only venomous primate?"];
const animalsAnswerlist = ["Whale Shark", "Hippo", "Murder", "Caribou (Reindeer)", "Bat", "Cheetah", "Pride", "Human", "African Elephant", "Parrot", "Peregrine Falcon", "Octopus", "Africa", "Koala", "Joey", "Bowhead Whale", "Slow Loris"];
const animalsChoiceslist = [["Great White Shark", "Tiger Shark", "Whale Shark", "Hammerhead Shark"], ["Lion", "Crocodile", "Hyena", "Hippo"], ["Pack", "Murder", "Herd", "Flock"], ["Elephant", "Whale", "Caribou (Reindeer)", "Zebra"], ["Flying squirrel", "Bat", "Sugar glider", "Pterosaur"], ["Lion", "Cheetah", "Leopard", "Tiger"], ["Pack", "Pride", "Herd", "Troop"], ["Elephant", "Human", "Dolphin", "Whale"], ["White Rhino", "Hippopotamus", "African Elephant", "Giraffe"], ["Crow", "Parrot", "Eagle", "Owl"], ["Eagle", "Peregrine Falcon", "Ostrich", "Hawk"], ["Shark", "Octopus", "Dolphin", "Jellyfish"], ["Asia", "Africa", "South America", "Australia"], ["Koala", "Sloth", "Cat", "Bat"], ["Pup", "Calf", "Joey", "Cub"], ["Elephant", "Bowhead Whale", "Tortoise", "Parrot"], ["Lemur", "Slow Loris", "Monkey", "Gorilla"]];

let usedQuestions = [];
let gameStage = "beginning";
let gameMode = "math";

const choiceColors = ["#e63946", "#2a9d8f", "#e9c46a", "#457b9d"];

//this function is for the high scores. it uses the local storage so that when the user comes back to the game, they can see their previous high scores and try to beat them. it also checks if the current score is a new high score and updates it if necessary.
function getHighScores() {
    try {
        return JSON.parse(localStorage.getItem("quizHighScores")) || {};
    } catch { return {}; }
}

function saveHighScore(mode, score) {
    let scores = getHighScores();
    if (!scores[mode] || score > scores[mode]) {
        scores[mode] = score;
        localStorage.setItem("quizHighScores", JSON.stringify(scores));
        return true; //this returns true if a new high score was set, which we can use to show a special message at the end of the quiz
    }
    return false;
}

function getHighScore(mode) {
    return getHighScores()[mode] || 0;
}

//  this function is for the timer. it starts a countdown from 10 seconds for each question and updates the display. if the timer runs out, it automatically checks the answer as incorrect.
function startTimer() {
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            checkAnswer(null);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById("timerDisplay");
    if (!timerEl) return;
    timerEl.innerText = timeLeft + "s";

    // Color of the bar at the bottom chagnes
    const pct = timeLeft / TIME_PER_QUESTION;
    timerEl.style.color = pct > 0.5 ? "#2a9d8f" : pct > 0.25 ? "#e9c46a" : "#e63946";

    // The bar shrinking as time increases
    const bar = document.getElementById("timerBar");
    if (bar) {
        bar.style.width = (pct * 100) + "%";
        bar.style.backgroundColor = timerEl.style.color;
    }
}

// Calculates points based on time used. Faster answers earn more points, with a minimum of 10 points for a correct answer and a maximum of 100 points for an instant answer.
function calcPoints(timeUsed) {
    const pts = Math.round(MAX_POINTS - ((MAX_POINTS - 10) / TIME_PER_QUESTION) * timeUsed);
    return Math.max(10, Math.min(MAX_POINTS, pts));
}

// shuffles the choices for each question so that the correct answer isn't always in the same position
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function getList(type) {
    switch (gameMode) {
        case "math":
            if (type === "q") return mathQuestionlist;
            if (type === "a") return mathAnswerlist;
            if (type === "c") return mathChoiceslist;
            break;
        case "music":
            if (type === "q") return musicQuestionlist;
            if (type === "a") return musicAnswerlist;
            if (type === "c") return musicChoiceslist;
            break;
        case "movies":
            if (type === "q") return movieQuestionlist;
            if (type === "a") return movieAnswerlist;
            if (type === "c") return movieChoiceslist;
            break;
        case "sports":
            if (type === "q") return sportsQuestionlist;
            if (type === "a") return sportsAnswerlist;
            if (type === "c") return sportsChoiceslist;
            break;
        case "science":
            if (type === "q") return scienceQuestionlist;
            if (type === "a") return scienceAnswerlist;
            if (type === "c") return scienceChoiceslist;
            break;
        case "history":
            if (type === "q") return historyQuestionlist;
            if (type === "a") return historyAnswerlist;
            if (type === "c") return historyChoiceslist;
            break;
        case "videogames":
            if (type === "q") return videogamesQuestionlist;
            if (type === "a") return videogamesAnswerlist;
            if (type === "c") return videogamesChoiceslist;
            break;
        case "animals":
            if (type === "q") return animalsQuestionlist;
            if (type === "a") return animalsAnswerlist;
            if (type === "c") return animalsChoiceslist;
            break;
        default:
            console.error("Unknown game mode!");
            return [];
    }
}

// creates the event listeners for the category buttons on the start screen. when a button is clicked, it sets the game mode and shows the start screen for that mode.
["sports","math","music","movie","science","history","videogames","animals"].forEach(id => {
    const modeKey = id === "movie" ? "movies" : id;

    const btn = document.getElementById(id + "Button");
    if (btn) btn.addEventListener("click", () => { gameMode = modeKey; gameStage = "waiting"; showStartScreen(); });

    const card = document.getElementById(id + "Card");
    if (card) card.addEventListener("click", () => { gameMode = modeKey; gameStage = "waiting"; showStartScreen(); });
});

// show start
function showStartScreen() {
    document.getElementById("categoryScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("quizScreen").style.display = "none";
    const label = gameMode.charAt(0).toUpperCase() + gameMode.slice(1);
    document.getElementById("selectedModeText").innerText = "You selected: " + label;

    // Show existing high score on start screen
    const hs = getHighScore(gameMode);
    let hsEl = document.getElementById("startScreenHighScore");
    if (!hsEl) {
        hsEl = document.createElement("p");
        hsEl.id = "startScreenHighScore";
        hsEl.style.textAlign = "center";
        hsEl.style.fontSize = "22px";
        hsEl.style.marginTop = "8px";
        document.getElementById("startScreen").insertBefore(hsEl, document.getElementById("startButton"));
    }
    hsEl.innerText = hs > 0 ? " High Score: " + hs + " pts" : "No high score yet — be the first!";
}

// starts the quiz when the start button is clicked. it initializes all the necessary variables and loads the first question.
document.getElementById("startButton").addEventListener("click", function() {
    if (gameStage !== "waiting") return;
    gameStage = "playing";
    questionCount = 0;
    totalScore = 0;
    userAnswers = [];
    correspondingAnswer = [];
    usedQuestions = [];

    document.getElementById("categoryScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    document.getElementById("score").innerText = "Question 1/10  •  Score: 0";
    loadQuestion();
});

// load question
function loadQuestion() {
    if (gameStage !== "playing") return;

    const questionlist = getList("q");
    const choiceslist  = getList("c");

    if (questionCount < 10) {
        let randIndex = Math.floor(Math.random() * questionlist.length);
        while (usedQuestions.includes(randIndex)) {
            randIndex = Math.floor(Math.random() * questionlist.length);
        }
        usedQuestions.push(randIndex);
        correspondingAnswer.push(randIndex);
        document.getElementById("questionText").innerText = questionlist[randIndex];

        let choices = shuffle([...choiceslist[randIndex]]);
        document.getElementById("choicesContainer").innerHTML = "";

        for (let i = 0; i < choices.length; i++) {
            let btn = document.createElement("button");
            btn.innerText = choices[i];
            btn.className = "choiceBtn";
            btn.style.backgroundColor = choiceColors[i];
            btn.addEventListener("click", function() {
                checkAnswer(choices[i]);
            });
            document.getElementById("choicesContainer").appendChild(btn);
        }

        startTimer();
    }
}

// checks the answer when a choice is clicked or when time runs out. it calculates the points earned based on how quickly the user answered and updates the score. then it either loads the next question or ends the quiz if 10 questions have been answered.
function checkAnswer(userAnswer) {
    stopTimer();

    const answerlist = getList("a");
    const timeUsed = TIME_PER_QUESTION - timeLeft;
    const correctAnswer = answerlist[correspondingAnswer[correspondingAnswer.length - 1]];
    const isCorrect = userAnswer !== null && userAnswer === correctAnswer;
    const earned = isCorrect ? calcPoints(timeUsed) : 0;

    totalScore += earned;
    userAnswers.push({ answer: userAnswer, correct: isCorrect, points: earned, timeUsed });

    questionCount++;

    if (questionCount >= 10) {
        endQuiz();
    } else {
        document.getElementById("score").innerText =
            "Question " + (questionCount + 1) + "/10  •  Score: " + totalScore;
        loadQuestion();
    }
}

// ends the quiz and shows the final score, along with a breakdown of each question and answer. it also checks if the user achieved a new high score and displays that information. finally, it provides a button to play again, which resets all variables and shows the category selection screen.
function endQuiz() {
    const isNewHigh = saveHighScore(gameMode, totalScore);
    const prevHigh  = getHighScore(gameMode);

    document.getElementById("questionText").style.display = "none";
    document.getElementById("choicesContainer").style.display = "none";

    // Timer bar/display gone at end
    const timerWrap = document.getElementById("timerWrapper");
    if (timerWrap) timerWrap.style.display = "none";

    // final score
    document.getElementById("score").innerHTML =
        "🎉 Final Score: <strong>" + totalScore + " / 1000</strong>" +
        (isNewHigh ? " &nbsp; New High Score!" : " &nbsp; Best: " + prevHigh);

    // results
    let container = document.getElementById("resultsContainer");
    container.innerHTML = "";
    container.style.display = "block";

    const questionlist = getList("q");
    const answerlist   = getList("a");

    for (let i = 0; i < userAnswers.length; i++) {
        const { answer, correct, points, timeUsed } = userAnswers[i];

        let box = document.createElement("div");
        box.className = correct ? "resultBox correct" : "resultBox incorrect";

        let qText = document.createElement("p");
        qText.className = "resultQuestion";
        qText.innerText = questionlist[correspondingAnswer[i]];

        let aText = document.createElement("p");
        aText.className = "resultAnswer";
        if (answer === null) {
            aText.innerText = "⏰ Time's up! (0 pts)";
        } else {
            aText.innerText = (correct ? "✓ " : "✗ ") + answer +
                (correct ? "  +" + points + " pts  (" + timeUsed.toFixed(0) + "s)" : "  +0 pts");
        }

        box.appendChild(qText);
        box.appendChild(aText);

        if (!correct) {
            let corrText = document.createElement("p");
            corrText.className = "resultCorrect";
            corrText.innerText = "Correct: " + answerlist[correspondingAnswer[i]];
            box.appendChild(corrText);
        }

        container.appendChild(box);
    }

    // play again button
    let playAgainBtn = document.createElement("button");
    playAgainBtn.innerText = "Play Again";
    playAgainBtn.className = "playAgainBtn";
    playAgainBtn.addEventListener("click", function() {
        questionCount = 0;
        totalScore = 0;
        userAnswers = [];
        correspondingAnswer = [];
        usedQuestions = [];
        gameStage = "beginning";

        document.getElementById("questionText").style.display = "block";
        document.getElementById("choicesContainer").style.display = "grid";
        if (timerWrap) timerWrap.style.display = "block";
        document.getElementById("resultsContainer").innerHTML = "";
        document.getElementById("resultsContainer").style.display = "none";
        document.getElementById("score").innerText = "Question 1/10  •  Score: 0";

        document.getElementById("categoryScreen").style.display = "block";
        document.getElementById("startScreen").style.display = "none";
        document.getElementById("quizScreen").style.display = "none";
    });
    container.appendChild(playAgainBtn);
}