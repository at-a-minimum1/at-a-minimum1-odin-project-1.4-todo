class item {
	constructor(title, description, date, type) {
		this.title = title;
		this.date = date;
		this.type = type;
		this.description = description;
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
}
