let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const input = Math.floor(Math.random() * 3);
  const choice = input === 0 ? "rock" : input === 1 ? "paper" : "scissors";
  console.log(`computer chooses ${choice}`);
  return choice;
}

function getHumanChoice() {
  while (true) {
    const input = prompt("Enter your choice (rock, paper, or scissors):", "");

    // check is user pressed cancel
    if (input === null) {
      console.log("Game cancelled.");
      return null;
    }

    // converting user's input to lowercase before handling it
    const choice = input.toLowerCase().trim();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      console.log(`You choose ${choice}`);
      return choice;
    } else {
      console.log("Invalid input, please try again.");
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    resultPara.innerHTML = `computer wins! paper beats rock <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("You win! rock beats scissors");
    resultPara.innerHTML = `You win! rock beats scissors <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("You win! paper beats rock");
    resultPara.innerHTML = `You win! paper beats rock <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("computer wins! scissors beats paper");
    resultPara.innerHTML = `computer wins! scissors beats paper <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("computer wins! rock beats scissors");
    resultPara.innerHTML = `computer wins! rock beats scissors <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("You win! scissors beats paper");
    resultPara.innerHTML = `You win! scissors beats paper <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  } else {
    console.log("draw!");
    resultPara.innerHTML = `draw <br>> Score: <br>> You: ${humanScore} <br>> Computer: ${computerScore}`;
  }

  if(humanScore == 5) {
  winnerPara.textContent = "Congratulations! Victory is yours — the computer concedes defeat with dignity.";
} else if (computerScore == 5) {
  winnerPara.textContent = "It is with great formality that I announce: the computer wins. Better luck next time!"
}
}

let rockButton = document.querySelector("#rockButton");
let paperButton = document.querySelector("#paperButton");
let scissorsButton = document.querySelector("#scissorsButton");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

let resultPara = document.querySelector(".score");
let winnerPara = document.querySelector(".winner");


//playGame();
