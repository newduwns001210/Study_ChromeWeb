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
// appendChild로 body 내부에 bgImages라는 새 HTML Element 추가
// `appendChild는 html 상에서 제일 뒤에 오게, prepend는 제일 위에 오게 함.`

 bgImages.classList.add("img"); 
 // CSS에 img라는 class를 추가하여 img파일을 배경화면으로 바꿈.
