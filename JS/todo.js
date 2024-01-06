const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");

let toDos = []; // 정보가 추가되고 삭제되는 등 데이터가 바뀔 수 있으니 let으로 바꿔줌.
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function paintToDo(newToDoObject) { // paintToDo가 받는 argument를 바꿈. (data를 불러와야하기 때문)
    const li = document.createElement("li");
    li.id = newToDoObject.id;
    const span = document.createElement("span");
    span.innerText = newToDoObject.text; // newToDoObject의 text를 가져옴.
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} 

function deleteToDo(event) { 
    const deleteLi = (event.target.parentElement);
    deleteLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
    // 여기서 잘 작동하지 않는 걸 확인함. 왜냐하면 여기서 toDo.id는 data type이 num인데 반면 deleteLi의 data type은 string이기 때문.
    // 그래서 여기서 parsInt 함수를 사용하여 delete.li의 type을 string에서 num으로 바꿔줬음.
    saveToDos();
    // 마지막으로 여기서 filtering 되고 새로 생성된 array를 다시 불러옴.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    const newToDoObject = { 
        // toDos array에 text가 아닌 여러 아이템을 갖는 Object로 저장하고 위해 생성.
        text : newToDo,
        id : Date.now(),
    };
    toDos.push(newToDoObject); 
    // toDos array에 newToDo가 아닌 newToDoObject를 업데이트.
    paintToDo(newToDoObject);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const alreadySavedToDos = localStorage.getItem(TODOS_KEY);

if (alreadySavedToDos) {
    const parsedToDos = JSON.parse(alreadySavedToDos);
    parsedToDos.forEach(paintToDo); 
    toDos = parsedToDos;
}
