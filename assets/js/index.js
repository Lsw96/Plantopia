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
// // 면 그리기
// const canvas = document.querySelector('.canvas');
// const context = canvas.getContext('2d');

context.fillStyle = 'red';
context.fillRect(50,50,100,100);
context.fillStyle = 'blue';
context.fillRect(0, 0, 100, 100);
context.clearRect(80,80,50,50); //지운다. x,y,width,height
context.strokeRect(160,0,100,100);
context.fillStyle = 'green';
context.beginPath();
context.arc(200, 100, 50, 0, radian(90), true); // (위치x, y, 반지름의크기, 시작각도, 끝각도(호도각인radian값작성), 시계바향으로갈건지 반대방향으로갈건지 bool형으로)
context.stroke();
context.beginPath();
context.arc(250, 100, 20, 0, radian(360), true);
context.stroke();
// 선 그리기
const canvas2 = document.querySelector('.canvas2');
const context2 = canvas2.getContext('2d');

context2.beginPath(); //호출
context2.moveTo(50, 50); //붓을 그 위치에 옮긴다.
context2.lineTo(50, 100) //붓을 긋는다. 칠해야보임
context2.lineTo(120, 50) //붓을 긋는다. 칠해야보임
context2.lineTo(50, 50) //붓을 긋는다. 칠해야보임
context2.fill(); // 선을 칠한다.
context2.beginPath();
context2.moveTo( 130, 60) ;
context2.lineTo( 130, 110 );
context2.lineTo( 60, 110 );
context2.lineTo( 130, 60 );
context2.stroke();
// context2.fill(); // 채울영역이 있으면 면을 칠한다.
context2.closePath(); // Path의 선을 끝내는

context.fillStyle = 'yellow';
context.beginPath();
context.moveTo(50, 50);
context.lineTo(75, 75);
context.lineTo(75, 25);
context.fill();

function radian(각도){
    return 각도 * Math.PI / 180;
}

cb = document.querySelector('.canvas3');
ctx = cb.getContext('2d');

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 70, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();

const canvas = document.querySelector("canvas4");
const ctx = canvas.getContext("2d");
let raf;

const ball = {
  x: 100,
  y: 100,
  vx: 5,
  vy: 2,
  radius: 25,
  color: "blue",
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  },
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  ball.x += ball.vx;
  ball.y += ball.vy;
  raf = window.requestAnimationFrame(draw);
}

canvas.addEventListener("mouseover", (e) => {
  raf = window.requestAnimationFrame(draw);
});

canvas.addEventListener("mouseout", (e) => {
  window.cancelAnimationFrame(raf);
});

ball.draw();