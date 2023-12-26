- 모든 것은 HTML에서 시작 -> element들을 끌고 와서 JS에서 이런저런 작업을 해줌.
- html에서 div 대신 form을 사용함
form 안의 속성에는 required(필수), maxlength , type, placeholder 등이있다.
input 밖을 form으로 감싸면 따로 조건문을 주지않아도 html이 최대길이, 빈칸등을 잡아준다.
문제는 버튼을 클릭할때 자동으로 submit(새로고침)된다는 것

- 코드
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
   -> html에서 require maxlength로 문자길이 제한 가능
   */
}

loginButton.addEventListener("click", loginButtonClick);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


- form의 기본동작 = submit
- href의 기본동작 = link(page move)
- 브라우저에서 기본적으로 실행되는 event(form의 자동 submit / href의 page move)를 막는 방법
   -> argument.preventDefault();

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginFormSubmit(event) { // argument(event)는 임의의 값으로 아무렇게나 줘도 상관없음.
   event.preventDefault(); 
   // -> 어떤 event의 기본 행동이든지 발생되지 않도록 막는 것.
   // 이 function에서 기본 행동은 form이 submit하면 브라우저는 페이지를 새로고침하는 것.
   const username = loginInput.value;
   console.log(username);
}

loginForm.addEventListener("submit", loginFormSubmit);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


greeting.innerText = `안녕 ${username}`;
greeting.innerText = "안녕 " + username; 
-> 위 2개의 코드는 같은 코드임. (중요한 기호 = ``(백틱))





- localstorage 사용
localStorage.setItem("유저명", username);
localStorage.getItem("유저명");
localStorage.removeItem("유저명");

- 중복되는 코드 function으로 활용 but, 호출되는 위치에 따라 인자가 달라짐

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
     // paintGreeting(saveUsername)과 인자가 다른 이유는 함수를 호출하는 위치에 따라 유저정보는 다른 곳에서 오기 때문. 
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
   // 여기 말하는겁니다.
}
