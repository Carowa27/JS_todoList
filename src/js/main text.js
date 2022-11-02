import { todoList } from "./todoList.js";
import { TodoItem } from "./class.js";

//Main layout
let layoutContainer = document.getElementById("container");
layoutContainer.classList.add("container", "container__layout");

let siteHeader = document.createElement("h2");
siteHeader.innerText = "todoList";

let inputContainer = document.createElement("section");
inputContainer.id = "inputContainer";
inputContainer.classList.add("container__inputStyling");

//new task input
let newTodoInput = document.createElement("input");
newTodoInput.id = "todoInput";

//save task button
let saveValueBtn = document.createElement("button");
saveValueBtn.id = "saveValueBtn";
saveValueBtn.innerText = "Save task";

//task layout
let taskListHeader = document.createElement("h3");
taskListHeader.innerText = "ToDo";

// let taskListUl = document.createElement("ul");
// taskListUl.id = "taskListUl";
let sectionTodo = document.createElement("section");

let doneListHeader = document.createElement("h3");
doneListHeader.innerText = "Done";

// let doneListUl = document.createElement("ul");
// doneListUl.id = "doneListUl";
let sectionDone = document.createElement("section");

// let todoListItem = "";
let taskSpace = "";
let taskStatus = "";
let taskLabel = "";
let taskSpan = "";
let taskDelete = "";
// let listObject = todoList[i];

function ulListFrTodo() {
  //todoList = array

  for (let i = 0; i < todoList.length; i++) {
    taskSpace = document.createElement("p");
    taskStatus = document.createElement("input");
    taskStatus.type = "checkbox";
    taskStatus.id = todoList[i];
    taskLabel = document.createElement("label");
    taskStatus.for = todoList[i];
    taskSpan = document.createElement("span");
    taskDelete = document.createElement("i");
    taskDelete.className = "bi bi-trash trashIcon";

    if (i < todoList.length) {
      if (todoList[i].done === false) {
        taskSpace.classList.add("taskStatusTodo", "clickBlock", "taskSpace"); //

        taskSpan.innerText = todoList[i].task;
        taskStatus.checked = false;

        sectionTodo.appendChild(taskSpace);
        taskSpace.appendChild(taskLabel);
        taskLabel.appendChild(taskStatus);
        taskLabel.appendChild(taskSpan);
        taskSpace.appendChild(taskDelete);
      }
      if (todoList[i].done === true) {
        taskSpace.classList.add("taskStatusDone", "clickBlock", "taskSpace");

        taskSpan.innerText = todoList[i].task;
        taskStatus.checked = true;

        sectionDone.appendChild(taskSpace);
        taskSpace.appendChild(taskLabel);
        taskLabel.appendChild(taskStatus);
        taskLabel.appendChild(taskSpan);
        taskSpace.appendChild(taskDelete);
      }
    }
  }
}
//behöver jag taskSpan?
ulListFrTodo();

saveValueBtn.addEventListener("click", saveTodo);

function saveTodo() {
  todoList.push(new TodoItem((innerText = newTodoInput.value), false, "", ""));
  console.log(todoList);

  taskSpace = document.createElement("p");
  taskStatus = document.createElement("input");
  taskStatus.type = "checkbox";
  taskStatus.id = newTodoInput.value;
  taskLabel = document.createElement("label");
  taskLabel.for = newTodoInput.value;
  taskSpan = document.createElement("span");
  taskDelete = document.createElement("i");
  taskDelete.className = "bi bi-trash trashIcon";

  taskSpace.classList.add("taskStatusTodo", "clickBlock", "taskSpace"); //

  taskSpan.innerText = newTodoInput.value;
  taskStatus.checked = false;

  sectionTodo.appendChild(taskSpace);
  taskSpace.appendChild(taskLabel);
  taskLabel.appendChild(taskStatus);
  taskLabel.appendChild(taskSpan);
  taskSpace.appendChild(taskDelete);
}

function toggleTaskStatus() {
  for (let i = 0; i < todoList.length; i++) {
    if (taskStatus.check === false) {
      taskSpace.classList.toggle("taskStatusTodo");
      taskSpace.classList.toggle("taskStatusDone");
      sectionDone.appendChild(taskSpace);
      todoList[i].done = true;
    }
    if (taskStatus.checked === true) {
      taskSpace.classList.toggle("taskStatusDone");
      taskSpace.classList.toggle("taskStatusTodo");
      sectionTodo.appendChild(taskSpace);
      todoList[i].done = false;
    }
    console.log("did toggle");
    console.log(todoList);
  }
}

function deleteTask() {
  if (taskStatus.checked === false) {
    console.log("delete, done false");
  }
  if (taskStatus.checked === true) {
    console.log("delete, done true");
    //pop?
  }
}

taskStatus.addEventListener("click", toggleTaskStatus);

taskDelete.addEventListener("click", deleteTask);
/*längst ner*/
inputContainer.appendChild(newTodoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(sectionTodo);
// layoutContainer.appendChild(doneListHeader);
layoutContainer.appendChild(sectionDone);

console.log(todoList);
