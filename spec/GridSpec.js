describe("Grid", function() {

  var grid;
  var field;
  var fieldX;
  var fieldO;

  beforeEach(function() {
    grid = new Grid();

    function Field() {
      this.getState = function() {
        return "empty";
      };
    };

    function FieldX() {
      this.getState = function() {
        return "x";
      };
    };

    function FieldO() {
      this.getState = function() {
        return "o";
      };
    };

    field = new Field;
    fieldX = new FieldX;
    fieldO = new FieldO;
  });

  describe("#refresh", function() {
    it("creates a new 2D array of fields", function() {
      grid.refresh(Field);
      console.log(grid.getFields())
      expect(grid.getFields().length).toEqual(3);
    });
  });

  describe("#findField", function() {

    it("finds the field by its place in the arrays", function() {
      grid.fields = [
        [ field, field, field ],
        [ field, fieldX, field ],
        [ field, field, field ]
      ];
      foundField = grid.findField(1,1)
      expect(foundField.getState()).toEqual("x")
    });
  });
});
