import { todoList } from "./todoList.js";

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

function ulListFrTodo() {
  // taskListUl = ul, todoList = lista

  for (let i = 0; i < todoList.length; i++) {
    let todoListItem = document.createElement("li");
    if (i < todoList.length) {
      todoListItem.innerHTML = todoList[i].task;
      taskListUl.appendChild(todoListItem);
    }
  }
}

ulListFrTodo();

let doneListHeader = document.createElement("h3");
doneListHeader.innerText = "Done";

let doneListUl = document.createElement("ul");
doneListUl.id = "doneListUl";

/*längst ner?*/
inputContainer.appendChild(todoInput);
inputContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(inputContainer);
layoutContainer.appendChild(taskListHeader);
layoutContainer.appendChild(taskListUl);
layoutContainer.appendChild(doneListHeader);

console.log(todoList);
