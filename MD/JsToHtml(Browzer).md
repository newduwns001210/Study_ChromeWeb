- 쉽게 말해 HTML은 접착제 역할.
    어떤 것들의 접착제? -> CSS와 JS와의 접착제 역할
    JS를 사용하는 이유 -> HTML의 Element들을 JS를 통해 변경하고 읽을 수 읽음.
- JS로 HTML 변경이 가능함.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.0 The Document Object
가장 중요한 브라우저의 핵심 Object - Document

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.1 HTML in Javascript
const title = document.getElementById("title");

title.innerText = "got you!";
console.log(title.className);
console.log(title.id);

JS에서 HTML Element를 가져올 수 있음.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.2 Searching For Elements
 - getElementById("title") -> 특정 값(Element)
 - getElementByName("title") -> 배열(Array)
 - getElementByClassName("hello") -> 배열(Array)
 - getElementByTagName("h1") -> 배열(Array)
 - <중요> querySelector(".hello h1") -> CSS selector(특정값 (Element)) / className이 같아도 항상 첫번쨰 Element를 가져옴.
    -> 조건에 부합하는 모든 Element를 가져오고 싶으면 querySelectorAll(".hello h1")
    -> id로 검색하고 싶으면 querySelector("#hello") 이런식.

//const title = document.getElementsByClassName("h1");
//const title = document.querySelector(".hello h1");
const title = document.querySelectorAll(".hello h1");

console.log (title);

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.3 Events
- event를 listen하는 방법

const title = document.querySelector(".hello h1");

function handleTitleClick() {
   title.style.color = "red"
}

title.addEventListener("click", handleTitleClick);
// title이란 HTML element가 하나 있다고 가정하고, addEventListener를 호출,
// listen하고 싶은 event 이름을 알려줘 -> 그리고 이벤트가 발생하면 호출할 function(handleTitleClick)을 전달


- event를 찾는 가장 좋은 방법
구글에 Web APIs 검색
console.dir(element)해서 event 살펴보기



- 예제
const title = document.querySelector(".hello h1");

console.dir(title);


function handleTitleClick() {
   title.style.color = "red"
}

function handleMouseEnter() {
   title.innerText = "마우스 들어왔어!";
}

function handleMouseLeave() {
   title.innerText = "마우스 나갔어!";
}


title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);






3-5 more events
const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleTitleClick() {
   h1.style.color = "red"
}

function handleMouseEnter() {
   h1.innerText = "마우스 들어왔어!";
}

function handleMouseLeave() {
   h1.innerText = "마우스 나갔어!";
}

function handleWindowResize() {
   document.body.style.backgroundColor = "tomato";
}
// const title -> const h1으로 변경한 이유는 index.html의 title을 가져오기 위해서(헷갈릴까봐)
/* window의 화면크기가 바뀔 경우, document를 호출하고 document가 body에 
   접근하게 해주는 걸 알고 body의 style의 backgroundColor를 tomato로 변경한다 */
/* body, head, title 이런 것들은 중요하기 때문에 document.body 처럼 존재하는거고, 
   나머지 element들은 querySelector나 getElementById 등으로 찾아와야 함. */

function handleWindowCopy() {
   alert("복사!")
}
// 웹페이지에서 control + c(copy)할 때 경고문이 뜸.


// 위 3개와 코드는 다르지만 같은 이벤트
h1.onclick = handleTitleClick;   //h1.addEventListener("click", handleTitleClick);
h1.onmouseenter = handleMouseEnter;   //h1.addEventListener("mouseenter", handleMouseEnter);
h1.onmouseleave = handleMouseLeave;   //h1.addEventListener("mouseleave", handleMouseLeave);
//// addEventListener를 더 선호하는 이유 -> removeEventListener로 event listener를 제거할 수 있기 때문.

window.addEventListener("resize", handleWindowResize); // resize 이벤트는 "화면이 바뀔 경우" 임.
// document가 JS에서 기본적으로 제공되듯, window도 기본적으로 제공함.

window.addEventListener("copy", handleWindowCopy);
// 웹페이지에서 control + c(copy)할 때 발생하는 이벤트

/* (중요)
   정리 하자면 "click", "mouseenter", "mouseleave", "resize", "copy" 같은 event를 
   listen해서 handle***(function)같은 event를 처리하는거야! 
   ex) h1.addEventListener("click", handleTitleClick); 이것처럼!
*/

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

3.6 CSS in Javascript


- classList 사용방법 (contains, remove, add)
const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleTitleClick() {
   const clickedClass = "clicked" // 타이핑을 잘못했을 때 오류를 js로 알 수 있게 하기위함.
   if (h1.classList.contains(clickedClass)) { 
      // contains은 우리가 명시한 class(clicked)가 HTML element의 class에 포함되어 있는지 알려준다는 의미.
      // h1.classList는 element의 class 내용물을 조작하는 것을 허용한다는 뜻.
      // 즉, 종합해서 말하면 classList가 clicked를 포함하고 있는지만을 확인하는과정.
      h1.classList.remove(clickedClass); 
      // h1.className = clickedClass 도 사용 가능하지만 이건 클래스 자체를 변경 하는 행위라 
      // 다른 클래스까지 있는 다중클래스일 경우 모든 클래스를 없애버리고 설정한 클래스들만으로 설정이 가능함 = 귀찮고, 오래걸림, 비효율적임
   } else {
      h1.classList.add(clickedClass);
   }
   // remove와 add는 classList 안의 특정 class
}

h1.addEventListener("click", handleTitleClick);




// classList 사용방법 (toggle = add + remove) 
const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleTitleClick() {
   const clickedClass = "clicked" 
   // 타이핑을 잘못했을 때 오류를 js로 알 수 있게 하기위함. 한번만 사용할 경우 굳이 필요하진 않음.
   h1.classList.toggle(clickedClass);
   // toggle은 class name이 존재하는지 확인해주는 function
   // class name이 존재하면 그 class name을 삭제할꺼고, 존재하지 않으면 그 class name을 추가한다.
}

h1.addEventListener("click", handleTitleClick);



쉽게말해서,
h1.classList.toggle(clickedClass);
=============================
if (h1.classList.contains(clickedClass)) { 
      h1.classList.remove(clickedClass); 
   } else {
      h1.classList.add(clickedClass);
   }