// Select elements
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add new task
function addTask() {
    // Create new list item
    const listItem = document.createElement("li");

    // Create task title
    const taskTitle = document.createElement("div");
    taskTitle.className = "task-title";

    const taskText = document.createTextNode(newTaskInput.value);
    taskTitle.appendChild(taskText);

    const deleteButton = document.createElement("button");
deleteButton.innerHTML = "Delete";
deleteButton.addEventListener("click", deleteTask);
taskTitle.appendChild(deleteButton);

// Add task title to list item
listItem.appendChild(taskTitle);

// Create sub-tasks
const subTasks = document.createElement("ul");
subTasks.className = "sub-tasks";

// Add sub-task input and button
const newSubTaskInput = document.createElement("input");
newSubTaskInput.type = "text";
newSubTaskInput.placeholder = "Add sub-task...";

const addSubTaskButton = document.createElement("button");
addSubTaskButton.innerHTML = "Add";
addSubTaskButton.addEventListener("click", addSubTask);

// Add sub-task input and button to sub-tasks
subTasks.appendChild(newSubTaskInput);
subTasks.appendChild(addSubTaskButton);

// Add sub-tasks to list item
listItem.appendChild(subTasks);

// Add list item to task list
taskList.appendChild(listItem);

// Clear input field
newTaskInput.value = "";
}

// Delete task
function deleteTask(event) {
const listItem = event.target.parentNode.parentNode;
taskList.removeChild(listItem);
}

// Add sub-task
function addSubTask(event) {
const subTasks = event.target.parentNode;
const newSubTaskInput = subTasks.querySelector("input[type='text']");
if (newSubTaskInput.value !== "") {
    // Create new sub-task item
    const subTaskItem = document.createElement("li");

    // Create sub-task checkbox
    const subTaskCheckbox = document.createElement("input");
    subTaskCheckbox.type = "checkbox";

    // Create sub-task text
    const subTaskText = document.createTextNode(newSubTaskInput.value);

    // Create sub-task delete button
    const subTaskDeleteButton = document.createElement("button");
    subTaskDeleteButton.innerHTML = "Delete";
    subTaskDeleteButton.addEventListener("click", deleteSubTask);

    // Add sub-task elements to sub-task item
    subTaskItem.appendChild(subTaskCheckbox);
    subTaskItem.appendChild(subTaskText);
    subTaskItem.appendChild(subTaskDeleteButton);

    // Add sub-task item to sub-tasks
    subTasks.insertBefore(subTaskItem, newSubTaskInput.parentNode);

    // Clear input field
    newSubTaskInput.value = "";
}
}
// Delete sub-task
function deleteSubTask(event) {
    const subTaskItem = event.target.parentNode;
    const subTasks = subTaskItem.parentNode;
    subTasks.removeChild(subTaskItem);
    }
    
    // Add event listeners
    addTaskButton.addEventListener("click", addTask);