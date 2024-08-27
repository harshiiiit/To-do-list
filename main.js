const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    console.log(taskText);
    if(taskText != "") {
        createTask(taskText);
        taskInput.value = "";
    }
});

// Create a new task
function createTask(text){
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${text}</span>
        <button class= "delete">Delete</button>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = document.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });

    // Mark as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}