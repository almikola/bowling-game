//setting up the game object
var BowlingGame = function () {
  this.rolls = [];
};

//setting up the game mechanism
BowlingGame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

//setting up the score counting mechanism
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

// to get the score for a strike, you add the 10 points for the strike, plus the next two rolls. It then moves up for rollIndex, and adds those points. Because a strike has only 1 roll in the first frame, this makes sense that it adds up the next two rolls in the next loop of the program. In the test, all the rolls after the first 3 are set to 0.
  function getStrikeScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

// to check if there's a spare, the two rolls need to add up to 10
  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

// to get the score for a spare, you add the points from the first two rolls (which will equal 10), then add twice the next roll. In the test, all the rolls after the first 3 are set to 0.
  function getSpareScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
  }

// to get the score for a normal roll, add the points from two consecutive rolls
  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }
};
