
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
		this.list.splice(indexToRemove, 1);
	}
	*[Symbol.iterator]() {
		yield* this.list;
	}
}
