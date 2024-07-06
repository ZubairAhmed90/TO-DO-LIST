  // Function to add a new task
  function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // Ignore if input is empty

    const todoList = document.getElementById('todoList');
    const todoItem = document.createElement('div');
    todoItem.classList.add('todoItem');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskCompletion);

    const taskLabel = document.createElement('label');
    taskLabel.textContent = taskText;

    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', deleteTask);

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteBtn);
    todoList.appendChild(todoItem);

    taskInput.value = ''; // Clear input field
}

// Function to toggle task completion
function toggleTaskCompletion(event) {
    const taskLabel = event.target.nextElementSibling;
    taskLabel.style.textDecoration = event.target.checked ? 'line-through' : 'none';
}

// Function to delete a task
function deleteTask(event) {
    const todoItem = event.target.parentElement;
    todoItem.remove();
}
var form = document.getElementById("form");
 form.addEventListener("submit",function(event){
    event.preventDefault();
 });