// 면 그리기
// const canvas = document.querySelector('.canvas');
// const context = canvas.getContext('2d');

// function radian(각도){
//   return 각도 * Math.PI / 180;
// }

// context.fillStyle = 'red';
// context.fillRect(50,50,100,100);
// context.fillStyle = 'blue';
// context.fillRect(0, 0, 100, 100);
// context.clearRect(80,80,50,50); //지운다. x,y,width,height
// context.strokeRect(160,0,100,100);
// context.fillStyle = 'green';
// context.beginPath();
// context.arc(200, 100, 50, 0, radian(90), true); // (위치x, y, 반지름의크기, 시작각도, 끝각도(호도각인radian값작성), 시계바향으로갈건지 반대방향으로갈건지 bool형으로)
// context.stroke();
// context.beginPath();
// context.arc(250, 100, 20, 0, radian(360), true);
// context.stroke();

// // 선 그리기
// const cv = document.querySelector('.canvas2');
// const ctx = cv.getContext('2d');

// ctx.strokeStyle = 'black';
// ctx.beginPath(); //호출
// ctx.moveTo(50, 50); //붓을 그 위치에 옮긴다.
// ctx.lineTo(50, 100); //붓을 긋는다. 칠해야보임
// ctx.lineTo(120, 50); //붓을 긋는다. 칠해야보임
// ctx.lineTo(50, 50); //붓을 긋는다. 칠해야보임
// ctx.stroke(); // 선을 칠한다.

// ctx.beginPath();
// ctx.moveTo( 130, 60) ;
// ctx.lineTo( 130, 110 );
// ctx.lineTo( 60, 110 );
// ctx.lineTo( 130, 60 );
// ctx.stroke();
// // ctx.fill(); // 채울영역이 있으면 면을 칠한다.
// ctx.closePath(); // Path의 선을 끝내는

// ctx.fillStyle = 'orange';
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(75, 75);
// ctx.lineTo(75, 25);
// ctx.fill();

//--------------------------------------------------------------------------

// mousedown = 클릭시 반응 touchstart-터치시작시 발동
// mouseup = 뗄 때 반응 touchmove-터치중일시 발동
// mousemove = 클릭중일시 반응 touchend-터치종료시 발동 
// var 시작좌표 = 0;
// var 눌렀냐 = true;

// $('.slide-box').eq(0).on('mousedown', function(e){ // 마우스를 눌렀을때 반응
//     시작좌표 = e.clientX;
//     눌렀냐 = true;
// });
// document.querySelectorAll('.slide-box')[0].addEventListener('mousemove', function(e){ // 마우스를 드래그했을때 반응
//     if(눌렀냐 == true){
//         document.querySelector('.slide-container').style.transform = `translateX(${e.clientX - 시작좌표}px)`
//     }
//     // console.log(e.clientX - 시작좌표);
// });
// document.querySelectorAll('.slide-box')[0].addEventListener('mouseup', function(e){ // 마우스를 뗄 때
//     눌렀냐 = false;
//     if(e.clientX - 시작좌표 < -150){
//         document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
//         document.querySelector('.slide-container').style.transition = 'all 0.5s';
//     } else {
//         document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
//         document.querySelector('.slide-container').style.transition = 'all 0.5s';
//     }
//     setTimeout(()=>{
//         document.querySelector('.slide-container').style.transition = 'none';
//     },500);
// });

// $('.slide-box').eq(0).on('touchstart', function(e){ // 터치를 눌렀을때 반응
//     시작좌표 = e.touches[0].clientX;
//     눌렀냐 = true;
// });
// document.querySelectorAll('.slide-box')[0].addEventListener('touchmove', function(e){ // 터치를 드래그했을때 반응
//     if(눌렀냐 == true){
//         document.querySelector('.slide-container').style.transform = `translateX(${e.touches[0].clientX - 시작좌표}px)`
//     }
// });
// document.querySelectorAll('.slide-box')[0].addEventListener('touchend', function(e){ // 터치를 뗄 때
//     눌렀냐 = false;
//     if(e.changedTouches[0].clientX - 시작좌표 < -100){
//         document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
//         document.querySelector('.slide-container').style.transition = 'all 0.5s';
//     } else {
//         document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
//         document.querySelector('.slide-container').style.transition = 'all 0.5s';
//     }
//     setTimeout(()=>{
//         document.querySelector('.slide-container').style.transition = 'none';
//     },500);
// });

