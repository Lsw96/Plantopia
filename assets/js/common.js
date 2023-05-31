let observer = new IntersectionObserver((e)=>{
    //감시중 박스가 화면에 등장하면 여기 코드 실행해줌
    console.log(e)
    e.forEach((박스)=>{
        박스.targer.style.
    });
});
const leftDoor = document.querySelector('#left-door');
const rightDoor = document.querySelector('#right-door');

observer.observe(leftDoor) // html요소가 화면에 등장,사라지는지 감시해줌
observer.observe(rightDoor) // html요소가 화면에 등장,사라지는지 감시해줌