document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <input type="checkbox">
                <button class="delete-task">Hapus</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-task")) {
            e.target.parentElement.remove();
        } else if (e.target.type === "checkbox") {
            const taskText = e.target.previousElementSibling;
            taskText.style.textDecoration = e.target.checked ? "line-through" : "none";
        }
    });
});
