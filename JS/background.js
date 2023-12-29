const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const bgImages = document.createElement("img"); // 새로운 HTML Element 생성
const chooseImage = images[Math.floor(Math.random() * images.length)];

bgImages.src = `img/${chooseImage}`; // 새로운 HTML Element 생성 

document.body.appendChild(bgImages); // appendChild로 body 내부에 bgImages라는 새 HTML Element 추가