// add javascript here

const wordlist = ["apple", "horizon", "whisper", "glitch", "mountain", "velvet", "thunder", "pocket", "cascade", "nebula", "rhythm", "bridge", "silver", "anchor", "jungle", "frozen", "locket", "echo", "button", "puddle", "galaxy", "window", "crimson", "marble", "breeze", "clover", "starlight", "cactus", "tunnel", "puzzle", "orbit", "fable", "drifting", "mellow", "quartz", "vivid", "shadow", "prairie", "copper", "journey", "mitten", "harbor", "zenith", "cricket", "sketch", "legend", "pioneer", "flame", "ocean", "willow"];

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomIndex];
    var randomWord = getRandomWord();
    console.log(randomWord);
}

document.getElementById("randomword").textContent = getRandomWord();
document.getElementById("randomWordButton").addEventListener("click", revealWord);


function revealWord() {
  var x = document.getElementById("randomword").style;
  if (x.display === "none") {
    x.display = "block";
  } else {
    x.style.display = "none";
  }
}
