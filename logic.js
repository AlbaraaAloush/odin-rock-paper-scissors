function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return choice === 0 ? "rock" : choice === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
  while (true) {
    const input = prompt("Enter your choice (rock, paper, or scissors):", "");

    // check is user pressed cancel
    if (input === null) {
      alert("Game cancelled.");
      return null;
    }

    // converting user's input to lowercase before handling it
    const choice = input.toLowerCase().trim();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      alert("Invalid input, please try again.");
    }
  }
}

let humanScore = 0;
let computerScore = 0;