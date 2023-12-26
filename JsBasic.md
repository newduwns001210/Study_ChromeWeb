let은 변경(업데이트)가 가능한 값
const는 변경이 불가능(고정된)한 값
var는 위의 두개와 다르게 구분이 없는 값, 옛날 기술, 사용X
alert는 페이지 메세지

boolean
- true / false 로 값이 두개
- 0=off / 1=on

+ null과 false는 다른 의미다 false는 값이 존재 null은 값이 존재하지 않음 (빈게 아니라 아무것도 없는 상태로 채워졌다고 해석)
+ true / false / undefined / null 은 데이터 타입이다 문자x


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


2.6 Object
/*
const playerName = "yyj";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "fat";
// 플레이어 구상 끝

const player = ["yyj", 1212, false, "fat"];
// 배열이 적합하지 않은 왜? 데이터들이 정확히 뭘 알려주는지 모름
*/

const player = {  // object = player
    name : "yyj", // property 1개하고 콤마(,)
    points : 10,
    fat : true,
};

console.log(player);

console.log(player.name);
console.log(player["name"]);
// 둘 다 같은 결과를 보여줌

console.log(player);
player.fat = false; // 여기서 const가 boolean으로 바뀌는거임
console.log(player);
// player라는 object는 const로 정의 됐잖아? 근데 왜 player.fat = false;
// 에 의해서 바뀌었느냐? 그건  player 안의 무언가를 업데이트 할 땐 아무 문제가 없어

console.log(player);
player.lastName = "tomato";
player.points = 15; //포인트를 15로 변경
console.log(player);
// object(player) 안의 property(lastname=tomato)을 추가 

console.log(player);
player.lastName = "tomato";
player.points = player.points + 15; //원래 포인트에 15를 추가
console.log(player.points);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


2.7 Functions
- (중요)function(함수)는 내부에서부터 실행됨

/*
console.log("내 이름은 yyj");
console.log("내 이름은 111");
console.log("내 이름은 222");
console.log("내 이름은 333");
console.log("내 이름은 444");
console.log("내 이름은 555");
이렇게는 너무 비효율적임 (복붙을 너무 많이 함)
*/

/*
function sayHello() {
    console.log("안녕 내 이름 ");
};
// ()는 function을 실행하는 방법이다. 컴퓨텅에게 보내는 일종의 실행버튼
*/

function sayHello(nameOfPerson, age) { // 여기서 sayHello라는 function은 nameOfPerson, age라는 2개의 argument를 받고 있다.
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
};
// 우리가 데이터를 받는 방법은 sayHello()라는 function의 ()안에 데이터를 추가할꺼야.
/* function을 실행시켜 데이터를 변경하기 위해서 argument(인수)를 보내야 함 
   즉, argument는 function을 실행하는 동안 어떤 정보를 function에 보낼 수 있는 방법이다.
*/

sayHello("b", 10);
sayHello("c", 23);
sayHello("d", 35);



//예시1
function plus(a, b) {
    console.log(a + b);
}
// argument의 이름은 내 맘대로 지으면 됨

function divide(a, b) {
    console.log(a / b);
}

plus(); 
// argument의 값을 주지 않아 undefinded가 뜸 그리고 "+"로 실행하면 NaN가 뜸 숫자가 아니라는 뜻임

plus(8, 60);
divide(127, 3)
// (중요)여기서 우리는 function 안의 argument에게 데이터를 넣은거야. 
// 즉, function에게 데이터를 보내고 function은 그 데이터를 받는 방법을 알게 된거지.

