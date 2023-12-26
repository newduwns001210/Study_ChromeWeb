const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function loginFormSubmit(event) {
   event.preventDefault(); 
   const username = loginInput.value;
   loginForm.classList.add("hidden");
   console.log(username);
}

loginForm.addEventListener("submit", loginFormSubmit);
