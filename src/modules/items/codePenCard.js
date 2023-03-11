// Get elements
// const container = document.querySelector(".collapsible-container");
const container = document.getElementById("containerId");
const addBtn = document.querySelector(".add-collapsible-btn");
const resultsPanel = document.getElementById("resultsPanel");

// Add event listener to add button
addBtn.addEventListener("click", addCollapsibleCard);

// Function to add new collapsible card
function addCollapsibleCard() {
	// Create new card
	const card = document.createElement("div");
	card.classList.add("collapsible-card");

	// Outside wrappers and classes in them
	const leftWrap = document.createElement("div");
	const centerWrap = document.createElement("div");
	const rightWrap = document.createElement("div");
	const formActionWrapper = document.createElement("div");
	leftWrap.classList.add("left-wrapper", "priority-high");
	centerWrap.classList.add("center-wrapper");
	rightWrap.classList.add("right-wrapper");
	formActionWrapper.classList.add("form-action-wrapper", "priority-high");

	// Elements in leftWrap and classes in them
	const inputWrap = document.createElement("div");
	inputWrap.classList.add("input-wrapper");
	const labelContainer = document.createElement("label");
	labelContainer.classList.add("container");
	const checkbox = document.createElement("input");
	const checkmark = document.createElement("span");
	checkbox.setAttribute("type", "checkbox");
	// leftWrap.append(checkbox, checkmark);
	inputWrap.append(labelContainer, checkbox, checkmark);
	leftWrap.append(inputWrap);

	// Elements in centerWrap and classes in them
	const header = document.createElement("div");
	header.classList.add("collapsible-header");
	const titleWrap = document.createElement("div");
	titleWrap.classList.add("collapsible-title");
	const taskTitle = document.createElement("h3");
	taskTitle.textContent = "Title";
	header.append(titleWrap);
	titleWrap.append(taskTitle);
	const content = document.createElement("div");
	content.classList.add("collapsible-content", "hide");
	const formWrap = document.createElement("div");
	formWrap.classList.add("form_wrapper");

	// Form elements go here
	const title = document.createElement("label");
	title.setAttribute("for", "title");
	title.textContent = "Title";
	const inputTitle = document.createElement("input");
	inputTitle.setAttribute("type", "text");
	inputTitle.value = "Sample Task";
	const priority = document.createElement("label");
	priority.setAttribute("for", "priorityDropdown");
	priority.textContent = "Priority";
	const selectPriority = document.createElement("select");
	selectPriority.setAttribute("id", "priorityDropdown");
	selectPriority.textContent = "Priority";
	// Create the High priority option
	const priorityHigh = document.createElement("option");
	priorityHigh.setAttribute("value", "priorityHigh");
	priorityHigh.textContent = "High";
	// Create the Normal priority option (and set it as selected)
	const priorityNormal = document.createElement("option");
	priorityNormal.setAttribute("value", "priorityMedium");
	priorityNormal.setAttribute("selected", "");
	priorityNormal.textContent = "Normal";
	// Create the Low priority option
	const priorityLow = document.createElement("option");
	priorityLow.setAttribute("value", "priorityLow");
	priorityLow.textContent = "Low";
	selectPriority.append(priorityHigh, priorityNormal, priorityLow);
	formWrap.append(title, inputTitle, priority, selectPriority);

	const dueDate = document.createElement("label");
	dueDate.setAttribute("for", "dueDate");
	dueDate.textContent = "Due Date";
	const inputDueDate = document.createElement("input");
	inputDueDate.setAttribute("type", "date");
	inputDueDate.setAttribute("id", "dueDate");
	inputDueDate.setAttribute("value", "2050-07-02");

	formWrap.append(dueDate, inputDueDate);
	content.append(formWrap);
	centerWrap.append(header, content);

	// Create new div element with class "date"
	const dateDiv = document.createElement("div");
	dateDiv.classList.add("date");

	// Create new h3 element with text "Date"
	const dateHeader = document.createElement("h3");
	dateHeader.textContent = "Date";

	// Append the dateHeader to the dateDiv
	dateDiv.appendChild(dateHeader);

	// Create new h3 element with class "description-header hide" and text "Description:"
	const descriptionHeader = document.createElement("h3");
	descriptionHeader.classList.add("description-header", "hide");
	descriptionHeader.textContent = "Description:";

	// Create new textarea element with class "description hide"
	const descriptionTextarea = document.createElement("textarea");
	descriptionTextarea.classList.add("description", "hide");

	// Append the descriptionHeader and descriptionTextarea to the rightWrapper
	rightWrap.append(dateDiv, descriptionHeader, descriptionTextarea);

	// Elements in formActionWrapper and classes in them

	// Create expand button
	const expandButton = document.createElement("button");
	expandButton.classList.add("collapsible-btn");
	expandButton.textContent = "Expand";

	// Create save-delete-wrapper element with class "hide"
	const saveDeleteWrapper = document.createElement("div");
	saveDeleteWrapper.classList.add("edit-delete-wrapper", "hide");

	// Create save button
	const saveButton = document.createElement("button");
	saveButton.classList.add("edit");
	saveButton.textContent = "Save";

	// Create delete button
	const deleteButton = document.createElement("button");
	deleteButton.classList.add("delete");
	deleteButton.textContent = "Delete";

	// Append buttons to save-delete-wrapper element
	saveDeleteWrapper.append(saveButton, deleteButton);

	// Append elements to form-action-wrapper element
	formActionWrapper.append(expandButton, saveDeleteWrapper);

	// Append wrappers to card
	card.append(leftWrap, centerWrap, rightWrap, formActionWrapper);
	resultsPanel.append(card);
}

