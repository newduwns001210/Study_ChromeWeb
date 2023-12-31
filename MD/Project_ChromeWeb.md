# STEP 1. LOGIN

1. `모든 것은 HTML에서 시작 -> element들을 끌고 와서 JS에서 이런저런 작업을 해줌.`
2. `html에서 div 대신 form을 사용함. form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.`
   > input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.

   > 문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

<br/>

**코드**
```
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

function loginButtonClick() {
   const username = loginInput.value;
   console.log(username);
   /*
   if (username === "") {
      alert("이름을 입력해주세요.");
   } else if (username.length > 5) {
      alert("이름이 너무 깁니다.")
   }
 // -> html에서 require maxlength로 문자길이 제한 가능`
}

loginButton.addEventListener("click", loginButtonClick);
```
<br/>

1. form의 기본동작 = `submit`
2. href의 기본동작 = `link(page move)`
3. `브라우저에서 기본적으로 실행되는 event(form의 자동 submit / href의 page move)를 막는 방법`
    > argument.preventDefault();

<br/>

**코드**
```
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginFormSubmit(event) { // argument(event)는 임의의 값으로 아무렇게나 줘도 상관없음.```
   event.preventDefault(); 
   // -> 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것.
   // 이 function에서 기본 행동은 form이 submit하면 브라우저는 페이지를 새로고침하는 것.
   const username = loginInput.value;
   console.log(username);
}

loginForm.addEventListener("submit", loginFormSubmit);
```
<br/>

6. `백틱(문자열)`
- greeting.innerText = `안녕 ${username}`;
- greeting.innerText = "안녕 " + username;
   > 위 2개의 코드는 같은 코드임. (중요한 기호 = ``(백틱))

7. `localstorage 사용`
   > localStorage.setItem("유저명", username);  
   > localStorage.getItem("유저명");   
   > localStorage.removeItem("유저명");

<br/>

**코드**
```
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "유저명";

function loginSubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem("유저명", username);
   paintGreeting(username); 
     // `paintGreeting(saveUsername)과 인자가 다른 이유는 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오기 때문.`
}

