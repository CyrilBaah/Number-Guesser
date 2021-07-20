  let humanScore = 0;
  let computerScore = 0;
  let currentRoundNumber = 1;

  // Write your code below:

  var generateTarget = () => {
      return Math.floor(Math.random() * 10);
  }

  var compareGuesses = (human, computer, target) => {
      if (getAbsoluteDistance(human, target) < getAbsoluteDistance(computer, target)) {
          return true;
      } else {
          return false;
      }
  }

  var getAbsoluteDistance = (number, target) => {
      return Math.abs(number - target);
  }

  var updateScore = (winner) => {
      if (winner === 'human') {
          humanScore++;
      } else if (winner === 'computer') {
          computerScore++;
      }
  }

  var advanceRound = () => {
      currentRoundNumber++;
  }