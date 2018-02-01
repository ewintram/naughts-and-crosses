describe("Field", function() {

  var field;

  beforeEach(function() {
    field = new Field();
  });

  it("is empty when initialized", function() {
    expect(field.getState()).toEqual("empty");
  });
})
