export class Item {
	constructor(...args) {
		this.title = args[0];
		this.date = args[1];
		this.type = args[2];
		this.description = args[3];
		this.priority = args[4];
	}
	set title(title) {
		this.title = title;
	}
	get title() {
		return this.title;
	}

	set date(date) {
		this.date = date;
	}
	get date() {
		return this.date;
	}

	set description(description) {
		this.description = description;
	}
	get description() {
		return this.description;
	}

	set priority(priority) {
		this.priority = priority;
	}
	get priority() {
		return this.priority;
	}
}
