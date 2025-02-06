let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highscore;
// document.querySelector(".qst").textContent = secretNumber;
document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess-number").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".guessing").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".guessing").textContent = "🥳 Currect Number ";
    document.querySelector("body").style.backgroundColor = "yellowgreen";

    document.querySelector(".qst").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".guessing").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessing").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".guessing").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".guessing").textContent = "You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".reset").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guessing").textContent = "Start guessing...";
  document.querySelector(".guess-number").value = "";
  document.querySelector(".qst").textContent = "?";
  document.querySelector("body").style.backgroundColor = "black";
});
