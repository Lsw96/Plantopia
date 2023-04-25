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

var a = window.confirm("정말 삭제하겠습니까.");
if (a){
    document.getElementById('pText').innerHTML = "정상적으로 삭제되었습니다.";
} else {
    document.getElementById('pText').innerHTML = "기본 명령어 confirm()";
    document.getElementById('pText').style.fontSize = "30px";
    document.getElementById('pText').style.fontWeight = "bold";
}