//class
class TodoItem {
  constructor(task, done, category) {
    this.task = task;
    this.done = done;
    this.category = category;
  }
}

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

let saveSortContainer = document.createElement("section");
saveSortContainer.classList.add("container__saveSortStyling");

let saveValueBtn = document.createElement("button");
saveValueBtn.id = "saveValueBtn";
saveValueBtn.innerText = "Save task";

let sortContainer = document.createElement("section");
sortContainer.classList.add("container__sortStyling");

let sortNameIcon = document.createElement("i");
sortNameIcon.className = "bi bi-sort-alpha-down sortNameIcon";

let sortCatIcon = document.createElement("i");
sortCatIcon.className = "bi bi-sort-down sortCatIcon";

let taskContainer = document.createElement("section");
taskContainer.id = "taskContainer";
taskContainer.classList.add("container__taskStyling");

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

sortNameIcon.addEventListener("click", sortTask);
function sortTask() {
  console.log("sortTask");
}

sortCatIcon.addEventListener("click", sortCategory);
function sortCategory() {
  console.log("sortCategory");
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
newTodoContainer.appendChild(saveSortContainer);
saveSortContainer.appendChild(saveValueBtn);
saveSortContainer.appendChild(sortContainer);
sortContainer.appendChild(sortNameIcon);
sortContainer.appendChild(sortCatIcon);

layoutContainer.appendChild(siteHeader);
layoutContainer.appendChild(newTodoContainer);
layoutContainer.appendChild(taskContainer);
layoutContainer.appendChild(footer);

taskContainer.appendChild(taskListHeader);
taskContainer.appendChild(doList);
taskContainer.appendChild(doneListHeader);
taskContainer.appendChild(doneList);

console.log(todoList);
