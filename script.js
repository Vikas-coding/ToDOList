// Get references to the necessary HTML elements
const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


// Function to add a task
function addTask(){

    if(inputBox.value === ''){
        alert("Enter Some Data");
    }else{
        // Create a new list item (li) and set its content to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new li to the list container
        listContainer.appendChild(li);

        // Create a "remove" button (span) and append it to the li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }

    // Clear the input box
    inputBox.value = "";

    // Save the updated task list to local storage
    saveTask();
}

// Add a task when the Enter key is pressed in the input box
inputBox.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Handle clicks on the task list container
listContainer.addEventListener("click",function(e){


    if(e.target.tagName === "LI"){
        // Toggle the "checked" class to mark a task as completed
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        // Remove a task when the "x" button (span) is clicked
        e.target.parentElement.remove();
        saveTask();
    }

});

// Function to save the current task list to local storage
function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// Function to load and display tasks from local storage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Initially load and display tasks from local storage when the page is loaded
showTask();