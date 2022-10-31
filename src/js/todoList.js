import { TodoItem } from "./class.js";

// let nrCount = 0;

export let todoList = [];

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
