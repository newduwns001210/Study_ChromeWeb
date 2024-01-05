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