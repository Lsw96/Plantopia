// let observer = new IntersectionObserver((e)=>{
//     e.forEach((leftDoor)=>{
//         if(leftDoor.intersectionRatio > 0){
//             leftDoor.target.style.left = -35 + "%";
//         } else {
//             leftDoor.target.style.left = 5 + "%";
//         }
//     });
// });
// let observers = new IntersectionObserver((e)=>{
//     e.forEach((leftDoor)=>{
//         if(leftDoor.intersectionRatio > 0){
//             leftDoor.target.style.right = -35 + "%";
//         } else {
//             leftDoor.target.style.right = 5 + "%";
//         }
//     });
// });
// let leftDoor = document.querySelectorAll('img')
// let rightDoor = document.querySelectorAll('.elevator > img')
// observer.observe(leftDoor[17])
// observers.observe(rightDoor[3])