let todos = [
  {
    task: "Make a list",
    done: false
  }
];
let newTask = {
  task: "",
  done: false
};

let list = document.querySelector(".list");

//showList();

let input = document.querySelector(".task");

input.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    console.log(e.target.value);
    addTask({
      task: e.target.value,
      done: false
    });
  }
});

function addTask(objectTask) {
  todos.push(objectTask);
  console.log(todos);
  document.querySelector("ul").remove();
  showList();
}

function showList() {
  if (todos.length > 0) {
    let tasksList = document.createElement("ul");
    document.body.appendChild(tasksList);

    // let tasksList = document.querySelector(".list");

    todos.map((todo, i) => {
      let task = document.createElement("li");
      let id = "item" + i;

      task.setAttribute("id", id);

      console.log("task", task);

      tasksList.appendChild(task);

      let itemList = tasksList.querySelector("#" + id);

      console.log(itemList);

      itemList.classList.add("list-group-item");

      //Create done button
      let doneInput = document.createElement("input");
      doneInput.type = "checkbox";

      doneInput.addEventListener("click", e => handleCheck(e));

      //Add done button
      itemList.appendChild(doneInput);

      //Create label task
      let labelTask = document.createElement("span");
      labelTask.innerText = todo.task;

      //Add label task
      itemList.appendChild(labelTask);

      //Create delete button
      let button = document.createElement("button");
      button.innerText = "X";
      button.classList.add("deleteButton");
      button.classList.add("btn-light");
      button.classList.add("float-right");

      //Add delete button
      itemList.appendChild(button);

      button.addEventListener("click", e => deleteTask(e));
    });
  }
}

function deleteTask(e) {
  e.preventDefault();
  console.log("In delete function");
  console.log(e.target.parentElement);

  e.target.parentElement.remove();
}

function handleCheck(e) {
  console.log("In handle Check function");
  console.log(e.target);
  console.log(e.target.value);
  e.target.parentElement.setAttribute("style", "text-decoration:line-through");
}
