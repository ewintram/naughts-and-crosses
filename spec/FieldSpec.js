describe("Field", function() {

  var field;
  var playerX;
  var playerO;

  beforeEach(function() {
    field = new Field();

    function PlayerX() {
      this.getWeapon = function() {
        return "x"
      };
    };

    function PlayerO() {
      this.getWeapon = function() {
        return "o"
      };
    };

    playerX = new PlayerX;
    playerO = new PlayerO;
  });

  describe("#getState", function() {

    it("is 'empty' when initialized", function() {
      expect(field.getState()).toEqual("empty");
    });
  });

  describe("#claim", function() {
    it("is registered as 'x' when when claimed by player 'x'", function() {
      field.claim(playerX);
      expect(field.getState()).toEqual("x");
    });

    it("is registered as 'o' when when claimed by player 'o'", function() {
      field.claim(playerO);
      expect(field.getState()).toEqual("o");
    });

    it("can only be claimed if 'empty'", function() {
      field.claim(playerX);
      expect(function(){ field.claim(playerO) }).toThrowError("Invalid move");
    });
  });
});
