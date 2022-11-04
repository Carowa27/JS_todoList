//class
class TodoItem {
  constructor(task, done, category) {
    this.task = task;
    this.done = done;
    this.category = category;
  }
}

window.addEventListener("load", () => {
  todoList = JSON.parse(localStorage.getItem("activeTasks")).map((getTask) => {
    return new TodoItem(getTask.task, getTask.done, getTask.category);
  });
  showTodos();
  console.log(todoList);
});

//array
let todoList = [];

//arayItems
todoList.push(new TodoItem("make js assignment", false, "JS"));
todoList.push(new TodoItem("make LIA assignment", false, "Kompetensportfölj"));
todoList.push(new TodoItem("HTML CSS exam", true, "HTML CSS"));
todoList.push(new TodoItem("Not go CrAZy", false, "Personal"));

//variables and variableSettings
let layoutContainer = document.getElementById("container");
layoutContainer.classList.add("container", "container__layout");

let siteHeader = document.createElement("h2");
siteHeader.innerText = "todoList";

let newTodoContainer = document.createElement("section");
newTodoContainer.id = "newTodoContainer";
newTodoContainer.classList.add("container__newTodoStyling");

let inputContainer = document.createElement("section");
inputContainer.id = "inputContainer";
inputContainer.classList.add("container__inputStyling");

let todoLabel = document.createElement("label");
todoLabel.for = "todoInput";
todoLabel.innerHTML = "new task<br/>";
let todoInput = document.createElement("input");
todoInput.id = "todoInput";

let categoryLabel = document.createElement("label");
categoryLabel.id = "categoryLabel";
categoryLabel.for = "categoryInput";
categoryLabel.innerHTML = "category<br/>";
let categoryInput = document.createElement("input");
categoryInput.id = "categoryInput";

let saveContainer = document.createElement("section");
saveContainer.classList.add("container__saveStyling");

let saveValueBtn = document.createElement("button");
saveValueBtn.id = "saveValueBtn";
saveValueBtn.innerText = "Save task";

let sortContainer = document.createElement("section");
sortContainer.classList.add("container__sortStyling");

let sortIcons = document.createElement("section");
let sortNameAZIcon = document.createElement("i");
sortNameAZIcon.className = "bi bi-sort-alpha-down sortNameIconOn";
let sortNameZAIcon = document.createElement("i");
sortNameZAIcon.className = "bi bi-sort-alpha-down-alt sortNameIconOff";

let taskContainer = document.createElement("section");
taskContainer.id = "taskContainer";
taskContainer.classList.add("container__taskStyling");

let taskHeadHolder = document.createElement("section");
taskHeadHolder.id = "taskHeadHolder";

let taskListHeader = document.createElement("h3");
taskListHeader.innerText = "ToDo";
taskListHeader.classList.add("headingH3");

let doList = document.createElement("ul");
doList.classList.add("listLayout");

let doneListHeader = document.createElement("h5");
doneListHeader.innerText = "Done";
doneListHeader.classList.add("headingH5");

let doneList = document.createElement("ul");
doneList.classList.add("listLayout");

let footer = document.createElement("footer");
footer.classList.add("footerLayout");
footer.innerHTML = "Carolina Warntorp";
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
    todoList.push(
      new TodoItem(
        (innerText = todoInput.value),
        false,
        (innerText = categoryInput.value)
      )
    );
    localStorage.setItem("activeTasks", JSON.stringify(todoList));

    todoInput.value = "";
    categoryInput.value = "";
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
    let categorySpace = document.createElement("span");
    categorySpace.classList.add("categorySpace");
    let taskDeleteIcon = document.createElement("i");
    taskDeleteIcon.className = "bi bi-trash trashIcon";
    if (todoList[i].done === false) {
      taskSpace.innerText = todoList[i].task;
      categorySpace.innerText = todoList[i].category;
      todoListItem.classList.add("taskStatusTodo");
      let taskToDoIcon = document.createElement("i");
      taskToDoIcon.className = "bi bi-square todoSquareIcon";

      doList.appendChild(todoListItem);
      todoListItem.appendChild(taskToDoIcon);
      todoListItem.appendChild(taskSpace);
      todoListItem.appendChild(categorySpace);
      todoListItem.appendChild(taskDeleteIcon);

      // let activeTodoString = JSON.stringify(todoList);
      // localStorage.setItem("activeTasks", activeTodoString);

      taskToDoIcon.addEventListener("click", () => {
        toggleStatus(todoListItem, todoList[i]);
      });
    }
    if (todoList[i].done === true) {
      taskSpace.innerText = todoList[i].task;
      categorySpace.innerText = todoList[i].category;
      todoListItem.classList.add("taskStatusDone");
      let taskDoneIcon = document.createElement("i");
      taskDoneIcon.className = "bi bi-check-square doneSquareIcon";

      doneList.appendChild(todoListItem);
      todoListItem.appendChild(taskDoneIcon);
      todoListItem.appendChild(taskSpace);
      todoListItem.appendChild(categorySpace);
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
  localStorage.setItem("activeTasks", JSON.stringify(todoList));

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
  localStorage.setItem("activeTasks", JSON.stringify(todoList));

  showTodos();
}

sortIcons.addEventListener("click", sortTask);
function sortTask() {
  console.log("sortTask");
  sortNameAZIcon.classList.toggle("sortNameIconOn");
  sortNameAZIcon.classList.toggle("sortNameIconOff");
  sortNameZAIcon.classList.toggle("sortNameIconOn");
  sortNameZAIcon.classList.toggle("sortNameIconOff");
  todoList.sort();
  showTodos();
}

//activate functions
showTodos();
saveValueBtn.addEventListener("click", addTodo);

//layout
newTodoContainer.appendChild(inputContainer);
inputContainer.appendChild(todoLabel);
todoLabel.appendChild(todoInput);
inputContainer.appendChild(categoryLabel);
categoryLabel.appendChild(categoryInput);
newTodoContainer.appendChild(saveContainer);
saveContainer.appendChild(saveValueBtn);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(newTodoContainer);
layoutContainer.appendChild(taskContainer);

taskContainer.appendChild(taskHeadHolder);
taskHeadHolder.appendChild(taskListHeader);
taskHeadHolder.appendChild(sortContainer);
sortContainer.appendChild(sortIcons);
sortIcons.appendChild(sortNameAZIcon);
sortIcons.appendChild(sortNameZAIcon);
taskContainer.appendChild(doList);
taskContainer.appendChild(doneListHeader);
taskContainer.appendChild(doneList);

layoutContainer.appendChild(footer);
