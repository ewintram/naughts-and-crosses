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