function paintGreeting(username) {
   greeting.innerText = `안녕 ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", loginSubmit);
} else {
   paintGreeting(saveUsername);
   // `여기 말하는겁니다.`
}
```
<br/>
<br/>
<br/>

# STEP 2. CLOCK

1. `Intervlas / TimeOut`
- `intervals = 매번 일어나야하는 무언가 ex) 매 2초마다 무언가 일어난다.`
- `timeout = 얼마 후 일어나야하는 무언가 ex) 2초 후 무언가 일어난다`
   > setInterval(function, ms); 이렇게 사용함. (1000ms면 1초)  
   > setTimeout(function, ms);

<br/>

**간단한 시계 만들기 코드**
```
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
   clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock(); // 시간이 띄워진 상태로 시작하기 위해서 추가한 코드

setInterval(getClock, 1000);
```
> 하지만 아직 초가 59에서 0으로 초기화 될 때, 00으로 표시가 안됨 

<br/>

#### 이제 이걸 다뤄볼꺼야(문자 채우기)

2. `Padstart`
- `"1"이 아니라 "01" 이렇게 표시되게 하는 법.`
- `string.padStart(string_length, "앞에 추가할 string");`
   > "1".padStart(2, "0"); -> string_length가 2가 될 때까지 공백을 0으로 채운다. 앞에서부터.
- `padEnd도 있음 똑같은 구조인데 이건 string 끝에 문자를 추가해줌.`

3. `String`
   >`String();`   
   >`data type을 string으로 바꿔줌`

<br/>

**코드**
```
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second= String(date.getSeconds()).padStart(2, "0");
   clock.innerText = `${hour}:${minute}:${second}`;
}

getClock(); // `시간이 띄워진 상태로 시작하기 위해서 추가한 코드`
setInterval(getClock, 1000);
```
<br/>
<br/>
<br/>

# STEP 3. Quotes and Background

1. `Math module`
   > 그 중 하나의 함수 Math.randaom(); -> 0부터 1 사이의 수를 랜덤하게 보여줌  

   > Math.round(); -> 1~1.5까진 1을 돌려줌, 1.6~1.9까지 2를 돌려줌.

   > Math.ceil(); -> 1만 1을 돌려줌, 1.1~1.9까진 2를 돌려줌.(1.000001도 2를 줌.)

   > Math.floor(); -> ceil과 반대 / 1.99999도 1을 돌려줌, 2만 2를 돌려줌.

2. `createElement()`
   >`document.createElement(); 이렇게 사용`

<br/>

**quotes 코드**
```
const quotes = [
    // 생략
];

const quote = document.querySelector("#quotes span:first-child"); 
const author = document.querySelector("#quotes span:last-child"); 

const randomquote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomquote.quote;
author.innerText = randomquote.author;
```

**background 코드**
```
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const bgImages = document.createElement("img"); // 새로운 HTML Element 생성
const chooseImage = images[Math.floor(Math.random() * images.length)];

bgImages.src = `img/${chooseImage}`; // 새로운 HTML Element 생성 

document.body.appendChild(bgImages); 
// `appendChild로 body 내부에 bgImages라는 새 HTML Element 추가`
// `appendChild는 html 상에서 제일 뒤에 오게, prepend는 제일 위에 오게 함.`
 bgImages.classList.add("img"); 
 // `CSS에 img라는 class를 추가하여 img파일을 배경화면으로 바꿈.`
```

<br/>

**유용한 정보**   
`사진을 배경이미지로 넣고 싶다면`   
img {    
position:absolute;   
width:100%; 
height:100%;   
left: 0px;  
top: 0px;   
right:0px;  
bottom:0px; 
z-index: -1;   
opacity:80%;   
}  
`설정 하면 됨. opacity는 취향대로 하시면 되고 z-index는 text의 z-index보다 낮으면 뒷 배경으로 설정 됨.`
<br/>
<br/>
<br/>

# STEP 4. TO DO LIST 

1. `기본적으로 background 만들기와 비슷함.`
   > `js 상에서 html element를 만들고 선언한 변수를 호출해와서 element 내부에 삽입.`

   > `appendChild 명령어로 상속시키는게 중요한 파트였음.`

   > `하지만, 여기까지의 문제점`
   <br/> - 첫번째, 추가한 toDo를 지울 수 없음. (추가만 가능)
   <br/> - 두번째, 웹페이지를 새로고침하면 toDoList가 초기화돼서 사라짐.

<br/>

**코드**
```
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 
 
function paintToDo(newToDo) { // 이것이 하는 일은 toDoList에 list 추가하기
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    // li와 span 이라는 html element를 js 상에서 새로 만들고 span을 li의 자식으로 상속시켰음 
    span.innerText = newToDo;
    // span 안에는 newToDo라는 input.value(toDoInput.value)를 넣음.
    toDoList.appendChild(li);
    //마지막으로 html파일에 추가했던 ul에 상속시켜 웹페이지에 표현. 
} 

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; // input의 현재 value를 새로운 변수 newToDo에 복사하는 것.
    toDoInput.value = ""; // 여기서 input의 value를 공백으로 설정한다 한들, newToDo와는 아무 상관이 없음.
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

<br/>

2. `toDoDelete Button`
   > `Button의 property중 parent(부모)가 있음 그 property에서 삭제하고 싶은 ToDo 의 target.parentElement(parentNode) 정보를 알 수 있고, 지정할 수 있음.`

   <br/>

**코드**
```
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
    const deleteLi = (event.target.parentElement);
    deleteLi.remove();
    // event.target.parentElement에서 어떤 ToDo가 클릭 되었는지 알 수 있음.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; 
    toDoInput.value = ""; 
    paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
```

<br/>

3. `saving toDo`
- `왜? -> 웹페이지를 새로고침 할 때마다 ToDo들이 모두 삭제됨.  `
   > newToDo(입력한 ToDo들)가 생길 때마다 toDos에 push해서 localstorage에 저장하고 싶음. 

   > 그리고, paintToDo를 그리기 전에 toDos(array)를 가져와서 newToDo를 push 할 예정.

   > `but, localstorage에는 text만 저장할 수 있음.`

- **(중요)** `JS의 object나 array 등등 어떤 것이든 string으로 바꿔주는 기능`
   > JSON.stingify();

<br/>

**코드**
```
const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input");

const toDos = [];
 
function saveToDos() {
    localStorage.setItem("toDos", JSON.stringify()); 
    // JSON.stringify()를 이용해 array로 localStorage에 저장함.
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
```

<br/>

4. `loding toDos`
   > 여전히 웹페이지를 새로고침하면 웹페이지에 표시되어 있던 toDo들이 사라짐.

   > but, localStorage에는 toDo들이 array로 저장되어 있음. 이 데이터를 불러오도록 할꺼임.

- `JSON.parse();를 사용하여 localStorage에 string으로 저장되어 있던 toDos를 array로 바꿔줌.`
   > 왜 JSON.stingify(); 썼다가 다시 JSON.parse(); 쓰면서 복잡하고 귀찮게 하냐면, 애초에 처음부터 loclaStorage에 array로 저장이 되질 않으니 저장이 가능한 string으로 변환하여 저장 후 loding 할 때 다시 array로 변환 후 사용하는 거야. 

- `forEach`
   > array에 있는 각각의 item에 대해서 function을 실행해줌. (item이 10개면 지정한 function을 10개의 각각의 item에 1번씩 실행시킴.)

<br/>

**코드**
```
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
```

<br/>

5. Deleting toDo (Upgrade)
   > toDos array에 각각 아이템들을 text가 아닌 object로 만들고 각각의 object로써 ID를 주고 싶음.

   > 새로 만든 Object와 paintToDo와 연결

- filter (선택옵션이라고 이해하면 편함.)
   > true만 리턴함. false인 항목을 제외하고 리턴함.

   > 삭제버튼을 누면 array에 있는 아이템 한가지를 지우는 것이 아니라 특정 아이템을 false로 바꾸고 나머지 true 항목들만 가지고 새로운 array를 생성함.
   
   > boolean(참 거짓)을 이용한 함수 filter를 만듦.    
   그 안에 !==(not) 을 활용해서 우리가 삭제하고픈 애를 뺀 나머지만 return 하게 한다.
    
<br/>

**코드**
```
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
    button.innerText = "❌"
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
```

<br/>
<br/>
<br/>

# STEP 5. WEATHER

1. navigator.geolocation.getCurrentPosition()
   - 사용자의 위치를 줌. (위치 좌표를 줌)
   - getCurrentPosition
      > argument가 2개 필요함. (success 시 실행 함수 + error 시 실행 함수)
      > 그 argument 중 success 함수가 위도와 경도 데이터를 가지고 있음
      > 위도와 경도 데이터(num)를 장소로 바꿔줄 서비스를 사용해야 함. (그 전에 API 계정을 열어야 함)

   - Weather API
      > API는 기본적으로 다른 서버의 데이터를 주고 받을 수 있는 방법.
      > openweathermap.org 접속 -> 로그인 -> API 클릭 -> Current Weather Data의 API call URL을 사용.
      > URL이 요구하는 데이터와 API key를 입력.
      > 우리가 있는 장소의 이름과 현재 날씨 data를 줄 것임.

   - JS에서 URL을 부르는 방법
      > JS에서 const 한 변수들(lat, log, API_KEY)을 백틱(``)을 사용하여 ${} 안에 넣어서 언제 어디서든 내 위치 데이터를 URL에 보낼 수 있게 해주고, API_KEY도 넣어주어 데이터를 바로 블러올 수 있게 해줌.
      > URL만 불러오고, URL상의 데이터는 받아오지 못한 상태. 

   - (중요) JS가 웹페이지 상으로 URL 상의 데이터를 불러오는 방법
      > `fetch("URL주소");` (개발자 도구에서 WIFI에 들어가서 확인 가능.)
      > 당장에 뭔가 일어나지 않고 시간이 조금 걸린뒤에 일어남 -> `promice`
      > 서버가 응답 할 때까지 기다려야 하기 때문에 then() 함수를 사용.
      > 이제 여기서 URL을 fetch하고, response(응답)을 받아야함

<br/>

**코드**
```
const API_KEY = "fa3c03f71034f3120d888bef86c1ff83";

function onGeoOk(a) { // 데이터를 받아 올 수 있게 아무 argument로 지정해주면 됨.
    const lat = a.coords.latitude; // 위도
    const log = a.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    // "units=metric" 맨 뒤에 달아 화씨 온도를 섭씨 온도로 받아올 수 있음.
    // 나머지는 설명 참조 (JS에서 URL을 부르는 방법)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const citySpan = document.querySelector("#weather span:first-child");
            const weatherSpan = document.querySelector("#weather span:nth-child(2)");
            const tempSpan = document.querySelector("#weather span:last-child");

            const city = data.name;
            const weather = data.weather[0].main;
            const temp = data.main.temp;

            citySpan.innerText = city;
            weatherSpan.innerText = weather;
            tempSpan.innerText = temp;
        });
    /* JS가 자동으로 URL을 요청하고 웹페이지 상에 데이터를 불러오기만 함.
       서버가 바로 응답하지 않고, 시간이 조금 걸림 = promise
       응답할 때까지 기다려야 함 -> then() 함수 사용.
       이제 여기서 URL을 fetch하고, response(응답)을 받아야함.(json으로 받아옴)
       받아온 json 데이터에서 then()을 사용해 뽑아서 쓸 데이터만 찾아서 변수 선언.
       html에 div를 생성하여 
    */
}

function onGeoError() {
    alert("너의 위치를 찾을 수 없어.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```