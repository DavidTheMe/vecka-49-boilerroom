type cardType = "toDo" | "done";

const toDoTable = document.getElementById("to-do-table") as HTMLDivElement;
const completedTable = document.getElementById(
  "completed-table"
) as HTMLDivElement;

const taskAddButton = document.getElementById(
  "add-task-button"
) as HTMLButtonElement;
// Add an event listener to the button for the 'click' event
taskAddButton.addEventListener("click", () => {
  OpenInputFieldToAddTask();
});

const taskInput = document.getElementById("add-task-input") as HTMLInputElement;
const taskDoneButton = document.getElementById(
  "add-task-done-button"
) as HTMLDivElement;

taskAddButton.addEventListener("click", () => {
  OpenInputFieldToAddTask();
});

taskDoneButton.addEventListener("click", () => {
  FinnishAddingTask();
});

function CreateCardElement(taskName: string, cardType: cardType): HTMLElement {
  // Create the task card container
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  const taskTitle = document.createElement("h2");
  taskTitle.textContent = taskName;

  // Create the button container
  const buttonContainer = document.createElement("div");

  // Create the "Done" button
  const doneButton = document.createElement("button");
  doneButton.className = "move-btn";

  if (cardType == "toDo") {
    doneButton.textContent = "Complete";
  } else {
    doneButton.textContent = "Uncomplete";
  }

  // Add event listener for "Done" button (optional, for future functionality)
  doneButton.addEventListener("click", () => {
    SwitchTable(taskName, cardType, taskCard);
  });

  // Create the "Delete" button
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  // Add event listener for "Delete" button (optional, for future functionality)
  deleteButton.addEventListener("click", () => {
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

function SwitchTable(
  taskName: string,
  currentCardType: cardType,
  currentElement: HTMLElement
) {
  if (currentCardType == "toDo") {
    completedTable.appendChild(CreateCardElement(taskName, "done"));
  } else {
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
