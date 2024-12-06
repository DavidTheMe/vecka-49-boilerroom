type cardType = "toDo" | "done";

const toDoTable = document.getElementById("to-do-table") as HTMLDivElement;
const completedTable = document.getElementById(
  "completed-table"
) as HTMLDivElement;

function CreateCardElement(taskName: string, cardType: cardType): HTMLElement {
  // Create the task card container
  const taskCard = document.createElement("div");
  taskCard.className = "task-card";

  // Create the task title
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

// Add an event listener to the button for the 'click' event
const button = document.getElementById("add-task-button") as HTMLButtonElement;
button.addEventListener("click", () => {
  toDoTable.appendChild(CreateCardElement(prompt(), "toDo"));
});
