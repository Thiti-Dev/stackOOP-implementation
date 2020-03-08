const _count = new WeakMap();
const _items = new WeakMap();
class Stack {
	constructor() {
		_count.set(this, 0);
		_items.set(this, []);
	}

	push(element) {
		const items = _items.get(this);
		items.push(element);
	}
	pop() {
		const items = _items.get(this);
		if (items.length < 1) throw new Error('No element remain to be popped');
		return items.pop();
	}
	peek() {
		const items = _items.get(this);
		return items[items.length - 1];
	}
	get count() {
		return _items.get(this).length;
	}
}

const stack = new Stack();
