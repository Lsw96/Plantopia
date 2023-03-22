// nav js
document.querySelectorAll(".navbar-toggler")[0].addEventListener("click", function(){
    document.querySelectorAll(".list-group")[0].classList.toggle("show");
});
//------------------------------------------------------------------------------------
// modal js
document.querySelector(".modal-btn").addEventListener("click", function(){
    document.querySelector(".black-bg").classList.add("show");
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".black-bg").classList.remove("show");
});
//------------------------------------------------------------------------------------
// modal -> form js
document.querySelector('form').addEventListener("submit", function(e){
    let id_value = document.getElementById("email").value
    let pw_value = document.getElementById("pw").value
    if ( id_value == '' || pw_value == '') {
        alert("공백이다")
        e.preventDefault();
    } else {
        alert("공백아니네")
        e.preventDefault();
    }
});
//------------------------------------------------------------------------------------
// if/else, function 실력향상 과제
function 삼육구게임(num) {
    if (num % 9 == 0) {
        console.log('박수x2')
    }  else if (num % 3 == 0) {
        console.log("박수")
    } else {
        console.log('통과')
    }
}; //삼육구게임(11);
//------------------------------------------------------------------------------------
function 합격했냐(a, b) {
    if (a < 40 || b < 40) {
        console.log("불합격")
    } else if ( a + b >= 120) {
        console.log("합격")
    } else {
        console.log("불합격")
    }
    if (a < 0 || a > 100) {
        alert("0~100사이 값만 입력해라")
    } else if (b < 0 || b > 100) {
        alert("0~100사이 값만 입력해라")
    }
}; //합격했냐(101, 10);
//------------------------------------------------------------------------------------
//Dark Mode Js
let count = 0;
document.querySelector(".badge").addEventListener("click", function(){
    count += 1;
    console.log(count);
    if ( count % 2 == 1) {
        document.querySelector(".badge").innerHTML = "Light 🔄";
    } else {
        document.querySelector(".badge").innerHTML = "Dark 🔄";
    }
});
//------------------------------------------------------------------------------------
// 변수, 사칙연산 실력향상 과제

let 예금액 = 10000;
let 미래예금액 = 0;
if (예금액 > 50000 ) {
    미래예금액 = 예금액 * 1.20 * 1.20
} else {
    미래예금액 = 예금액 * 1.15 * 1.15
};
// console.log(미래예금액);
//------------------------------------------------------------------------------------
let first = 360;
let total = 0;
total = first + first * 2 / 3 + first * 2 / 3 * 2 / 3
// console.log(total)
//------------------------------------------------------------------------------------
// 유저가 <input>에 답을 적고 제출버튼을 누를 수 있는 퀴즈 UI 입니다. (답: 1335)
let counti = 0;
document.querySelector("#send-answer").addEventListener("click", function(e){
    let result = document.querySelector("#answer").value
    counti += 1;
    console.log(count)
    if (result == '1335') {
        alert("성공")
        e.preventDefault();
    } else if (counti >= 3 || result != '1335') {
        alert("멍청아")
        e.preventDefault();
    }
});
//------------------------------------------------------------------------------------
// setTimeout(function(){~~코드}, 1000) //1000은 1초/ setTimeout은 JS문법이아닌 Web Browser API 사용법
// setInterval(function(){~~코드}, 1000) //1000ms마다 실행
let countia = 5;
const countdown = setInterval(function() {
  countia -= 1;
  if (countia >= 0) {
    document.querySelector("#time").innerHTML = countia;
  } else {
    clearInterval(countdown);
    document.querySelector(".alert").remove();
  }
}, 1000);