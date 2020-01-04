// Implement Stack using ES6 Class

const _elements = new WeakMap();
class Stack {
	constructor() {
		_elements.set(this, []);
	}

	get count() {
		return _elements.get(this).length;
	}

	push(value) {
		_elements.get(this).push(value);
	}

	pop() {
		const items = _elements.get(this);
		if (items.length === 0) throw new Error('Stack is full.');
		return items.pop();
	}

	peek() {
		const items = _elements.get(this);
		if (items.length === 0) throw new Error('Stack is full.');
		return items[items.length - 1];
	}
}
const s = new Stack();
