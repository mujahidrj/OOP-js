// Notes about Objects in JavaScript

// Literals
// Circle has 3 members
// Members that are functions are called methods
const circle = {
	radius: 1,
	location: {
		x: 1,
		y: 1,
	},
	draw: function() {
		console.log('draw');
	},
};

// Factories are used to create objects that have multiple methods
function createCircle(radius) {
	return {
		radius,
		draw: function() {
			console.log('draw');
		},
	};
}
const circle1 = createCircle(1);

// Constructor Function with Getters
function Circle(radius) {
	this.radius = radius;

	// Private Member
	let defaultLocation = { x: 0, y: 0 };

	this.draw = function() {
		let x, y;
		console.log('draw');
	};

	Object.defineProperty(this, 'defaultLocation', {
		// Getter with read only property
		get: function() {
			return defaultLocation;
		},
		// Setter
		set: function(value) {
			if (!value.x || !value.y) throw new Error('Invalid Location');

			defaultLocation = value;
		},
	});
}
const anotherCircle = new Circle(3);

// Adding and Deleting a property
circle1.location = { x: 1 };
const propertyName = 'otherLocation';
circle1[propertyName] = { y: 2 };
delete circle1['location'];

// Enumerating Properties
for (let key in circle) {
	if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}
// Getting all the keys of a certain object
const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle) console.log('Circle has a radius');
