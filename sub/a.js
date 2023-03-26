// nav btn class 탈부착
document.querySelector('.navbar-toggler').addEventListener('click', function(){
    document.querySelector('.list-group').classList.toggle('show');
});
// modal class 탈부착
document.querySelector('.btn').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.add('showo');
});
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.black-bg').classList.remove('showo');
});
// 전송버튼 클릭시 첫째 <input>에 입력된 값이 공백이면 아이디 입력하라고 알림을 띄워봅시다.
// 전송버튼 클릭시 아이디랑 패스워드 둘 다 공백검사하려면?
// 전송버튼 클릭시 입력한 비번이 6자 미만이면 알림띄우기
document.querySelector('form').addEventListener('submit', function(e){
    let emails = document.querySelector('#email').value
    let pass = document.querySelector('#pw').value
    if (emails == '' && pass == '') {
        alert('아이디 패스워드 둘다 공백임');
        e.preventDefault();
    } else if ( emails == '') {
        alert('아이디공백임')
        e.preventDefault();
    } else if ( pass == '') {
        alert('비번공백임')
        e.preventDefault();
    }
    if ( pass.length < 6) {
        alert('비번 6자미만임')
        e.preventDefault();
    }
});

function 삼육구게임(num) {
    if (num % 9 == 0) {
        console.log('박수x2')
    } else if (num % 3 == 0) {
        console.log('박수')
    } else {
        console.log('통과')
    }
};
// 삼육구게임(9)

function 합격했냐(a, b) {
    if ( a < 40 || b < 40 ) {
        console.log('과락')
    } else if ( a + b >= 120 ) {
        console.log('합격')
    } else {
        console.log('불합격')
    }
    if (a > 100 || b > 100 ) {
        alert('100사이만 가능')
        e.preventDefault();
    }
};
// 합격했냐(50, 50);
let count = 0;
document.querySelector('.badge').addEventListener('click', function(){
    count++;
    if (count % 2 == 0) {
        document.querySelector('.badge').innerHTML = 'Light 🔄';
    } else {
        document.querySelector('.badge').innerHTML = 'Dark 🔄';
    }
});