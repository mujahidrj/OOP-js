// This program creates 3 objects and uses polymorphism
// Render uses the map function and returns a string based on the
// amount of options in the array
// Click is an instance method and focus is a prototype method
function HtmlElement() {
	this.click = function() {
		console.log('clicking');
	};
}

HtmlElement.prototype.focus = function() {
	console.log('Focusing');
};

// May be passed an array (optional)
// prototype is HtmlElement
function HTMLSelectElement(items = []) {
	this.items = items;

	this.addItem = function(item) {
		this.items.push(item);
	};

	this.removeItem = function(item) {
		this.items.splice(this.items.indexOf(item), 1);
	};

	this.render = function() {
		return `"
  <select>${this.items
		// Looping inside a template string
		.map(
			item => `
    <option>${item}</option>`,
		)
		.join('')}  
  </select>`;
	};
}

HTMLSelectElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

function HtmlImageElement(src) {
	this.src = src;

	this.render = function() {
		return `<img src = ${this.src}" >/`;
	};
}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

let e = new HtmlElement();
let s = new HTMLSelectElement([1, 2, 3]);
const img = new HtmlImageElement('http');

const elements = [new HTMLSelectElement([1, 2, 3]), new HtmlImageElement('http://')];
