var toDoTable = document.getElementById("to-do-table");
var completedTable = document.getElementById("completed-table");
var taskAddButton = document.getElementById("add-task-button");
// Add an event listener to the button for the 'click' event
taskAddButton.addEventListener("click", function () {
    OpenInputFieldToAddTask();
});
var taskInput = document.getElementById("add-task-input");
var taskDoneButton = document.getElementById("add-task-done-button");
taskAddButton.addEventListener("click", function () {
    OpenInputFieldToAddTask();
});
taskDoneButton.addEventListener("click", function () {
    FinnishAddingTask();
});
function CreateCardElement(taskName, cardType) {
    // Create the task card container
    var taskCard = document.createElement("div");
    taskCard.className = "task-card";
    var taskTitle = document.createElement("h2");
    taskTitle.textContent = taskName;
    // Create the button container
    var buttonContainer = document.createElement("div");
    // Create the "Done" button
    var doneButton = document.createElement("button");
    doneButton.className = "move-btn";
    if (cardType == "toDo") {
        doneButton.textContent = "Complete";
    }
    else {
        doneButton.textContent = "Uncomplete";
    }
    // Add event listener for "Done" button (optional, for future functionality)
    doneButton.addEventListener("click", function () {
        SwitchTable(taskName, cardType, taskCard);
    });
    // Create the "Delete" button
    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    // Add event listener for "Delete" button (optional, for future functionality)
    deleteButton.addEventListener("click", function () {
        taskCard.remove();
    });
    // Append buttons to the button container
    buttonContainer.appendChild(doneButton);
    buttonContainer.appendChild(deleteButton);
    // Append title and button container to the task card
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(buttonContainer);
    return taskCard;
}
function SwitchTable(taskName, currentCardType, currentElement) {
    if (currentCardType == "toDo") {
        completedTable.appendChild(CreateCardElement(taskName, "done"));
    }
    else {
        toDoTable.appendChild(CreateCardElement(taskName, "toDo"));
    }
    currentElement.remove();
}
function OpenInputFieldToAddTask() {
    taskAddButton.setAttribute("class", "not-visible");
    taskInput.setAttribute("class", "visible");
    taskDoneButton.setAttribute("class", "visible");
}
function FinnishAddingTask() {
    toDoTable.append(CreateCardElement(taskInput.value, "toDo"));
    taskInput.value = "";
    taskAddButton.setAttribute("class", "visible");
    taskInput.setAttribute("class", "not-visible");
    taskDoneButton.setAttribute("class", "not-visible");
}
