describe("Grid", function() {

  var grid;
  var field;

  beforeEach(function() {
    grid = new Grid();

    function FieldX() {
      this.getState = function() {
        return "x"
      };
    };

    function FieldO() {
      this.getState = function() {
        return "o"
      };
    };

    FieldX = new FieldX;
    FieldO = new FieldO;
  });

  describe("#reset", function() {
    it("creates a new 2D array of fields", function() {
      grid.reset();
      expect(grid.getFields().length).toEqual(3)
    });
  });
});
