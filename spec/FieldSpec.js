describe("Field", function() {

  var field;

  beforeEach(function() {
    field = new Field();
  });

  describe("#getState", function() {

    it("is empty when initialized", function() {
      expect(field.getState()).toEqual("empty");
    });

    it("is registered as 'x' when when claimed by player 'x'", function() {
      field.claim('x');
      expect(field.getState()).toEqual("x");
    });
  });
});
