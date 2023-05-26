export function saveData(key, value) {
	// Save data implementation here
	const value_serialized = JSON.stringify(value);
	localStorage.setItem(key, value_serialized);
}
export function loadData(key) {
	const data = localStorage.getItem(key);
	if (data) {
		const projects = JSON.parse(data);

		return projects;
		// projects.forEach(((project) => {
		// 	const {item, card, cardHtml} = project;
		// });
	}
	// console.log("Items successfully loaded");
	else {
		return;
	}
}

// 		const newCard = new Card(task);
// 		const newCardHtml = newCard.createCard();
// 		const taskObject = { item: task, card: newCard, cardHtml: newCardHtml };
// 		const projectKey = getMapKey(cardMap, project);

// 		saveData(projectKey, taskObject);
// 		project.push(taskObject);

// TODO 1. Create a function to save the cardMap items to local storage
// TODO 2. Convert the cardMap items to JSON format before saving
// TODO 3. Store the JSON representation of cardMap items in local storage
// TODO 4. Create a function to load the cardMap items from local storage
// TODO 5. Retrieve the JSON data from local storage and parse it back to JavaScript objects
// TODO 6. Repopulate the cardObj and cardHtml based on the loaded data
// TODO 7. Handle any error cases, such as when there is no data in local storage
