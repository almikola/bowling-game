describe("The Bowling Game", () => {

  var game;
  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      game.roll(pins);
    }
  }

  beforeEach(() => {
    game = new BowlingGame();
  });

  it('can roll gutter game', () => {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it('call roll all ones', () => {
    rollMany(1, 20);
    expect(game.score()).toBe(0);
  });

  it('can roll a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', () => {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0, 16);
    expect(game.score()).toBe(24);
  })

  if('can roll perfect game', () => {
    rollMany(10, 12);
    expect(game.score()).toBe(300);
  })
