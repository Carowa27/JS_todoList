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
//local storage back into list
// let getActiveTodoArray = JSON.parse(localStorage.getItem("activeTasks"));

//   for (let i = 0; i < getActiveTodoArray.length; i++) {
//     todoList.push(getActiveTodoArray[i]);
//     // if(todoList[i].done)
//   }
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
    let todoListItem = document.createElement("li");
    todoListItem.classList.add("listItem");
    let taskSpace = document.createElement("span");
    taskSpace.classList.add("taskSpace");
    let taskDeleteIcon = document.createElement("i");
    taskDeleteIcon.className = "bi bi-trash trashIcon";
    if (todoList[i].done === false) {
      taskSpace.innerText = todoList[i].task;
      todoListItem.classList.add("taskStatusTodo");
      let taskToDoIcon = document.createElement("i");
      taskToDoIcon.className = "bi bi-square todoSquareIcon";

      doList.appendChild(todoListItem);
      todoListItem.appendChild(taskToDoIcon);
      todoListItem.appendChild(taskSpace);
      todoListItem.appendChild(taskDeleteIcon);

      // let activeTodoString = JSON.stringify(todoList);
      // localStorage.setItem("activeTasks", activeTodoString);

      taskToDoIcon.addEventListener("click", () => {
        toggleStatus(todoListItem, todoList[i]);
      });
    }
    if (todoList[i].done === true) {
      taskSpace.innerText = todoList[i].task;
      todoListItem.classList.add("taskStatusDone");
      let taskDoneIcon = document.createElement("i");
      taskDoneIcon.className = "bi bi-check-square doneSquareIcon";

      doneList.appendChild(todoListItem);
      todoListItem.appendChild(taskDoneIcon);
      todoListItem.appendChild(taskSpace);
      todoListItem.appendChild(taskDeleteIcon);

      // let activeTodoString = JSON.stringify(todoList);
      // localStorage.setItem("activeTasks", activeTodoString);

      taskDoneIcon.addEventListener("click", () => {
        toggleStatus(todoListItem, todoList[i]);
      });
    }

    taskSpace.addEventListener("click", () => {
      toggleStatus(todoListItem, todoList[i]);
    });
    taskDeleteIcon.addEventListener("click", () => {
      deleteTask(i);
    });

    // let activeTodoString = JSON.stringify(todoList);
    // localStorage.setItem("activeTasks", activeTodoString);
  }
}

function toggleStatus(LiItem, listPosition) {
  LiItem.classList.toggle("taskStatusDone");
  LiItem.classList.toggle("taskStatusTodo");
  if (listPosition.done === true) {
    doList.appendChild(LiItem);
    listPosition.done = false;
  } else {
    doneList.appendChild(LiItem);
    listPosition.done = true;
  }
  console.log(todoList);
  showTodos();
}

function deleteTask(listPosition) {
  for (let i = 0; i < todoList.length; i++) {
    if (i === listPosition) {
      todoList.splice(i, 1);
      console.log(todoList);
    }
  }
  showTodos();
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
