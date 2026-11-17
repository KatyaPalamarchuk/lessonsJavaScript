let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let addButton = document.querySelector("#addButton");
let error = document.querySelector("#error");
let requestList = document.querySelector("#requestList");
let totalCounter = document.querySelector("#totalCounter");
let confirmedCounter = document.querySelector("#confirmedCounter");
let emptyText = document.querySelector("#emptyText");
let clearButton = document.querySelector("#clearButton");

function updateStats() {
    let total = requestList.querySelectorAll(".request").length;
    let confirmed = requestList.querySelectorAll(".request.confirmed").length;

    totalCounter.textContent = total;
    confirmedCounter.textContent = confirmed;

    if (total === 0) {
        emptyText.classList.remove("hidden");
    }
    else {
        emptyText.classList.add("hidden");
    }
}

function addRequest() {
    let name = nameInput.value.trim();
    let eventName = eventInput.value.trim();

    if (name === "" || eventName === "") {
        error.classList.remove("hidden");
        return;
    }
    error.classList.add("hidden");

    let li = document.createElement("li");
    li.classList.add("request");

    let info = document.createElement("div");
    info.classList.add("info");

    let nameText = document.createElement("strong");
    nameText.textContent = name;

    let eventText = document.createElement("p");
    eventText.textContent = eventName;

    let status = document.createElement("span");
    status.classList.add("status");
    status.textContent = "Очікує";

    info.append(nameText, eventText, status);

    let confirmButton = document.createElement("button");
    confirmButton.textContent = "Підтвердити";
    confirmButton.classList.add("confirm-btn");

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Видалити";
    deleteButton.classList.add("delete-btn");

    confirmButton.addEventListener("click", function () {
        li.classList.toggle("confirmed");

        if (li.classList.contains("confirmed")) {
            status.textContent = "Підтверджено";
            confirmButton.textContent = "Скасувати";
        }
        else {
            status.textContent = "Очікує";
            confirmButton.textContent = "Підтвердити";
        }
        updateStats();
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateStats();
    });

    li.append(info, confirmButton, deleteButton);
    requestList.append(li);

    nameInput.value = "";
    eventInput.value = "";
    updateStats();
}

function clearAll() {
    if (requestList.children.length === 0) {
        return;
    }
    if (confirm("Видалити всі заявки?")) {
        requestList.innerHTML = "";
        updateStats();
    }
}

addButton.addEventListener("click", addRequest);
clearButton.addEventListener("click", clearAll);
updateStats();