describe("Field", function() {

  var field;

  beforeEach(function() {
    field = new Field();
  });

  describe("#getState", function() {

    it("is 'empty' when initialized", function() {
      expect(field.getState()).toEqual("empty");
    });
  });

  describe("#claim", function() {
    it("is registered as 'x' when when claimed by player 'x'", function() {
      field.claim("x");
      expect(field.getState()).toEqual("x");
    });

    it("is registered as 'o' when when claimed by player 'o'", function() {
      field.claim("o");
      expect(field.getState()).toEqual("o");
    });

    it("can only be claimed if 'empty'", function() {
      field.claim("x");
      expect(function(){ field.claim("o") }).toThrowError("Invalid move");
    });
  });
});
