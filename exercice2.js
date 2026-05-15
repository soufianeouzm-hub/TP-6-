let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let taskText = input.value;
    if (taskText === "") {
        alert("Veuillez entrer une tâche");
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskText;
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "Accomplie";
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    let btnContainer = document.createElement("div");
    btnContainer.appendChild(doneBtn);
    btnContainer.appendChild(deleteBtn);
    li.appendChild(btnContainer);
    taskList.appendChild(li);
    input.value = "";
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
    });
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

});
