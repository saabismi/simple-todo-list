// variables for the dom elements
const inputField = document.getElementById("inputField"); // text area where you type your objective
const saveTodo = document.getElementById("saveTodo"); // html button element which saves the text in the input field
const setDate = document.getElementById("inputDate"); // the date the user set as the deadline
const objListElem = document.getElementById("objectives"); // html ul element in which the saved objectives are shown in

//const xhttp = new XMLHttpRequest();

const todoStorage  = window.localStorage;

let objList = []; // initialise array object for the objectives

function showObjConsole() {
    console.log("array:");
    for(let i = 0; i < objList.length; i++) {
        console.log(objList[i]);
    }
}

/*
xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let todos = JSON.parse(this.responseText);

        for(let i = 0; i < todos.length; i++) {

        }
    }
}
*/

fetch("http://localhost:3000/todos").then(response => response.json()).then(data => console.log(data));

saveTodo.addEventListener("click", function() {
    if(inputField.value == "") {
        alert("You can't save an empty objective!");
    } else {
        let newLi =  document.createElement("li"); // create a new li element where the objective text is shown in
        objList.push(inputField.value); //add the objective to the array containing all objectives
        newLi.innerHTML = inputField.value; //create a li element with the objective innit bruv
        objListElem.appendChild(newLi); // append the newly created li element to the unordered list where the objectives are shown 
        inputField.value = ""; // clear the text field
        console.log("date: " + setDate.value);
        showObjConsole();
        //todoStorage.setItem("todos", JSON.stringify(objList));
    }
});


inputField.addEventListener("keypress", function (event) {
    if(event.key === "Enter") {
        if(inputField.value == "") {
            alert("You can't save an empty objective!");
        } else {
            let newLi =  document.createElement("li"); // create a new li element where the objective text is shown in
            objList.push(inputField.value); //add the objective to the array containing all objectives
            newLi.innerHTML = inputField.value; //create a li element with the objective innit bruv
            objListElem.appendChild(newLi); // append the newly created li element to the unordered list where the objectives are shown 
            inputField.value = ""; // clear the text field
            console.log("date: " + setDate.value);
            showObjConsole();
        }
    }
});