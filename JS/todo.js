const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 
 
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
    // argument의 event를 넣은 이유는 click event의 대한 정보를 얻어야하기 때문.
    // 왜 얻어야 하나? -> ToDo가 여러갠데 어떤 ToDo의 삭제버튼을 누르는지 알아야하기 때문.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

