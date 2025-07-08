function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === ""){
    alert("please input a task first!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${taskText}</span>
    <button onclick="editTask(this)" style="color: yellow;"><i class="fa-solid fa-pencil"></i></button>
    <button onclick="completeTask(this)" style="color: green;">✓</button>
    <button onclick="deleteTask(this)" style="color: red;"><i class="fa-regular fa-trash-can"></i></button>
  `;

  taskList.appendChild(li);
  taskInput.value = ""; // clear input
}

function deleteTask(button) {
  button.parentElement.remove();
}

function completeTask(button) {
  const span = button.parentElement.querySelector("span");
  span.style.textDecoration = "line-through";
  span.style.textDecorationThickness = "2px";
  span.style.color = "grey";
}

function editTask(button) {
  const span = button.parentElement.querySelector("span");
  const newTask = prompt("Edit your task:", span.textContent);
  if (newTask !== null) {
    span.textContent = newTask;
  }
}

function resetTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
}
document.getElementById("taskInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});