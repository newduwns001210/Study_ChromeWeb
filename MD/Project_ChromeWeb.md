**LOGIN**

1. `모든 것은 HTML에서 시작 -> element들을 끌고 와서 JS에서 이런저런 작업을 해줌.`
2. `html에서 div 대신 form을 사용함. form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.`
> input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다. 
> 문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

**코드**
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
   // `-> html에서 require maxlength로 문자길이 제한 가능`
   */
}

loginButton.addEventListener("click", loginButtonClick);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


3. `form의 기본동작 = submit`
4. `href의 기본동작 = link(page move)`
5. `브라우저에서 기본적으로 실행되는 event(form의 자동 submit / href의 page move)를 막는 방법`
> argument.preventDefault();

**코드**
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginFormSubmit(event) { // `argument(event)는 임의의 값으로 아무렇게나 줘도 상관없음.`
   event.preventDefault(); 
   // `-> 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것.`
   // `이 function에서 기본 행동은 form이 submit하면 브라우저는 페이지를 새로고침하는 것.`
   const username = loginInput.value;
   console.log(username);
}

loginForm.addEventListener("submit", loginFormSubmit);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


`greeting.innerText = `안녕 ${username}`;`
`greeting.innerText = "안녕 " + username;`
> 위 2개의 코드는 같은 코드임. (중요한 기호 = ``(백틱))

6. `localstorage 사용`
> localStorage.setItem("유저명", username);
> localStorage.getItem("유저명");
> localStorage.removeItem("유저명");
7. `중복되는 코드 function으로 활용 but, 호출되는 위치에 따라 인자가 달라짐`

**코드**
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

------------------------------------------------------------------------------------------------------------------------------------------------
 
 
 **CLOCK**

1. Intervlas / TimeOut
- intervals = 매번 일어나야하는 무언가 ex) 매 2초마다 무언가 일어난다.
- timeout = 얼마 후 일어나야하는 무언가 ex) 2초 후 무언가 일어난다
> setInterval(function, ms); 이렇게 사용함. (1000ms면 1초)
> setTimeout(function, ms);

**간단한 시계 만들기 코드**
const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
   clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

getClock(); // `시간이 띄워진 상태로 시작하기 위해서 추가한 코드`
setInterval(getClock, 1000);
> 하지만 아직 초가 59에서 0으로 초기화 될 때, 00으로 표시가 안됨 
> 이제 이걸 다뤄볼꺼야(문자 채우기)

2. Padstart
- "1"이 아니라 "01" 이렇게 표시되게 하는 법.
- string.padStart(string_length, "앞에 추가할 string");
   > "1".padStart(2, "0"); -> string_length가 2가 될 때까지 공백을 0으로 채운다. 앞에서부터.
- padEnd도 있음 똑같은 구조인데 이건 string 끝에 문자를 추가해줌.

3. String
- String();
- data type을 string으로 바꿔줌

**코드**
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


------------------------------------------------------------------------------------------------------------------------------------------------


**Quotes**

1. randomness
- 

2. Math module
- 그 중 하나의 함수 Math.randaom(); -> 0부터 1 사이의 수를 랜덤하게 보여줌.
- Math.round(); -> 1~1.5까진 1을 돌려줌, 1.6~1.9까지 2를 돌려줌.
- Math.ceil(); -> 1만 1을 돌려줌, 1.1~1.9까진 2를 돌려줌.(1.000001도 2를 줌.)
- Math.floor(); -> ceil과 반대 / 1.99999도 1을 돌려줌, 2만 2를 돌려줌.

3. 