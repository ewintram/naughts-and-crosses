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
      foundField = grid.findField(1,1);
      expect(foundField.getState()).toEqual("x");
    });
  });

  describe("#winState", function() {
    it("confirms if there is a horizontal win on the board", function() {
      grid.fields = [
        [ field, fieldO, field ],
        [ fieldX, fieldX, fieldX ],
        [ field, fieldO, field ]
      ];
      expect(grid.winState("x")).toEqual(true);
    });
    it("confirms if there is a vertical win on the board", function() {
      grid.fields = [
        [ field, field, fieldO ],
        [ fieldX, fieldX, fieldO ],
        [ field, field, fieldO ]
      ];
      expect(grid.winState("o")).toEqual(true);
    });
    it("confirms if there is an upward diagonal win on the board", function() {
      grid.fields = [
        [ field, field, fieldO ],
        [ fieldX, fieldO, fieldX ],
        [ fieldO, field, fieldX ]
      ];
      expect(grid.winState("o")).toEqual(true);
    });
    it("confirms if there is a downward diagonal win on the board", function() {
      grid.fields = [
        [ fieldX, field, fieldO ],
        [ fieldX, fieldX, field ],
        [ fieldO, field, fieldX ]
      ];
      expect(grid.winState("x")).toEqual(true);
    });
  });
});
