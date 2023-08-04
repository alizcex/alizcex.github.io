let Hero = function(name) {
    this.name = name;
}

Hero.prototype.printName = function() {
    console.log("My name is " + this.name);
}

let myHero = new Hero("Link");
console.log("myHero name is " + myHero.name);

myHero.printName()