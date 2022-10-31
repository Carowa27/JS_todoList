import { todoList } from "./todoList.js";
import { TodoItem } from "./class.js";

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

let taskListUl = document.createElement("ul");
taskListUl.id = "taskListUl";

let doneListHeader = document.createElement("h3");
doneListHeader.innerText = "Done";

let doneListUl = document.createElement("ul");
doneListUl.id = "doneListUl";

let todoListItem = "";

function ulListFrTodo() {
  // taskListUl = ul, todoList = array

  for (let i = 0; i < todoList.length; i++) {
    todoListItem = document.createElement("li");
    //todoListItem.classList.add("taskStatusTodo", "clickBlock"); //
    // doneListItem = document.createElement("li");
    // doneListItem.classList.add("taskStatusDone", "clickBlock");
    todoListItem.addEventListener("click", toggleTaskDone);
    // doneListItem.addEventListener("click", toggleTaskDone);
    // doneListItem.classList.add("taskStatusDone");
    if (i < todoList.length) {
      if (todoList[i].done === false) {
        // todoList[i].classList.replace("taskStatusDone", "taskStatusTodo");
        todoListItem.innerHTML = todoList[i].task;
        taskListUl.appendChild(todoListItem);
        todoListItem.classList.add("taskStatusTodo", "clickBlock"); //
      }
      if (todoList[i].done === true) {
        todoListItem.innerHTML = todoList[i].task;
        doneListUl.appendChild(todoListItem);

        todoListItem.classList.add("taskStatusDone", "clickBlock"); //
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
  todoList.push(new TodoItem((innerText = todoInput.value), false, "", ""));
  console.log(todoList);
  todoListItem = document.createElement("li");
  todoListItem.classList.add("taskStatusTodo", "clickBlock");
  todoListItem.innerHTML = todoInput.value;
  taskListUl.appendChild(todoListItem);
}

function toggleTaskDone() {
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
/*längst ner*/
inputContainer.appendChild(todoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(taskListUl);
layoutContainer.appendChild(doneListHeader);
layoutContainer.appendChild(doneListUl);

console.log(todoList);
