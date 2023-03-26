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
let countis = 5;
setInterval(function(){
    countis -= 1;
    if ( countis >= 0 ) {
        document.querySelector('#time').innerHTML = countis;
    } else {
        document.querySelectorAll('.alert')[0].style.display = 'none';
    }
}, 500)
//------------------------------------------------------------------------------------
//스크롤이벤트 만들기
window.addEventListener('scroll', function(){
    check = window.scrollY;
   if ( check >= 100) {
    document.querySelector('.navbar-brand').style.fontSize = '1rem';
   } else {
    document.querySelector('.navbar-brand').style.fontSize = '1.3rem';
   }
});
// document.querySelector('.lorem').addEventListener('scroll', function(){
//     var 스크롤양 = document.querySelector('html').scrollTop;  //현재 페이지 스크롤양
//                        ↑축약어                window.scrollY  //현재 페이지 스크롤양
//     var 실제높이 = document.querySelector('html').scrollHeight;  //현재 페이지 실제 높이 -> 페이지 로드완료시 실행해야 정확(<body>끝나기 전에 넣는게 굿)
//              ↑html선택자 축약어     document.documentElement.scrollHeight;
//     var 높이 = document.querySelector('html').clientHeight;  //페이지 보이는 부분 높이
//     console.log(스크롤양, 실제높이, 높이);
// });
document.querySelector('.lorem').addEventListener('scroll', function(){
    //div의 스크롤바 내린 양 + 눈에보이는div높이 == div의 실제높이
    //스크롤 끝에 닿으면(188) alert띄우기
    let 스크롤양 = document.querySelector('.lorem').scrollTop;
    let 실제높이 = document.querySelector('.lorem').scrollHeight;
    let 높이 = document.querySelector('.lorem').clientHeight;
    if (스크롤양 + 높이 > 실제높이 - 10) {
        alert('알룻알룻')
    }
});

$(window).on("scroll", function () {
    var 스크롤양 = window.scrollY; // $(window).scrollTop(); 같은코드
    var 실제높이 = document.documentElement.scrollHeight;
    var 높이 = document.documentElement.clientHeight;
    var 스크롤진척도 = ( 스크롤양 / (실제높이 - 높이) * 100);
    var perPage = 스크롤진척도 + "%";
    $(".line").css("width", perPage);
    if ( 스크롤진척도 == 0 ) {
        $(".line").css("width", "1%");
    } else if ( 스크롤진척도 == 400 ) {
        $(".line").css("width", "50%");
    } else if ( 스크롤진척도 == 1200 ) {
        $(".line").css("width", "100%");
    }
});