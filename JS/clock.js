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