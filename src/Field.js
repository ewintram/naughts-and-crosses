function Field() {
  this.state = "empty";
};

Field.prototype.getState = function() {
  return this.state;
};

Field.prototype.claim = function(player) {
  if(this.getState() === "empty") {
    this.state = player.getWeapon();
  } else {
    throw Error("Invalid move");
  };
};
