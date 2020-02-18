const toDoForm = document.querySelector(".js_toDoForm")
    , toDoInput = toDoForm.querySelector("input")
    , toDoList = document.querySelector(".js_toDoList");


const TODOS_LS = 'toDos';


function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null) {
        
    }
}
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();