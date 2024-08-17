console.log('hello')

const inputBox = document.querySelector('#inputBox');
console.log(inputBox);
const addBtn = document.querySelector('.addBtn');
console.log(addBtn)
const listContainer = document.querySelector('#list-container');

function addtaskFn(){
    //if the input box is empty;
    if(inputBox.value === ''){
        alert("you have to add task first");
    }
    //if we add some task;
    else{
        // create a new tsak lis element 
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        
        inputBox.value = '';
        saveData();
    }
}

listContainer.addEventListener('click' , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask();

addBtn.addEventListener('click' , addtaskFn);