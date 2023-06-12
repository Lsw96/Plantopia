gsap.registerPlugin(ScrollTrigger);
// gsap.to(대상, {
//     scrollTrigger: {
//         trigger: "대상", // 스크린시작요소감지
//         pin: true, // 스크린고정
//         start: '요소시작 스크린시작점',
//         end: '요소끝 스크린끝',
//         x: 100, // x축으로 100만큼
//         y: 100, // y축으로 100만큼
//         opacity: 1,
//         scrub: 1, // 다음 요소 따라잡는데 1초
//         duration: 1, // 애니메이션 진행속도
//         delay: 1, // 1초 후 다음 애니메이션 진행
//         amount: 1, // 
//         stagger: 1,
//         stagger:{each: 1, from: "center", grid: 'auto', ease: 'power2.inOut', repeat: -1},
//         repeat: -1,
//         repeatDelay: 1,
//         toggleAction: 'play none none none', 
//         markers: true
//     }
// })

// ONE DAY CLASS
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.service-oneday',
        pin: true,
        scrub: true,
        start : "top 10%",
        end : "bottom -20%"
    }
});
tl.fromTo('.slide', { scale: .75, opacity: 0 }, { scale: 1, opacity: 1 })
.fromTo('figure img:nth-of-type(2)', { xPercent: -1500, yPercent: 0, scale: 0, opacity: .5 }, { xPercent: 50, yPercent: 50, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(3)', { xPercent: 0, yPercent: 150, scale: 0, opacity: .5 }, { xPercent: 0, yPercent: 0, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(4)', { xPercent: -500, yPercent: -150, scale: 0, opacity: .5 }, { xPercent: 50, yPercent: 150, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(5)', { xPercent: -500, yPercent: 150, scale: 0, opacity: .5 }, { xPercent: 40, yPercent: -50, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(6)', { xPercent: 300, yPercent: 170, scale: 0, opacity: .5 }, { xPercent: -150, yPercent: -150, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(7)', { xPercent: 1000, yPercent: 60, scale: 0, opacity: .5 }, { xPercent: -100, yPercent: -50, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(8)', { xPercent: 400, yPercent: -110, scale: 0, opacity: .5 }, { xPercent: -200, yPercent: 80, scale: 1, opacity: 1 } )
.fromTo('figure img:nth-of-type(9)', { xPercent: -900, yPercent: -450, scale: 0, opacity: .5 }, { xPercent: -20, yPercent: -30, scale: 1, opacity: 1 } );

// APP DESIGN
let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.slides',
        pin: true,
        scrub: true,
        start: 'top top',
        end: 'bottom -25%',
        duration: 5,    
        stagger: 1,
        amount: 1.25,
        instentRender: true
    }
});
tl1.fromTo('.slides > h1', { scale: .75, opacity: 0 }, { scale: 1, opacity: 1 })
.fromTo('.slides > h3', { scale: .75, opacity: 0 }, { scale: 1, opacity: 1 })
.fromTo('#row01', { xPercent: 120, right:'-10%', scale: 0.5, opacity: 0 }, { zIndex: 1, left: '0%', xPercent: 0, scale: .85, opacity: 1 })
.fromTo('#row02', { xPercent: 120, right:'-10%', scale: 0.5, opacity: 0.25 }, { zIndex: 2, left: '16%', xPercent: 15, scale: .85, opacity: 1 })
.fromTo('#row03', { xPercent: 120, right:'-10%', scale: 0.5, opacity: 0.5 }, { zIndex: 3, left: '32%', xPercent: 32, scale: .85, opacity: 1 })
.fromTo('#row04', { xPercent: 120, right:'-10%', scale: 0.5, opacity: 0.75 }, { zIndex: 4, left:'48%', xPercent: 48, scale: .85, opacity: 1 })
.fromTo('#row05', { xPercent: 120, right:'-10%', scale: 0.5, opacity: 1 }, { zIndex: 5, left:'64%', xPercent: 64, scale: .85, opacity: 1 });

// 페이지 프로그래스바
function progressBar(){
    const scrollTop = document.querySelector("html").scrollTop;
    const scrollHeight = document.querySelector('html').scrollHeight;
    const clientHeight = document.querySelector('html').clientHeight;
    const progress = (((scrollTop + clientHeight) / scrollHeight) * 100); // 백분율 환산
    document.querySelector(".progress-bar").style.width = progress + "%";
};
// 엘리베이터 애니메이션
function elevator(index_number){
    let numbers = parseInt(index_number);
    const ele = document.querySelectorAll('.elevator')[numbers];
    let leftDoor = document.querySelectorAll('.left-door')[numbers];
    let rightDoor = document.querySelectorAll('.right-door')[numbers];
    const elePosition = ele.getBoundingClientRect().top; // 이 요소가 브라우저 상단에 얼마나 떨어져있는지에 대한 양수,음수 측정 함수 

    if (elePosition < -450) {
        leftDoor.style.left = "0";
        rightDoor.style.right = "-100%";
    }else if (elePosition <= 150) {
        leftDoor.style.left = "-40%";
        rightDoor.style.right = "-140%";
    }  
    else {
        leftDoor.style.left = "0";
        rightDoor.style.right = "-100%";
    }
};

