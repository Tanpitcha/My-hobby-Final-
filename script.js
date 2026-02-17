document.addEventListener("DOMContentLoaded", function () {

  const buttons = document.querySelectorAll(".rps-buttons button");
  const resultText = document.getElementById("rpsResult");
  const scoreBoard = document.getElementById("scoreBoard");

  if (!buttons.length) return; // prevents affecting other pages

  let playerScore = 0;
  let computerScore = 0;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const userChoice = button.getAttribute("data-choice");
      playGame(userChoice);
    });
  });

  function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = "";

    if (userChoice === computerChoice) {
      resultMessage = "Draw 🤝";
    } 
    else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      resultMessage = "You win 🎉";
    } 
    else {
      computerScore++;
      resultMessage = "Computer wins 😅";
    }

    resultText.textContent =
      `You: ${userChoice} | Computer: ${computerChoice} → ${resultMessage}`;

    scoreBoard.textContent =
      `You: ${playerScore} | Computer: ${computerScore}`;
  }

});