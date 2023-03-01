 const newTaskInput = document.getElementById("new-task");
      const addTaskButton = document.getElementById("add-task");
      const taskList = document.getElementById("task-list");

      function addTask() {
        const listItem = document.createElement("li");
        const taskTitle = document.createElement("div");
        taskTitle.className = "task-title";
        const taskText = document.createTextNode(newTaskInput.value);
        taskTitle.appendChild(taskText);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", deleteTask);
        taskTitle.appendChild(deleteButton);
        listItem.appendChild(taskTitle);
        const subTasks = document.createElement("ul");
        subTasks.className = "sub-tasks";
        const newSubTaskInput = document.createElement("input");
        newSubTaskInput.type = "text";
        newSubTaskInput.placeholder = "Add sub-task...";
        const addSubTaskButton = document.createElement("button");
        addSubTaskButton.innerHTML = "Add";
        addSubTaskButton.addEventListener("click", addSubTask);
        subTasks.appendChild(newSubTaskInput);
        subTasks.appendChild(addSubTaskButton);
        listItem.appendChild(subTasks);
        taskList.appendChild(listItem);
        saveTasks();
        newTaskInput.value = "";
      }

      function deleteTask(event) {
        const listItem = event.target.parentNode.parentNode;
        taskList.removeChild(listItem);
        saveTasks();
      }

      function addSubTask(event) {
        const subTasks = event.target.parentNode;
        const newSubTaskInput = subTasks.querySelector("input[type='text']");
        if (newSubTaskInput.value !== "") {
          const subTaskItem = document.createElement("li");
          const subTaskCheckbox = document.createElement("input");
          subTaskCheckbox.type = "checkbox";
          const subTaskText = document.createTextNode(newSubTaskInput.value);
          const subTaskDeleteButton = document.createElement("button");
          subTaskDeleteButton.innerHTML = "Delete";
          subTaskDeleteButton.addEventListener("click", deleteSubTask);
          subTaskItem.appendChild(subTaskCheckbox);
          subTaskItem.appendChild(subTaskText);
          subTaskItem.appendChild(subTaskDeleteButton);
          subTasks.insertBefore(subTaskItem, newSubTaskInput.parentNode);
          saveTasks();
          newSubTaskInput.value = "";
        }
      }

      function deleteSubTask(event) {
        const subTaskItem = event.target.parentNode;
        const subTasks = subTaskItem.parentNode;
        subTasks.removeChild(subTaskItem);
        saveTasks();
      }

      function saveTasks() {
        const tasks = [];
        const taskItems = taskList.children;
        for (let i = 0; i < taskItems.length; i++) {
          const taskItem = taskItems[i];
          const taskTitle = taskItem.querySelector(".task-title").textContent;
          const subTaskItems = taskItem.querySelectorAll(".sub-tasks li");
          const subTasks = [];
          for (let j = 0; j < subTaskItems.length; j++) {
            const subTaskItem = subTaskItems[j];
           // Select elements
const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load saved tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Render saved tasks
savedTasks.forEach((task) => {
// Create new list item
const listItem = document.createElement("li");

// Create task title
const taskTitle = document.createElement("div");
taskTitle.className = "task-title";

const taskText = document.createTextNode(task.title);
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