//--------------------------------------------------------------------------

// switch 개념 STEP.1

// let 변수 = 2 + 2;
// switch (변수){  // 변수값에따라서 조건분기를 만들 수 있음
//     case 3:
//         alert('변수가3이네용');
//         break
//     case 4:
//         alert('변수가4이네용');
//         break
//         default: // 아무것도 해당 안될 시
//             alert('아무것도 해당안됨');
// }
// if는 다양한 조건식 가능
// switch는 변수 1개만 테스트가능 등호비교정도만 가능

//--------------------------------------------------------------------------

// document.querySelector('#quiz').addEventListener('click', function(e){
//     switch (e.target.innerHTML){
//         case '와이프':
//             alert('와이프를 좋아하시네요');
//             break
//         case '부모님':
//             alert('효자네요');
//             break;
//         case '키우던 개':
//             alert('사람보다 동물을 더 좋아하시네');
//             break;
//     } 
// });

//--------------------------------------------------------------------------
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
  document.querySelector('.list-group').classList.toggle("show");
});
document.querySelector('#m-open').addEventListener('click', function(){
  document.querySelector('.black-bg').style.display = 'block'
});
document.querySelector('#m-close').addEventListener('click', function(){
  document.querySelector('.black-bg').style.display = 'none';
});
document.querySelector('form').addEventListener('submit', function(e){
  id = document.querySelector('#email').value;
  pw = document.querySelector('#paaword').value;
  if( id == '' && pw == ''){
    alert("둘다 공백임");
    e.preventDefault();
  } else if ( id == '' ){
    alert("아이디 입력하셈");
    e.preventDefault();
  } else if ( pw == '') {
    alert("비번 입력하셈");
    e.preventDefault();
  }
  if (pw.length < 6){
    alert("왜케 비번이 짧음");
    e.preventDefault();
  }
});
function 삼육구게임(num){
  if(num % 9 == 0){
    console.log("박수x2");
  } else if (num % 3 == 0) {
    console.log("박수")
  }
    else {
    console.log("통과")
  }
};
function 합격했냐(a, b){
  if(a >= 60 && b >= 60){
    console.log("합격");
  } else if(a+b >= 120) {
    console.log("과락");
  } else {
    console.log("불합격");
  }
};
textCount = 0;
document.querySelector('.badge').addEventListener('click', function(){
  textCount++;
  badge = document.querySelector('.badge');
  body = document.querySelector('body');
  if (textCount % 2 == 0 ){
    badge.innerHTML = "White 🔄";
    body.style.backgroundColor = "#fff";
    body.style.color = "#000";
  } else {
    badge.innerHTML = "Dark 🔄";
    body.style.backgroundColor = "#000";
    body.style.color = "#fff";
  }
});
answer = 0;
document.querySelector('#send-answer').addEventListener('click', function(e){
  answer++;
  input = document.querySelector('#answer').value;
  if(input == 1335){
    alert('ㅇㅈ성공');
    e.preventDefault();
  } else if (answer == 3){
    alert('넌이제못해 멍청아');
    e.preventDefault();
  } else if (answer == 2){
    alert('마지막기회다.');
    e.preventDefault();
  } else if (answer == 1){
    alert('2번남았다.');
    e.preventDefault();
  } else {
    alert('돌아가라');
    e.preventDefault();
  }
});
count = 5;
setInterval(function(){
  count--;
  document.querySelector('#count').innerHTML = count;
  if( count == -1){
    document.querySelector('.alert').style.display = "none";
  }
},1000);