//예시2
const player = {
    name: "yyj",
    sayHello: function (otherPersonName) { // otherPersonName라는 argument로 외부에서 값을 받을 수 있게 만듬
        console.log("hello " + otherPersonName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("bb"); 
// 위의 console.log()와 비슷한 나만의 object와 function을 만든 것이야.


간단한 계산기 만들기 예제
const calculator = {
    add : function (a, b) {
        console.log(a + b);
    },
    minus : function (a, b) {
        console.log(a - b);
    },
    gobsem : function (a, b) {
        console.log(a * b);
    },
    divide : function (a, b) {
        console.log(a / b);
    },
    power : function (a, b) {
        console.log(a ** b);
    }
}

calculator.add(12, 222);
calculator.minus(200, 55);
calculator.gobsem(12, 222);
calculator.divide(400, 14);
calculator.power(12, 2);


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


2.11 Returns의 개념과 이해
const age = 96;

function calculateKrAge(ageOfForeigner) { // 2. 1번에서 들어간 age의 값이 ageOfForeigner를 대체.
    return ageOfForeigner + 2; // 3. 대체된 argument(age) = 96으로 연산함
}                              // 4. return을 함으로써, function을 호출하는 코드는 ageOfForeigner + 2 = (98)가 됨

const krAge = calculateKrAge(age); // 1. 1행에 정의한 age의 값이 들어감

console.log(krAge);

// 즉, return은 특정 function(함수)의 반환 값이 됨
// 외부에서 function(함수)를 호출하는 코드는 return값(반환값)이 됨
// 이 코드에서 9행의 krAge = calculateKrAge(age) = return ageOfForeigner + 2 인거야.
// 그니까 결국은 return ageOfForeigner + 2 이걸 호출한거지 여기서 ageOfForeigner + 2 = 98 이잖아
// return 98인거지 그리고 중요한 개념인데 한번 return하면 그 function(함수)는 끝나



// 반환값을 활용해 외부의 값으로 함수 호출해보기
const calculator = {
    plus : function (a, b) {
        return a + b;
    },
    minus : function (a, b) {
        return a - b;
    },
    gobsem : function (a, b) {
        return a * b;
    },
    divide : function (a, b) {
        return a / b;
    },
    power : function (a, b) {
        return a ** b;
    }
}

const plusResult = calculator.plus(2, 3);
const miunsResult = calculator.minus(plusResult, 10);
const gobsemResult = calculator.gobsem(miunsResult, miunsResult );
const divideResult = calculator.divide(gobsemResult, 4);
const powerResult = calculator.power(plusResult, divideResult);
// 상호의존적 코드


ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ


2.13 Conditionals(조건문)

//명령어 설명 (조건문 x)
prompt()
- 아주아주 오래된 기술(이젠 거의 사용하지 않음).
- 사용자에게 페이지 경고창으로 입력창을 띄워줌 (사용자에게 창을 띄어 값을 받음).
- css나 html로 변경도 못함.
- typeof라는 키워드를 쓰면 data type을 볼 수 있는데, 확인해보면 얘는 무조건 type이 string임(defalut=string 이기 때문).

parseInt()
- data type을 string(문자열) -> number(숫자)로 바꿔줌
- but, 문자열말고 숫자열만 인식 가능.
- 근데 여기서 이상한 점 하나 parseInt("123abc")하면 123이 뜸.왜그러냐면 parseInt()는 숫자가 아닌 글자를 만나게 되면 그 글자 이후를 무시해버리고 해당지점까지의 정수값을 리턴함.

isNaN()
- ()안의 argument(인자)가 data type이 number인지 boolean(true/false)로 알려줌.
- NaN이 들어가기 때문에 true면 숫자가 아니라는 뜻이고, false면 숫자라는 뜻임.



//간단한 예제
 const age = parseInt(prompt("너 몇살이야"));

 if(isNaN(age)) {
    console.log("숫자를 입력해주세요.")
 } else {
    console.log("당신의 나이는 " + age +"살 입니다")
 }


 //AND/OR 연산자를 활용한 조건식 실행
 const age = parseInt(prompt("너 몇살이야"));

 if(isNaN(age) || age < 0) {
    console.log("나이를 입력해주세요.(나이는 음수일 수 없습니다.)");
 } else if(age >= 19 && age <= 50) { // AND연산자 = && / 조건중 하나라도 false면 false, 모든 조건이 true일 때만 true.
    console.log("음주가 가능한 나이입니다");
 } else if (age < 19 || (age > 50 && age < 60)) { // OR연산자 = || / 조건중 하나라도 true면 조건문 실행.
    console.log("술 마시지마");
 } else if (age >= 60  && age <= 80) {
    console.log("운동하세요");
 } 


다른 연산자도 있어 !!
- "==="는 A가 B와 같다면? 이런식으로 작용하는 거지 
  예시 - if( A === B ) {
    ~~~~~~~~~~~~~~~~~
  }  
- "!=="는 반대로 A가 B가 아니라면? 같지 않다면? 이런식으로
  예시 - if( A !== B ) {
    ~~~~~~~~~~~~~~~~~
  }  
