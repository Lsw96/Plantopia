window.addEventListener('scroll', ()=>{
    var scrolls = parseInt(window.scrollY);
    console.log(scrolls);
    // 1F
    if( scrolls > 1199) {
        document.querySelectorAll('#left-door')[0].style.left = "0%";
        document.querySelectorAll('#right-door')[0].style.right = "-100%";
    } else if ( scrolls > 300) {
        document.querySelectorAll('#left-door')[0].style.left = "-40%";
        document.querySelectorAll('#right-door')[0].style.right = "-140%";
    }
    else {
        document.querySelectorAll('#left-door')[0].style.left = "0%";
        document.querySelectorAll('#right-door')[0].style.right = "-100%";
    }
    // 2F
    if( scrolls > 6000) {
        document.querySelectorAll('#left-door')[1].style.left = "0%";
        document.querySelectorAll('#right-door')[1].style.right = "-100%";
    } else if ( scrolls > 4900) {
        document.querySelectorAll('#left-door')[1].style.left = "-40%";
        document.querySelectorAll('#right-door')[1].style.right = "-140%";
    }
    else {
        document.querySelectorAll('#left-door')[1].style.left = "0%";
        document.querySelectorAll('#right-door')[1].style.right = "-100%";
    }
    // 3F
    if( scrolls > 9700) {
        document.querySelectorAll('#left-door')[2].style.left = "0%";
        document.querySelectorAll('#right-door')[2].style.right = "-100%";
    } else if ( scrolls > 8600) {
        document.querySelectorAll('#left-door')[2].style.left = "-40%";
        document.querySelectorAll('#right-door')[2].style.right = "-140%";
    }
    else {
        document.querySelectorAll('#left-door')[2].style.left = "0%";
        document.querySelectorAll('#right-door')[2].style.right = "-100%";
    }
});