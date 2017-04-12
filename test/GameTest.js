describe("The Bowling Game", () => {

// rollMany cleans up code
  var game;
  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      game.roll(pins);
    }
  }

// Creates a new game before each test senario
  beforeEach(() => {
    game = new BowlingGame();
  });

// Tests to see whether you can score 0 points by never hitting a pin in 20 rolls
  it('can roll gutter game', () => {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

// Tests to see whether you can score points using example of hitting 1 pin with every roll
  it('call roll all ones', () => {
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  });

// Tests to see whether point scoring works correctly when hitting a spare, ie. 10 pins in 2 rolls. Assumes you will hit 0 pins in all rolls after the initial 3.
// - hit 5 pins first roll
// - hit 5 pins second roll, for 10 total
// - hit 3 pins in roll after that
// - points should add up as (10 + 3) + 3 = 16
  it('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toBe(16);
  });

// Tests to see whether point scoring works correclty when hitting a strike, ie 10 pins in 1 roll.
// Assumes you will hit 0 pints in all rolls after the initial 3.
// - hit 10 pins in first roll, skip second roll in 1st frame
// - hit 7 pins in the two rolls in the next frame
// - points should add up as (10 + 7) + 7 = 24
  it('can roll a strike', () => {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0, 16);
    expect(game.score()).toBe(24);
  });

// Test to see whether you can hit a perfect game, where you hit 12 strikes in a row.
  it('can roll perfect game', () => {
    rollMany(10, 12);
    expect(game.score()).toBe(300);
  });
});
