document.getElementById('open').addEventListener('click', function(){
    document.getElementById('alert').style.display = 'block';
    document.getElementById('text').innerHTML = "알림창임";
});

document.getElementById('close').addEventListener('click', function(){
    document.getElementById('alert').style.display = "none";
})

document.getElementById('id').addEventListener('click', function(){
    document.getElementById('alert').style.display = "block";
    document.getElementById('text').innerHTML = "아이디입력하세요";
})

document.getElementById('pw').addEventListener('click', function(){
    document.getElementById('alert').style.display = "block";
    document.getElementById('text').innerHTML = "비번입력하세요";
})
// --------------------------------------------------------------------------------5
// var a = window.confirm("정말 삭제하겠습니까.");
// if (a){
//     document.getElementById('pText').innerHTML = "정상적으로 삭제되었습니다.";
// } else {
//     document.getElementById('pText').innerHTML = "기본 명령어 confirm()";
//     document.getElementById('pText').style.fontSize = "30px";
//     document.getElementById('pText').style.fontWeight = "bold";
// }
// --------------------------------------------------------------------------------6
// var result1 = prompt("이름을 입력하세요", "홍길동");
// var result2 = confirm("이름이 " + result1 + " 입니까?");
// if(result2){
//     alert("환영합니다 " + result1 + " 님");
// }
// document.write("환영합니다. " + result1 + " 님");
// console.log(result1 + " 로그인");
// --------------------------------------------------------------------------------7
var borderSize = 10
document.getElementById('plus').addEventListener('click', function(){
    borderSize++;
    document.getElementsByClassName('box')[0].style.border = `${borderSize}px solid #000`;
});
document.getElementById('minus').addEventListener('click', function(){
    borderSize--;
    document.getElementsByClassName('box')[0].style.border = `${borderSize}px solid #000`;
    if (borderSize == 0) {
        document.getElementsByClassName('box')[0].style.border = "1px solid #000";
    }
});
// --------------------------------------------------------------------------------8
var age = 21;
if(age < 20){
    console.log("미성년")
} else if (age < 30){
    console.log("20대")
} else{
    console.log("30대이상")
}
// --------------------------------------------------------------------------------9
