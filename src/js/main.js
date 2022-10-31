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

function ulListFrTodo() {
  // taskListUl = ul, todoList = array

  for (let i = 0; i < todoList.length; i++) {
    let todoListItem = document.createElement("li");
    todoListItem.classList.add("taskStatusTodo"); //
    let doneListItem = document.createElement("li");
    doneListItem.classList.add("taskStatusDone");
    // doneListItem.classList.add("taskStatusDone");
    if (i < todoList.length) {
      if (todoList[i].done === false) {
        // todoList[i].classList.replace("taskStatusDone", "taskStatusTodo");
        todoListItem.innerHTML = todoList[i].task;
        taskListUl.appendChild(todoListItem);
      } else {
        doneListItem.innerHTML = todoList[i].task;
        doneListUl.appendChild(doneListItem);
        // todoList[i].classList.toggle("taskStastusTodo");
        // todoList[i].classList.add("taskStatusDone");

        // let taskDone = todoList[i].classList;
        // taskDone.replace("taskStatusTodo", "taskStatusDone");
      }
    }
  }
}

ulListFrTodo();

function emptyUl() {
  taskListUl.removeChild();
  doneListUl.removeChild(doneListItem);
}

saveValueBtn.addEventListener("click", saveTodo);

function saveTodo() {
  todoList.push(new TodoItem((innerText = todoInput.value), false, "", ""));
  emptyUl();
  ulListFrTodo();
}

/*längst ner?*/
inputContainer.appendChild(todoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(taskListUl);
layoutContainer.appendChild(doneListHeader);
layoutContainer.appendChild(doneListUl);

console.log(todoList);
