const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}

const player = "Rock";
const computer = getComputerChoice();

let score = 0;

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

function playButtons() {
    // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll('button');

  console.log(buttons.length);

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {

      // and for each one we add a 'click' listener
      button.addEventListener('click', () => {
        const playerMove = button.textContent;
        const computerMove = getComputerChoice();

        createText("You chose: " + playerMove);
        createText("Computer chose: " + computerMove);
        
        const result = playRound(playerMove, computerMove);
        updateRunningScore(getScore(result));

        alert(result);
      });
  });
}

function getScore(result) {
  if(result == "You win!") { 
    score++;
  } else {
    if(score > 0) 
      score--; 
  }

  return score;
}

function createText(string) {
  const container = document.querySelector('#container');
  const content = document.createElement('p');
  content.textContent = string;
  container.appendChild(content);
}

function updateRunningScore(string) {
  const result = document.querySelector('.result');

  if(result != undefined || result != null) {
    result.textContent = "Score: " + string.toString();
  } else {
    const container = document.querySelector('#container');
    const content = document.createElement('h3');
    content.classList.add('result');
    content.textContent = "Score: " + string.toString();
    container.appendChild(content);
  }
}



playButtons();

//game();


