const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

const player = "Rock";
const computer = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toUpperCase();
  computerSelection = computerSelection.toUpperCase();

  if(playerSelection == computerSelection) return "Draw!"

  switch(playerSelection) {
    case "ROCK": 
      if(computerSelection == "SCISSORS") return "You win!";
      
    case "PAPER":
      if(computerSelection == "ROCK") return "You win!";

    case "SCISSORS":
      if(computerSelection == "PAPER") return "You win!";
  }

  return "You lose!";
}

function game() {
  
  for (let i = 0; i < 5; i++) {
    let playerMove = prompt("What's your move?");
    let computerChoice = getComputerChoice();

    console.log("Player Move: " + playerMove)
    console.log("Computer Move: " + computerChoice)
    console.log(playRound(playerMove, computerChoice));
  }
}

game();


