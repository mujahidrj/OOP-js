// Prototype is a parent of a object
let obj = {};
Object.getPrototypeOf(obj);

// Prototypical Inheritance is
let myArray = [];
// myArray derives from arrayBase which derives from ObjectBase
// Objects created by a given constructor will have the same Prototype

// Setting Attributes for a property
let person = { name: 'Mujahid' };
Object.defineProperty(person, 'name', {
	writable: false, // Can't Overwrite name
	enumerable: true, // Name will show up
	configurable: false, // Can't delete name
});

person.name = 'Chris';
console.log(person.name);

// Constructors have a "prototype" property. It returns the object
// that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

// Defining Prototype Method
function Circle(radius) {
	// Instance Members
	this.radius = radius;

	this.move = function() {
		this.draw();
		console.log('moving');
	};
}
// Prototype Members
Circle.prototype.draw = function() {
	console.log('draw');
};

Circle.prototype.toString = function() {
	return `Circle with radius ${this.radius}`;
};

const c1 = new Circle(1);
const c2 = new Circle(2);

// To get the own/instance properties:
Object.keys(obj);

// Iterating over prototype AND instance members
for (let key in c1) console.log(key);
