// Notes about Objects in JavaScript

// Literals
// Circle has 3 members
// Members that are functions are called methods
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function() {
    console.log("draw");
  }
};

// Factories are used to create objects that have multiple methods
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle1 = createCircle(1);

// Constructor Function
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function() {
      console.log("draw");
    });
}
const anotherCircle = new Circle(2);
