function throwError(parameterName){
  throw new Error("Provide argument " + parameterName);
}

function Particle({ x = (throwError)("x"), y = (throwError)("y")}={}){
  this._x = x;
  this._y = y;
}

Particle.prototype.valueOfX = function valueOfX(){
  return this._x;
}
Particle.prototype.valueOfY = function valueOfY(){
  return this._y;
}

function ColoredParticle({ x = (throwError)("x"), y = (throwError)("y"), color = (throwError)("color") }={}){
  Particle.call(this, {x , y});
  this._color = color;
}

ColoredParticle.prototype = Object.create(Particle.prototype);
ColoredParticle.prototype.constructor = ColoredParticle;
ColoredParticle.prototype.valueofColor = function valueofColor(){
  return this._color;
}

ColoredParticle.prototype.logDetails = function logDetails(){
  console.log("The color of the particle is : " + this.valueofColor());
  console.log("The length in x is : " + this.valueOfX());
  console.log("The length in y is : " + this.valueOfY());
}

let coloredParticle = new ColoredParticle({ x : 200, y : 400, color : "red"});
console.log(coloredParticle.logDetails());