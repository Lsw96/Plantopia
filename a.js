// $(window).on('scroll', function(){
//     var offset_text = $('.test_box').offset().top;
//     var position_text = $('.test_box').position().top;
//     console.log('test offset top');
//     console.log('test position top')
// });

function addSection2() {
    var box = document.querySelector('.test2');
    var boxPosition = box.getBoundingClientRect().top;
    console.log(boxPosition);
    

    if(boxPosition < -200){
        // 박스 원상태해주세요
    } else if(boxPosition > 200) {
        // 박스 줄여주세요
    } else {
        
    }
}

window.onscroll = function (){
    addSection2();
};