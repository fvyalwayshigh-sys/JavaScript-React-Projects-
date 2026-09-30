const choice = document.querySelectorAll('.circles');

const comp = document.getElementById('comp');
const user = document.getElementById('you');

const fnlMessage = document.querySelector('.message');
const finalmessage = document.getElementById('finalmessage');

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const compChoice = Math.floor(Math.random() * 3);
  return choices[compChoice];
};

const drawGame = () => {
  finalmessage.textContent = 'ITS A DRAW!! TRY AGAIN';
};

const userWon = () => {
  finalmessage.textContent = 'User Won, Congrats!!';
  const finaluserScore = userScore++;
  user.textContent = userScore;
};

const compWon = () => {
  finalmessage.textContent = 'Computer Won, Try AGAIN!!!';
  const finalcompScore = compScore++;
  comp.textContent = compScore;
};

const playGame = userChoice => {
  const compChoice = genCompChoice();
  console.log(`Comp Choosed = ${compChoice}`);

  // DRAW GAME :-

  if (compChoice === userChoice) {
    drawGame();
  }

  // USER WON :-

  if (userChoice === 'rock' && compChoice === 'scissors') {
    userWon();
  }
  if (userChoice === 'scissors' && compChoice === 'paper') {
    userWon();
  }
  if (userChoice === 'paper' && compChoice === 'rock') {
    userWon();
  }

  // COMP WON :-

  if (compChoice === 'rock' && userChoice === 'scissors') {
    compWon();
  }
  if (compChoice === 'scissors' && userChoice === 'paper') {
    compWon();
  }
  if (compChoice === 'paper' && userChoice === 'rock') {
    compWon();
  }
};

choice.forEach(function (component) {
  component.addEventListener('click', function () {
    const userChoice = component.getAttribute('Id');
    console.log(`User Choosed = ${userChoice}`);
    playGame(userChoice);
  });
});