// Function to toggle collapsible card
function toggleCollapsibleCard(event) {
	const btn = event.target;

	const card = btn.closest(".collapsible-card");
	// Stuff I've added
	const header = card.querySelector(".collapsible-title");
	const date = card.querySelector(".date");
	const input = card.querySelector(".input-wrapper");
	const expand = card.querySelector(".collapsible-btn");

	const contentCollapsible = card.querySelector(".collapsible-content");
	const editDelete = card.querySelector(".edit-delete-wrapper");
	// const edit = card.querySelector(".edit");
	// const deleteTask = card.querySelector(".delete");
	// const descriptionWrapper = card.querySelector(".description-wrapper");
	const descriptionHeader = card.querySelector(".description-header");
	const description = card.querySelector(".description");

	// const task = document.getElementById("title");
	card.classList.toggle("expanded");
	//   Hide these elements

	input.classList.toggle("hide");

	header.classList.toggle("hide");
	date.classList.toggle("hide");
	//   Reveal these elements
	contentCollapsible.classList.toggle("hide");
	editDelete.classList.toggle("hide");
	// descriptionWrapper.classList.toggle("hide");
	descriptionHeader.classList.toggle("hide");
	description.classList.toggle("hide");
	// edit.classList.toggle("hide");
	// deleteTask.classList.toggle("hide");
	const content = card.querySelector(".collapsible-content");
	if (card.classList.contains("expanded")) {
		expand.textContent = "Collapse";
		content.style.height = content.scrollHeight + "px";
	} else {
		expand.textContent = "Expand";
		content.style.height = "0";
	}
}

resultsPanel.addEventListener("click", function (event) {
	if (event.target.matches(".collapsible-btn")) {
		toggleCollapsibleCard(event);
	}
	if (event.target.matches(".delete")) {
		const btn = event.target;
		const card = btn.closest(".collapsible-card");
		card.remove();
	}
	if (event.target.matches(".edit")) {
		toggleCollapsibleCard(event);
	}
});

// Add event listener to all collapsible buttons
// const collapsibleBtns = document.querySelectorAll(".collapsible-btn");
// collapsibleBtns.forEach((btn) => {
//   btn.addEventListener("click", toggleCollapsibleCard);
// });

// resultsPanel.addEventListener("click", function(event){
//   if(event.target.classList.contains("collapsible-btn")){
//     event.target.addEventListener("click", toggleCollapsibleCard);
//      }
// });

// container.addEventListener("click", function(event) {
//   // Check if the event target is an LI element
//   if (event.target && event.target.nodeName === "BUTTON") {
//     // Toggle the active class on the clicked element
//     console.log("Button Clicked" + event.target);
//     toggleCollapsibleCard(event);
//     // event.target.classList.toggle("active");
//   }
// });