// 1F OVERVIEW 그래프 이미지
function graphImg(){
    const pjBox = document.querySelector('.pj-content');
    let graph1 = document.querySelector('.graph1');
    let graph2 = document.querySelector('.graph2');
    const graphPosition = pjBox.getBoundingClientRect().top;
    if( graphPosition < -181){
        graph1.style.opacity = '0';
        graph1.style.top = '50px';
        graph2.style.opacity = '0';
        graph2.style.top = '50px';
    } else if (graphPosition <= 554) {
        graph1.style.opacity = '1';
        graph1.style.top = '0';
        graph2.style.opacity = '1';
        graph2.style.top = '0';
    } else {
        graph1.style.opacity = '0';
        graph1.style.top = '50px';
        graph2.style.opacity = '0';
        graph2.style.top = '50px';
    }
};

// 1F USER EXAMPLE 
function showUser(index_number){
    let numbers = parseInt(index_number);
    const userBox = document.querySelector('.box');
    let user = document.querySelectorAll('.pj-user-box')[numbers];
    const userPosition = userBox.getBoundingClientRect().top;

    if (userPosition < -157) {
        user.style.opacity = "0";
        user.style.top = "50px";
    }else if (userPosition <= 658) {
        user.style.opacity = "1";
        user.style.top = "0";
    }  
    else {
        user.style.opacity = "0";
        user.style.top = "50px";
    }
};

// 2F WIREFRAME
function wireFrame01(index_number){
    let numbers = parseInt(index_number);
    let left = [100, 350, 600, 850, 1100];
    const frameBox = document.querySelector('.frame-container');
    const framePosition = frameBox.getBoundingClientRect().top;
    let frame01 = document.querySelectorAll('.frame > img')[numbers];

    if (framePosition < 124) {
        frame01.style.left = left[numbers] + "px";
        frame01.style.opacity = "1";
    } else {
        frame01.style.left = "0";
        frame01.style.opacity = "0";
    }
};
function wireFrame02(index_number){
    let numbers = parseInt(index_number);
    let right = [1100, 850, 600, 350, 100];
    const frameBox = document.querySelector('.frame-container');
    const framePosition = frameBox.getBoundingClientRect().top;
    let frame02 = document.querySelectorAll('.frames > img')[numbers];

    if (framePosition < -150) {
        frame02.style.right = right[numbers] + "px";
        frame02.style.opacity = "1";
    } else {
        frame02.style.right = "0";
        frame02.style.opacity = "0";
    }
};

// 3F SERVICE PART
function service(){
    const serviceBox = document.querySelector('.service-content-boxs');
    const servicePosition = serviceBox.getBoundingClientRect().top;
    console.log(servicePosition);
    let serviceImg01 = document.querySelectorAll('.service-content-boxs > img')[0];
    let serviceImg02 = document.querySelectorAll('.service-content-boxs > img')[1];
    let serviceImg03 = document.querySelectorAll('.service-content-boxs > img')[2];
    let serviceImg04 = document.querySelectorAll('.service-content-boxs > img')[3];
    let serviceImg05 = document.querySelectorAll('.service-content-boxs > img')[4];
    let serviceImg06 = document.querySelectorAll('.service-content-boxs > img')[5];
    
    if (servicePosition < 557) { 
        serviceImg01.style.top = "-10%";
        serviceImg01.style.opacity = "1";
    } else {
        serviceImg01.style.top = "-20%";
        serviceImg01.style.opacity = "0";
    }
    if (servicePosition < 394) {
        serviceImg02.style.top = "10%";
        serviceImg02.style.opacity = "1";
    } else {
        serviceImg02.style.top = "0%";
        serviceImg02.style.opacity = "0";
    }
    if (servicePosition < 209) {
        serviceImg03.style.top = "30%";
        serviceImg03.style.opacity = "1";
    } else {
        serviceImg03.style.top = "20%";
        serviceImg03.style.opacity = "0";
    }
    if (servicePosition < -90) {
        serviceImg04.style.top = "0";
        serviceImg04.style.opacity = "1";
    } else {
        serviceImg04.style.top = "-10%";
        serviceImg04.style.opacity = "0";
    }
    if (servicePosition < -338) {
        serviceImg05.style.top = "20%";
        serviceImg05.style.opacity = "1";
    } else {
        serviceImg05.style.top = "10%";
        serviceImg05.style.opacity = "0";
    }
    if (servicePosition < -490) {
        serviceImg06.style.top = "40%";
        serviceImg06.style.opacity = "1";
    } else {
        serviceImg06.style.top = "30%";
        serviceImg06.style.opacity = "0";
    }
};

// 3F SERVICE PNG PHONE
function showPhone(){
    const phoneBox = document.querySelectorAll('.service-content-box')[1];
    const phoneBoxPosition = phoneBox.getBoundingClientRect().top;
    let phone = document.querySelector('.home');
    let phoneText = document.querySelector('.home-text');
    if(phoneBoxPosition < 557) {
        phone.style.left = "9%";
        phone.style.opacity = "1";
        phoneText.style.left = "52%";
        phoneText.style.opacity = "1";
    } else {
        phone.style.left = "-21%";
        phone.style.opacity = "0";
        phoneText.style.left = "40%";
        phoneText.style.opacity = "0";
    }
};

// 페이지 스크롤 함수 호출
window.onscroll = function (){
    progressBar();
    elevator(0);
    elevator(1);
    elevator(2);
    graphImg(); 
    showUser(0);
    showUser(1);
    showUser(2);
    wireFrame01(0);
    wireFrame01(1);
    wireFrame01(2);
    wireFrame01(3);
    wireFrame01(4);
    wireFrame02(0);
    wireFrame02(1);
    wireFrame02(2);
    wireFrame02(3);
    wireFrame02(4);
    service();
    showPhone();

};



