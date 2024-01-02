const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");

let toDos = []; // 정보가 추가되고 삭제되는 등 데이터가 바뀔 수 있으니 let으로 바꿔줌.
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function paintToDo(newToDo) { 
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} 

function deleteToDo(event) { 
    const deleteLi = (event.target.parentElement);
    deleteLi.remove();
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    toDos.push(newToDo);
    paintToDo(newToDo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const alreadySavedToDos = localStorage.getItem(TODOS_KEY);

if (alreadySavedToDos) {
    const parsedToDos = JSON.parse(alreadySavedToDos);
    parsedToDos.forEach(paintToDo); 
    // newToDo에 저장되어 있는 array의 각각의 item 정보를 불러와서 TODO를 그려줌.
    // 하지만 웹페이지를 새로고침하고 TODO를 추가입력하고 정보를 보내면 새로고침 이후의 정보만 newToDo에 push하게됨.
    toDos = parsedToDos;
    // 웹페이지를 새로고침해도 원래 있던 toDos를 복원하고 새로운 데이터를 추가.
    // localStorage에 원래 있던 정보를 유지한 채로 추가 입력된 newToDo를 push. 
}