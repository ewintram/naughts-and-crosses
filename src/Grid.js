function Grid() {
  this.fields = [];
};

Grid.prototype.getFields = function() {
  return this.fields;
};

Grid.prototype.reset = function() {
  this.fields = [
    [ new Field(), new Field(), new Field() ],
    [ new Field(), new Field(), new Field() ],
    [ new Field(), new Field(), new Field() ]
  ];
};
