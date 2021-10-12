const subject = document.querySelector("#subject"),
    details = document.querySelector("details"),
    startDate = document.querySelector("#start-date"),
    endDate = document.querySelector("#end-date"),
    isActive = document.querySelector("#active"),
    isComplete = document.querySelector("#completed"),
    addNewItem = document.querySelector("#add-btn"),
    editItem = document.querySelector("#edit_btn"),
    deleteItem = document.querySelector("#delete-btn");

// const TodoItem = require("./TodoItem");
const todoItems = [];


function addNew(subject, details, isActive, startDate, endDate) {
    let todoItem = new TodoItem(subject, details, isActive, startDate, endDate);
    todoItems.push(todoItem);
}

function edit(id) {
    let index = todoItems.findIndex(obj => obj.id === id);
    todoItems[index].subject = "BLOB";
}

function remove(id) {
    for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].id === id) {
            todoItems.splice(i, 1);
            break;
        }
    }
}

addNewItem.addEventListener(`click`, () => {
    addNew(subject.value, details.value, true, startDate.value, endDate.value);

    console.log(sub);
})

addNew("title", "stuffs and things", true, "today", "tomorrow");
addNew("Jooo", "sBroooze", true, "12/12/2021", "next century");
console.log(todoItems);
console.log("======================================")
let id = todoItems[1].id;
edit(id);
id = todoItems[0].id;
remove(id);
console.log(todoItems);



