let userScore = 0;
let compScore = 0;
let drawScore = 0; 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreElement = document.querySelector("#user-score");
const compScoreElement = document.querySelector("#comp-score");
const drawScoreElement = document.querySelector("#draw-score"); 
const resetBtn = document.querySelector("#reset-btn");

// Generate a computer choice
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

// Handle draw condition
const drawGame = () => {
  msg.innerText = "It's a draw!";
  drawScore++; //
  drawScoreElement.innerText = drawScore; 
};

// Check game outcome (win, loss, or draw)
const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    userScore++;
    msg.innerText = "You Won!";
    userScoreElement.innerText = userScore;
  } else {
    compScore++;
    msg.innerText = "You Lost!";
    compScoreElement.innerText = compScore;
  }
};

// Generate User choice and Add event listeners to choices
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Reset game state
resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  drawScore = 0; 
  userScoreElement.innerText = userScore;
  compScoreElement.innerText = compScore;
  drawScoreElement.innerText = drawScore; 
  msg.innerText = "Play your move";
});
