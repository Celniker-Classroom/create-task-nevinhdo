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

//science lists
const scienceQuestionlist = ["What process do plants use to make their own food?", "What force keeps us on the ground?", "What is the chemical symbol for water?", "What is the outermost layer of Earth called?", "Which organ pumps blood through the body?", "What type of energy is stored in a stretched rubber band?", "What is a substance made of only one type of atom called?", "What is the water cycle process where water turns into vapor?", "What is the basic unit of life?", "What do we call the push or pull on an object?", "Which gas do humans need to breathe?", "What causes day and night on Earth?", "Which system in the body is responsible for fighting disease?", "What happens to an object when an unbalanced force acts on it?", "What is the smallest part of an element called?", "What natural disaster is measured with the Richter scale?"];
const scienceAnswerlist = ["Photosynthesis", "Gravity", "H₂O", "Crust", "Heart", "Potential", "Element", "Evaporation", "Cell", "Force", "Oxygen", "Rotation", "Immune", "It accelerates", "Atom", "Earthquakes"];
const scienceChoiceslist = [["Respiration", "Digestion", "Photosynthesis", "Fermentation"], ["Magnetism", "Friction", "Gravity", "Tension"], ["O₂", "H₂O", "CO₂", "HO"], ["Core", "Mantle", "Crust", "Lava"], ["Brain", "Liver", "Heart", "Lung"], ["Kinetic", "Thermal", "Potential", "Electrical"], ["Mixture", "Compound", "Element", "Solution"], ["Condensation", "Precipitation", "Evaporation", "Collection"], ["Tissue", "Organ", "Cell", "Atom"], ["Energy", "Force", "Power", "Mass"], ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"], ["Revolution", "Rotation", "Orbit", "Tilt only"], ["Digestive", "Immune", "Nervous", "Skeletal"], ["It stays still", "It disappears", "It accelerates", "It becomes lighter"], ["Molecule", "Atom", "Cell", "Proton"], ["Hurricanes", "Tornadoes", "Earthquakes", "Volcanoes"]];

//history lists
const historyQuestionlist = ["Which ancient civilization built the pyramids of Giza?", "Who was the leader of Nazi Germany during WWII?", "Who was the first President of the United States?", "Who is credited with discovering the Americas in 1492?", "What was the main language of the Roman Empire?", "Which side won the American Civil War?", "What city-state is known for democracy?", "Which two countries were the main rivals during the Cold War?", "What was a major cause of the French Revolution?", "What writing system did Egyptians use?", "What was the system where lords gave land to vassals called?", "Which document begins with 'We the People'?", "What event triggered WWI?", "Which structure was built to protect China from invasions?", "What does the Renaissance primarily refer to?", "Which amendment abolished slavery in the U.S.?", "What was the Roman arena used for gladiator fights called?", "What was the name of the plane that dropped the first atomic bomb?", "Where did the Industrial Revolution begin?", "What international organization was created after WWII to promote peace?", "Which ancient civilization invented cuneiform writing?"];
const historyAnswerlist = ["Egyptians", "Adolf Hitler", "George Washington", "Christopher Columbus", "Latin", "Union", "Athens", "U.S. and Soviet Union", "Social inequality", "Hieroglyphics", "Feudalism", "U.S. Constitution", "Assassination of Archduke Franz Ferdinand", "Great Wall of China", "Rebirth of art and learning", "13th", "Colosseum", "Enola Gay", "England", "United Nations", "Sumerians"];
const historyChoiceslist = [["Romans", "Greeks", "Egyptians", "Persians"], ["Joseph Stalin", "Benito Mussolini", "Adolf Hitler", "Winston Churchill"], ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"], ["Ferdinand Magellan", "Christopher Columbus", "Marco Polo", "Vasco da Gama"], ["Greek", "Latin", "Italian", "Hebrew"], ["Confederacy", "Union", "Britain", "France"], ["Sparta", "Athens", "Troy", "Corinth"], ["U.S. and China", "U.S. and Germany", "U.S. and Soviet Union", "U.K. and France"], ["Space exploration", "Social inequality", "Industrial automation", "Colonization of America"], ["Cuneiform", "Hieroglyphics", "Latin script", "Sanskrit"], ["Democracy", "Feudalism", "Communism", "Capitalism"], ["Bill of Rights", "Declaration of Independence", "U.S. Constitution", "Articles of Confederation"], ["Attack on Pearl Harbor", "Assassination of Archduke Franz Ferdinand", "Russian Revolution", "Treaty of Versailles"], ["Colosseum", "Great Wall of China", "Taj Mahal", "Parthenon"], ["Religious wars", "Rebirth of art and learning", "Industrial revolution", "Space age"], ["1st", "10th", "13th", "19th"], ["Forum", "Pantheon", "Colosseum", "Agora"], ["USS Arizona", "Enola Gay", "HMS Victory", "USS Missouri"], ["United States", "Germany", "England", "France"], ["NATO", "United Nations", "European Union", "World Bank"], ["Egyptians", "Sumerians", "Romans", "Greeks"]];

//video games lists
const videogamesQuestionlist = ["Which company created Mario?", "What is the best-selling video game of all time?", "What is the name of Mario's brother?", "Which game features a battle royale mode called 'Warzone'?", "Who is the main character in The Legend of Zelda series?", "What company created PlayStation?", "Which game features Creepers, Endermen, and the Ender Dragon?", "What is the name of the princess Mario often rescues?", "Which game popularized the battle royale genre in 2017?", "What is the main currency in Roblox?", "Which character is known for 'It's-a me, -----!'?", "Which game series features the character Master Chief?", "What animal is Sonic?", "Which company makes Xbox?", "What is the goal of most battle royale games?", "Which game features blocks and survival crafting?", "What is the main character in Pokemon called by default?", "Which game features a map called Verdansk?", "What is the main goal in The Sims?", "Which company created Pokemon?"];
const videogamesAnswerlist = ["Nintendo", "Minecraft", "Luigi", "Call of Duty", "Link", "Sony", "Minecraft", "Peach", "Fortnite", "Robux", "Mario", "Halo", "Hedgehog", "Microsoft", "Be the last player alive", "Minecraft", "Player character (Trainer)", "Call of Duty Warzone", "Control and simulate life", "Game Freak"];
const videogamesChoiceslist = [["Nintendo", "Sony", "Microsoft", "Sega"], ["Minecraft", "Grand Theft Auto V", "Tetris", "Wii Sports"], ["Wario", "Luigi", "Toad", "Bowser"], ["Call of Duty", "Fortnite", "Apex Legends", "PUBG"], ["Zelda", "Link", "Ganon", "Epona"], ["Sony", "Nintendo", "Microsoft", "Atari"], ["Minecraft", "Roblox", "Terraria", "Fortnite"], ["Daisy", "Peach", "Rosalina", "Zelda"], ["Fortnite", "PUBG", "Apex Legends", "Call of Duty"], ["Coins", "Credits", "Robux", "Gems"], ["Luigi", "Mario", "Waluigi", "Bowser"], ["Halo", "Destiny", "Call of Duty", "Titanfall"], ["Fox", "Hedgehog", "Porcupine", "Cat"], ["Microsoft", "Sony", "Nintendo", "Valve"], ["Build cities", "Collect coins", "Be the last player alive", "Complete puzzles"], ["Terraria", "Minecraft", "Stardew Valley", "The Sims"], ["Ash", "Red", "Player character (Trainer)", "Pikachu"], ["Call of Duty Warzone", "Fortnite", "PUBG", "Apex Legends"], ["Win wars", "Build cities", "Control and simulate life", "Solve mysteries"], ["Nintendo", "Game Freak", "Sony", "Ubisoft"]];

let usedQuestions = [];
let gameStage = "beginning";
let gameMode = "math";
console.log("Game Stage: " + gameStage);

const choiceColors = ["#e63946", "#2a9d8f", "#e9c46a", "#457b9d"];

//shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//load sports mode
document.getElementById("sportsButton").addEventListener("click", function() {
    gameMode = "sports";
    gameStage = "waiting";
    showStartScreen();
});

//load music mode
document.getElementById("musicButton").addEventListener("click", function() {
    gameMode = "music";
    gameStage = "waiting";
    showStartScreen();
});

//load movies mode
document.getElementById("movieButton").addEventListener("click", function() {
    gameMode = "movies";
    gameStage = "waiting";
    showStartScreen();
});

//load math mode
document.getElementById("mathButton").addEventListener("click", function() {
    gameMode = "math";
    gameStage = "waiting";
    showStartScreen();
});

//load science mode
document.getElementById("scienceButton").addEventListener("click", function() {
    gameMode = "science";
    gameStage = "waiting";
    showStartScreen();
});

//load history mode
document.getElementById("historyButton").addEventListener("click", function() {
    gameMode = "history";
    gameStage = "waiting";
    showStartScreen();
});

//load video games mode
document.getElementById("videogamesButton").addEventListener("click", function() {
    gameMode = "videogames";
    gameStage = "waiting";
    showStartScreen();
});

//make whole card clickable
document.getElementById("sportsCard").addEventListener("click", function() {
    gameMode = "sports";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("mathCard").addEventListener("click", function() {
    gameMode = "math";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("musicCard").addEventListener("click", function() {
    gameMode = "music";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("movieCard").addEventListener("click", function() {
    gameMode = "movies";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("scienceCard").addEventListener("click", function() {
    gameMode = "science";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("historyCard").addEventListener("click", function() {
    gameMode = "history";
    gameStage = "waiting";
    showStartScreen();
});

document.getElementById("videogamesCard").addEventListener("click", function() {
    gameMode = "videogames";
    gameStage = "waiting";
    showStartScreen();
});

//show start screen, hide category screen
function showStartScreen() {
    document.getElementById("categoryScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "block";
    document.getElementById("quizScreen").style.display = "none";
    document.getElementById("selectedModeText").innerText = "You selected: " + gameMode.charAt(0).toUpperCase() + gameMode.slice(1);
}

//wait until start button is pressed
document.getElementById("startButton").addEventListener("click", function() {
    if (gameStage !== "waiting") return;
    gameStage = "playing";
    questionCount = 0;
    userAnswers = [];
    correspondingAnswer = [];
    usedQuestions = [];
    document.getElementById("categoryScreen").style.display = "none";
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("quizScreen").style.display = "block";
    loadQuestion();
});


//loading questions
function loadQuestion() {
    if (gameStage === "playing") {

        let questionlist = gameMode === "math" ? mathQuestionlist : gameMode === "music" ? musicQuestionlist : gameMode === "movies" ? movieQuestionlist : gameMode === "sports" ? sportsQuestionlist : gameMode === "science" ? scienceQuestionlist : gameMode === "history" ? historyQuestionlist : videogamesQuestionlist;
        let choiceslist = gameMode === "math" ? mathChoiceslist : gameMode === "music" ? musicChoiceslist : gameMode === "movies" ? movieChoiceslist : gameMode === "sports" ? sportsChoiceslist : gameMode === "science" ? scienceChoiceslist : gameMode === "history" ? historyChoiceslist : videogamesChoiceslist;

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
        }
    }
}


//checking answers
function checkAnswer(userAnswer) {
    userAnswers.push(userAnswer);
    questionCount++;
    if (questionCount >= 10) {
        const finalScore = checkAll(userAnswers);
        document.getElementById("score").innerText = "Final Score: " + finalScore + "/10";
        document.getElementById("questionText").innerText = "Quiz Complete!";
        document.getElementById("choicesContainer").innerHTML = "";
    } else {
        document.getElementById("score").innerText = "Questions answered: " + questionCount + "/10";
        loadQuestion();
    }
}


//checking all answers at the end
function checkAll(answers) {
    let answerlist = gameMode === "math" ? mathAnswerlist : gameMode === "music" ? musicAnswerlist : gameMode === "movies" ? movieAnswerlist : gameMode === "sports" ? sportsAnswerlist : gameMode === "science" ? scienceAnswerlist : gameMode === "history" ? historyAnswerlist : videogamesAnswerlist;
    let correct = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === answerlist[correspondingAnswer[i]]) {
            correct++;
        }
    }
    return correct;
}