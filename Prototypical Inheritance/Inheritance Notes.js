function Shape(color) {
	this.color = color;
}

Shape.prototype.duplicate = function() {
	console.log('a duplicate');
};

function Circle(radius, color) {
	Shape.call(this, color);
	this.radius = radius;
}

// Intermediate Function Inheritance
function extend(Child, Parent) {
	// Child now inherits Parent
	Child.prototype = Object.create(Parent.prototype);
	// Resetting the constructor
	Child.prototype.constructor = Child;
}

extend(Circle, Shape);

// Method Override
Circle.prototype.duplicate = function() {
	console.log('a duplicate circle');
};

Circle.prototype.draw = function() {
	console.log('drawing');
};

function Square(size) {
	this.size = size;
}

extend(Square, Shape);
Square.prototype.duplicate = function() {
	console.log('a duplicate Square');
};

const shapes = [new Circle(), new Square()];

// Polymorphism example
for (let shape of shapes) shape.duplicate();

const s = new Shape();
const c = new Circle(1, 'blue');

// Mixins

// Rest Operator
function mixin(target, ...sources) {
	Object.assign(target, ...sources); // Spread Operator
}

const canEat = {
	eat: function() {
		this.hunger--;
		console.log('eating');
	},
};

const canWalk = {
	walk: function() {
		console.log('walking');
	},
};

const canSwim = {
	swim: function() {
		console.log('swim');
	},
};

function Person() {}
function Goldfish() {}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

mixin(Goldfish.prototype, canEat, canWalk);
const gFish = new Goldfish();
console.log(gFish);
