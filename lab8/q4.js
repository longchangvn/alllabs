function Animal(name, speed) {
    this.name = name;
    this.speed = speed;

}
Animal.compareBySpeed = function (a1, a2) {
    return a1.speed - a2.speed;
}
Animal.prototype.run = function (speed) {
    this.speed += speed;
}
function Rabbit(name, speed) {
    Animal.call(this, name, speed)
}

Rabbit.prototype.hide = function () {
    console.log("Hides");
}

Object.setPrototypeOf(Rabbit, Animal)
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);
let r = new Rabbit("r1", 10);
r.run(5);
console.log(r.speed)
r.hide();
let r2 = new Rabbit("r2", 15);
r2.run(2);
console.log(r2.speed)
r2.hide();