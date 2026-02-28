// Question 1: Interactive Sidebar
const question1 = () => {
    const sidebar = document.getElementById("sidebar");
    const sidebarButton = document.getElementById("sidebar-button");

    sidebarButton.addEventListener("click", () => {
        if (sidebar.classList.contains("opened")) {
            sidebar.classList.remove("opened");
            sidebarButton.textContent = "›";
        } else {
            sidebar.classList.add("opened");
            sidebarButton.textContent = "‹";
        }
    });
};

// Question 2: TODO List
const question2 = () => {
    const addButton = document.getElementById("add-todo");
    const taskInput = document.getElementById("task-name");
    const todoList = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const taskText = taskInput.value;

        if (taskText === "") {
            return;
        }

        const newItem = document.createElement("li");
        newItem.textContent = taskText;
        todoList.append(newItem);

        taskInput.value = "";
    });
};

// Question 3: Greeter
const question3 = () => {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const message = document.getElementById("message");

    const updateMessage = () => {
        const firstName = firstNameInput.value;
        const lastName = lastNameInput.value;
        message.textContent = `Hello ${firstName} ${lastName}!`;
    };

    firstNameInput.addEventListener("input", updateMessage);
    lastNameInput.addEventListener("input", updateMessage);
};

// Entry point — runs after the page fully loads
document.addEventListener("DOMContentLoaded", (event) => {
    question1();
    question2();
    question3();
});
