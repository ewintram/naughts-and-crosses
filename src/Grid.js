function Grid() {
  this.fields = [];
};

Grid.prototype.getFields = function() {
  return this.fields;
};

Grid.prototype.refresh = function(field = Field) {
  this.fields = [
    [ new field(), new field(), new field() ],
    [ new field(), new field(), new field() ],
    [ new field(), new field(), new field() ]
  ];
};

Grid.prototype.findField = function(row, column) {
  return this.getFields()[row][column];
};

Grid.prototype.winState = function(state) {
  for(var i = 0; i < 3; i++) {
    if(
      this.getFields()[i][0].getState() === state &&
      this.getFields()[i][1].getState() === state &&
      this.getFields()[i][2].getState() === state) {
        return true;
      };
    if(
      this.getFields()[0][i].getState() === state &&
      this.getFields()[1][i].getState() === state &&
      this.getFields()[2][i].getState() === state) {
        return true;
      };
    if(
      this.getFields()[0][0].getState() === state &&
      this.getFields()[1][1].getState() === state &&
      this.getFields()[2][2].getState() === state) {
        return true;
      };
    if(
      this.getFields()[0][2].getState() === state &&
      this.getFields()[1][1].getState() === state &&
      this.getFields()[2][0].getState() === state) {
        return true;
      };
  };
};
// }
// [0][0], [0][1], [0][2]
//
// [1][0], [1][1], [1][2]
//
// [2][0], [2][1], [2][2]
//
//
// [0][0], [1][0], [2][0]
//
// [0][1], [1][1], [2][1]
//
// [0][2], [1][2], [2][2]
//
//
// [0][0], [1][1], [2][2]
//
// [0][2], [1][1], [2][0]
