'use strict'; // Enables js strict mode which will be more sensitive to errors

// Constructor Function
// function Circle(radius) {
// 	this.radius = radius;

// 	this.draw = function() {
// 		console.log('draw');
// 	};
// }

// ES6 Class
// Uses symbols for private property
const _radius = Symbol();
const _draw = Symbol();
class Circle {
	constructor(radius) {
		// this.radius = radius;
		// Radius is accessible by Object.getOwnPropertySymbols(c)[0];
		this[_radius] = radius;

		// Method in Object instance
		this.move = function() {
			console.log('moving');
		};
	}
	// Instance Method in prototype
	[_draw]() {
		console.log('draw');
	}
	// Static Method parse that isn't tied to the instance of a circle Object
	// It returns a new Circle Object
	static parse(str) {
		const radius = JSON.parse(str).radius;
		return new Circle(radius);
	}
}

const c = Circle.parse('{ "radius": 8 }');

// Inheritance and Method Overriding
class Shape {
	constructor(color) {
		this.color = color;
	}
	move() {
		console.log('moving');
	}
}

// ES6 Class
// Uses Weakmaps for private properties

// Weakmap is a dictionary where keys are objects and values can be anything
// using WeakMaps to implement private properties and methods
const _width = new WeakMap();

class Rectangle {
	constructor(width) {
		_width.set(this, width);
	}

	draw() {
		console.log('Rectangle with width' + _width.get(this));
	}
}

// WeakMaps give us better protection than symbols. There is no way
// to access private members implemented using WeakMaps from the
// outside of an object.

// Inheritance
class Triangle extends Shape {
	constructor(color) {
		// To call the base constructor
		super(color);
	}

	draw() {
		// Call the base method
		super.draw();
		console.log('Triangle movement');
	}
}

const c2 = new Circle2(3);

// Using Getters and Setters
const _radius3 = new WeakMap();
class Circle3 {
	constructor(radius) {
		_radius3.set(this, radius);
	}

	get radius() {
		return _radius3.get(this);
	}

	set radius(value) {
		if (value <= 0) throw new Error('invalid radius');
		_radius3.set(this, value);
	}
	draw() {
		_move.get(this)();
		console.log('draw');
	}
}

const c3 = new Circle3(3);
