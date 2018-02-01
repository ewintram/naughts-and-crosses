function Field() {
  this.state = "empty";
};

Field.prototype.getState = function() {
  return this.state;
};

Field.prototype.claim = function(player) {
  this.state = player;
};
