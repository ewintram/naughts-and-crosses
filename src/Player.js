function Player(weapon) {
  this.weapon = weapon;
};

Player.prototype.getWeapon = function() {
  return this.weapon;
};
