let playerScore = 0;
let compScore = 0;

const icons = document.querySelectorAll('.icon');
const message = document.querySelector('.message');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');
const endButton = document.querySelector('.endButton');

function upperCaseFirst(str) {
  return str[0].toUpperCase() + str.substring(1);
}

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) compChoice = 'rock';
  else if (compChoice === 1) compChoice = 'paper';
  else compChoice = 'scissors';
  return compChoice;
}

function playRound(playerSelection, compSelection) {
  const won = `Congrats you Won! ${upperCaseFirst(playerSelection)} beats ${upperCaseFirst(compSelection)}.`;
  const lost = `You lost! ${upperCaseFirst(compSelection)} beats ${upperCaseFirst(playerSelection)}.`;
  const tied = 'You tied, try again!';

  switch (true) {
    case (playerSelection === compSelection):
      result = 'tied';
      message.textContent = tied;
      break;
    case (playerSelection === 'rock' && compSelection === 'scissors'):
    case (playerSelection === 'paper' && compSelection === 'rock'):
    case (playerSelection === 'scissors' && compSelection === 'paper'):
      result = 'won';
      message.textContent = won;
      playerScore++;
      break;
    default:
      result = 'lost';
      message.textContent = lost;
      compScore++;
      break;
  }

  // Update score
  pScore.textContent = playerScore;
  cScore.textContent = compScore;
}

function endGame(playerScore, compScore) {
  if (playerScore === 5 || compScore === 5) {
    icons.forEach(icon => {icon.setAttribute('disabled', '');
    icon.classList.remove('hover')});

    endButton.classList.remove('disabled');

    if (playerScore > compScore)
    message.textContent = "Congrats! You beat the computer!";
    else 
      message.textContent = "Dang, the computer beat yot this time!";
  }

}

function resetGame() {
  endButton.addEventListener('click', () => {
    window.location.reload();
  })
}

function game() {
  let playerSelection;

  // Get player selection
  icons.forEach(icon => icon.addEventListener('click', () => {
    if (icon.classList.contains('rock')) 
      playerSelection = 'rock';
    else if (icon.classList.contains('paper'))
      playerSelection = 'paper';
    else 
      playerSelection = 'scissors';

    playRound(playerSelection, getComputerChoice());
    endGame(playerScore, compScore);
    resetGame();

  }));
}

game();


// click the rps icons (watch the video again)
// event the icons to variables
// update score
// update game message