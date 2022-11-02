//class
class TodoItem {
  constructor(task, done, category, deadline) {
    this.task = task;
    this.done = done;
    this.category = category;
    this.deadline = deadline;
  }
}

//array
let todoList = [];

//arayItems
todoList.push(
  new TodoItem("make js assignment", false, "JS", "Friday 5th nov")
);
todoList.push(
  new TodoItem(
    "make LIA assignment",
    false,
    "Kompetensportfölj",
    "Monday 31st oct"
  )
);
todoList.push(
  new TodoItem("HTML CSS exam", true, "HTML CSS", "Friday 7th oct")
);
todoList.push(new TodoItem("Not go CrAZy", false, "Personal", "Always"));

//variables and variableSettings
let layoutContainer = document.getElementById("container");
layoutContainer.classList.add("container", "container__layout");

let siteHeader = document.createElement("h2");
siteHeader.innerText = "todoList";

let inputContainer = document.createElement("section");
inputContainer.id = "inputContainer";
inputContainer.classList.add("container__inputStyling");

let todoInput = document.createElement("input");
todoInput.id = "todoInput";

let saveValueBtn = document.createElement("button");
saveValueBtn.id = "saveValueBtn";
saveValueBtn.innerText = "Save task";

let taskListHeader = document.createElement("h3");
taskListHeader.innerText = "ToDo";

let doList = document.createElement("ul");
doList.classList.add("listLayout");

let doneListHeader = document.createElement("h5");
doneListHeader.innerText = "Done";

let doneList = document.createElement("ul");
doneList.classList.add("listLayout");

//functions
function addTodo() {
  if (todoInput.value === "") {
    alert("Field is empty, write something and try again!");
  } else {
    todoList.push(new TodoItem((innerText = todoInput.value), false, "", ""));
    todoInput.value = "";
    showTodos();
  }
}

function showTodos() {
  doneList.innerHTML = "";
  doList.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    let taskSpace = document.createElement("p");
    taskSpace.classList.add("taskSpace");
    let todoListItem = document.createElement("li");
    todoListItem.classList.add("listItem");
    let taskDelete = document.createElement("i");
    taskDelete.className = "bi bi-trash trashIcon";
    if (todoList[i].done === false) {
      todoListItem.innerText = todoList[i].task;
      taskSpace.classList.add("taskStatusTodo");

      doList.appendChild(taskSpace);
      taskSpace.appendChild(todoListItem);
      taskSpace.appendChild(taskDelete);
    }
    if (todoList[i].done === true) {
      todoListItem.innerText = todoList[i].task;
      taskSpace.classList.add("taskStatusDone");

      doneList.appendChild(taskSpace);
      taskSpace.appendChild(todoListItem);
      taskSpace.appendChild(taskDelete);
    }

    todoListItem.addEventListener("click", () => {
      toggleStatus(taskSpace, todoList[i]);
    });
  }
}

function toggleStatus(taskSpace, listPosition) {
  taskSpace.classList.toggle("taskStatusDone");
  taskSpace.classList.toggle("taskStatusTodo");
  if (listPosition.done === true) {
    doList.appendChild(taskSpace);
    listPosition.done = false;
  } else {
    doneList.appendChild(taskSpace);
    listPosition.done = true;
  }
  console.log(todoList);
}

//activate functions
showTodos();
saveValueBtn.addEventListener("click", addTodo);

//layout
inputContainer.appendChild(todoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(doList);
layoutContainer.appendChild(doneListHeader);
layoutContainer.appendChild(doneList);

console.log(todoList);
