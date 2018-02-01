describe("Player", function() {

  var player;

  describe("#getWeapon", function() {

    it("returns the player's weapon as 'x'", function() {
      player = new Player("x");
      expect(player.getWeapon()).toEqual("x");
    });

    it("returns the player's weapon as 'o'", function() {
      player = new Player("o");
      expect(player.getWeapon()).toEqual("o");
    });
  });
});
