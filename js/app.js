// <
// Comment
// #Title: To-Do-app by learn with sumit dada,
// #description:  inspirated by lws bd youtube, and copied from there for vanilla js parctise 
// #date: 10-9-2022
// #time: undifined 
// #wathVidioLink: https://www.youtube.com/watch?v=z6NC2Xyg5M0&list=PLHiZ4m8vCp9MJDxMOzhYVuTrO1b5n-Tq_&index=7
// #learningExpreince: good, enough

// />

//  selecting the dom elements
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');


//  important function 
let createTask = function(task) {
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

// main add task function 
let addTask = function(event) {
    event.preventDefault();
    let listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

// complete task function 
let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}
    //bind In complete function 

    let bindInCompleteItems = function(taskItem, checkboxClick) {
        let checkBox = taskItem.querySelector('input[type="checkbox"]');
        checkBox.onchange = checkboxClick;
    }

// bind complete functon 
let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}
// initialize a for loop 
for(let i=0; i< todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

//second for loop 
for(let i=0; i< completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}
form.addEventListener('submit', addTask);