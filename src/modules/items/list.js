// import "item.js";

export class List {
	constructor(list) {
		this.list = list || [];
	}
	get getlist() {
		return this.list;
	}
	set setlist(list) {
		this.list = list;
	}
	addToList(item) {
		this.list.push(item);
	}
	removeFromList(item) {
		let indexToRemove = this.list.indexOf(item);
		if (indexToRemove >= 0) {
			this.list.splice(indexToRemove, 1);
		} else {
			throw new console.error("item not found");
		}
	}
}
