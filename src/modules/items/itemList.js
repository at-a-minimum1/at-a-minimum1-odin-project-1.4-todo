class itemList {
	constructor(itemList) {
		this.itemList = itemList || [];
	}
	get itemList() {
		return this.itemList;
	}
	set itemList(itemList) {
		this.itemList = itemList;
	}
	addToList(item) {
		this.itemList.push(item);
	}
	removeFromList(item) {
		let indexToRemove = this.itemList.indexOf(item);
		if (indexToRemove >= 0) {
			item.splice(indexToRemove, 1);
		} else {
			throw new console.error("item not found");
		}
	}
}
