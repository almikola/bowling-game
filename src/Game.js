var BowlingGame = function () {
  this.rolls = [];
};

BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

BowlingGame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var game = this;

// This means that for every 1 frame there are 2 rolls.
  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex ++;
    } else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    } else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

// if pins knocked down equals 10 in this one roll, the number at that point in the array is 10
  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }

// to get the score for a strike, you add the 10 points for the strike, plus
  function getStrikeScore() {
    return 10 + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function getSpareScore() {
    return 10 + game.rolls[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
