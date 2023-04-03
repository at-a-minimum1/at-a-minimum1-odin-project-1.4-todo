// import "item.js";

export class List {
	constructor(list, title) {
		this.list = list || [];
		this.title = title || "Project Name Placeholder";
	}
	get getTitle() {
		return this.title;
	}
	set setTitle(titleName) {
		this.title = titleName;
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
		// if (indexToRemove >= 0) {
		this.list.splice(indexToRemove, 1);
		// } else {
		// throw new console.error("item not found");
		console.log("item not found");
		// }
	}
	*[Symbol.iterator]() {
		yield* this.list;
	}
}
