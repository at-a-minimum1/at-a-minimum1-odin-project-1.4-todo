export function saveData(key, value) {
	// Save data implementation here
	localStorage.setItem(key, value);
	console.log("Items succesfully saved");
}

export function loadData(key) {
	console.log("Items successfully loaded");
	return localStorage.getItem(key);
}
