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


function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("computer wins! paper beats rock");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You win! rock beats scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You win! paper beats rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("computer wins! scissors beats paper");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("computer wins! rock beats scissors");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You win! scissors beats paper");
    } else {
      console.log("draw!");
    }
  }

}

playGame();