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
let taskLabel = "";
let taskInput = "";
let pTaskSpace = "";

function ulListFrTodo() {
  // taskListUl = ul, todoList = array

  for (let i = 0; i < todoList.length; i++) {
    pTaskSpace = document.createElement("p");
    taskLabel = document.createElement("label");
    taskInput = document.createElement("input");
    taskInput.type = "checkbox";
    // todoListItem = document.createElement("li");
    // doneListItem = document.createElement("li");
    // todoListItem.addEventListekner("click", toggleTaskDone);

    // doneListItem.classList.add("taskStatusDone");
    if (i < todoList.length) {
      if (todoList[i].done === false) {
        pTaskSpace.classList.add("taskStatusTodo", "clickBlock"); //

        // todoList[i].classList.replace("taskStatusDone", "taskStatusTodo");
        taskLabel.for = todoList[i].task;
        taskLabel.innerText = todoList[i].task;
        taskInput.id = todoList[i].task;
        taskInput.checked = false;
        // pTaskSpace.classList.replace("taskStatusTodo", "taskStatusDone");

        sectionTodo.appendChild(pTaskSpace);
        pTaskSpace.appendChild(taskInput);
        pTaskSpace.appendChild(taskLabel);

        // todoListItem.innerHTML = todoList[i].task;
        // sectionTodo.appendChild(todoListItem);
        // todoListItem.classList.add("taskStatusTodo", "clickBlock"); //
      }
      if (todoList[i].done === true) {
        pTaskSpace.classList.add("taskStatusDone", "clickBlock");

        taskLabel.for = todoList[i].task;
        taskLabel.innerText = todoList[i].task;
        taskInput.id = todoList[i].task;
        taskInput.checked = true;
        // pTaskSpace.classList.replace("taskStatusDone", "taskStatusTodo");

        // todoListItem.innerHTML = todoList[i].task;
        sectionDone.appendChild(pTaskSpace);
        pTaskSpace.appendChild(taskInput);
        pTaskSpace.appendChild(taskLabel);

        // todoListItem.classList.add("taskStatusDone", "clickBlock"); //
        // todoList[i].classList.toggle("taskStatusTodo");
        // todoList[i].classList.add("taskStatusDone");

        // let taskDone = todoList[i].classList;
        // taskDone.replace("taskStatusTodo", "taskStatusDone");
      }
    }
  }
}

ulListFrTodo();

saveValueBtn.addEventListener("click", saveTodo);

function saveTodo() {
  todoList.push(new TodoItem((innerText = newTodoInput.value), false, "", ""));
  console.log(todoList);

  pTaskSpace = document.createElement("p");
  taskLabel = document.createElement("label");
  taskInput = document.createElement("input");
  taskInput.type = "checkbox";
  // todoListItem = document.createElement("li");
  // todoListItem.classList.add("taskStatusTodo", "clickBlock");
  // todoListItem.innerHTML = newTodoInput.value;
  // sectionTodo.appendChild(todoListItem);
  pTaskSpace.classList.add("taskStatusTodo", "clickBlock"); //

  taskLabel.for = newTodoInput.task;
  taskLabel.innerText = newTodoInput.value;
  taskInput.id = newTodoInput.task;
  taskInput.checked = false;

  sectionTodo.appendChild(pTaskSpace);
  pTaskSpace.appendChild(taskInput);
  pTaskSpace.appendChild(taskLabel);
}

function toggleTaskDone() {
  if (taskInput.checked === true) {
    pTaskSpace.classList.toggle("taskStatusTodo");
    pTaskSpace.classList.toggle("taskStatusDone");
    sectionDone.appendChild(pTaskSpace);
    // taskInput.checked = false;
    taskInput.done = false;
  }
  if (taskInput.checked === false) {
    pTaskSpace.classList.toggle("taskStatusTodo");
    pTaskSpace.classList.toggle("taskStatusDone");
    sectionTodo.appendChild(pTaskSpace);
    // taskInput.checked = true;
    taskInput.done = true;
  }
  //hitta rätt if satser
  // if (allLi[i].done === false) {
  //   allLi[i].classList.toggle("taskStatusTodo");
  //   allLi[i].classList.toggle("taskStatusDone");
  //   doneListUl.appendChild(allLi[i]);
  //   taskListUl.removeChild(allLi[i]);
  //   allLi[i].done = true;
  // }
  // if (todoListItem.done === true) {
  //   todoListItem.classList.toggle("taskStatusTodo");
  //   todoListItem.classList.toggle("taskStatusDone");
  //   taskListUl.appendChild(todoListItem);
  //   doneListUl.removeChild(todoListItem);
  //   todoListItem.done = false;
  // }
  // console.log(allLi[i].done);
  console.log("did toggle");
}

pTaskSpace.addEventListener("click", toggleTaskDone);
/*längst ner*/
inputContainer.appendChild(newTodoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(sectionTodo);
layoutContainer.appendChild(doneListHeader);
layoutContainer.appendChild(sectionDone);

console.log(todoList);
