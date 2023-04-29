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
	get getList() {
		return this.list;
	}
	set setList(list) {
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
