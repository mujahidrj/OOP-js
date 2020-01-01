// This program creates 2 objects and has the second one inherit from the first

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
}

HTMLSelectElement.prototype = new HtmlElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement;

let e = new HtmlElement();
let s = new HTMLSelectElement([1, 2, 3]);
