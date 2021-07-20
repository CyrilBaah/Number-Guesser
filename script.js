  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;

  // Write your code below:

  let generateTarget = () => {
      return Math.floor(Math.random() * 10);
  }

  let compareGuesses = (human, computer, target) => {
      if (getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target)) {
          return true;
      } else {
          return false;
      }
  }

  let getAbsoluteDistance = (number, target) => {
      return Math.abs(number - target);
  }

  let updateScore = (winner) => {
      if (winner === 'human') {
          humanScore++;
      } else if (winner === 'computer') {
          computerScore++;
      }
  }

  let advanceRound = () => {
      currentRoundNumber++;
  }