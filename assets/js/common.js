window.addEventListener('scroll', ()=>{

    var scrolls = parseInt(window.scrollY);
    console.log(scrolls);
    const leftDoor = document.querySelectorAll('#left-door');
    const rightDoor = document.querySelectorAll('#right-door');
    // 1F
    if( scrolls > 1199 ) {
        leftDoor[0].style.left = "0%";
        rightDoor[0].style.right = "-100%";
    } else if ( scrolls > 300 ) {
        leftDoor[0].style.left = "-40%";
        rightDoor[0].style.right = "-140%";
    }
    else {
        leftDoor[0].style.left = "0%";
        rightDoor[0].style.right = "-100%";
    }
    // 2F
    if( scrolls > 7000 ) {
        leftDoor[1].style.left = "0%";
        rightDoor[1].style.right = "-100%";
    } else if ( scrolls > 6200 ) {
        leftDoor[1].style.left = "-40%";
        rightDoor[1].style.right = "-140%";
    }
    else {
        leftDoor[1].style.left = "0%";
        rightDoor[1].style.right = "-100%";
    }
    // 3F
    if( scrolls > 9700 ) {
        leftDoor[2].style.left = "0%";
        rightDoor[2].style.right = "-100%";
    } else if ( scrolls > 8600 ) {
        leftDoor[2].style.left = "-40%";
        rightDoor[2].style.right = "-140%";
    }
    else {
        leftDoor[2].style.left = "0%";
        rightDoor[2].style.right = "-100%";
    }
    
    // 1F CONTENT CARD
    user = document.querySelectorAll(".pj-user-box");
    if ( scrolls > 5600 ) {
        user[0].style.top = "50px";
        user[0].style.opacity = "0";
        user[1].style.top = "50px";
        user[1].style.opacity = "0";
        user[2].style.top = "50px";
        user[2].style.opacity = "0";
    } else if ( scrolls > 4900 ) {
        user[0].style.top = "0";
        user[0].style.opacity = "1";
        user[1].style.top = "0";
        user[1].style.opacity = "1";
        user[2].style.top = "0";
        user[2].style.opacity = "1";
    }
    else { 
        user[0].style.top = "50px";
        user[0].style.opacity = "0";
        user[1].style.top = "50px";
        user[1].style.opacity = "0";
        user[2].style.top = "50px";
        user[2].style.opacity = "0";
    }

    // 2F CONTENT WIREFRAME
    const frame = document.querySelectorAll(".frame > img");
    if ( scrolls > 8800 ) {
        frame[0].style.left = "100px";
        frame[0].style.opacity = "1";
        frame[1].style.left = "350px";
        frame[1].style.opacity = "1";
        frame[2].style.left = "600px";
        frame[2].style.opacity = "1";
        frame[3].style.left = "850px";
        frame[3].style.opacity = "1";
        frame[4].style.left = "1100px";
        frame[4].style.opacity = "1";
    } else { 
        frame[1].style.left = "100px";
        frame[1].style.opacity = "0";
        frame[2].style.left = "100px";
        frame[2].style.opacity = "0";
        frame[3].style.left = "100px";
        frame[3].style.opacity = "0";
        frame[4].style.left = "100px";
        frame[4].style.opacity = "0";
    }

    const frames = document.querySelectorAll(".frames > img");
    if ( scrolls > 9600 ) {
        frames[0].style.left = "0";
        frames[0].style.opacity = "1";
        frames[1].style.left = "250px";
        frames[1].style.opacity = "1";
        frames[2].style.left = "500px";
        frames[2].style.opacity = "1";
        frames[3].style.left = "750px";
        frames[3].style.opacity = "1";
        frames[4].style.left = "1000px";
        frames[4].style.opacity = "1";
    } else { 
        frames[1].style.left = "0";
        frames[1].style.opacity = "0";
        frames[2].style.left = "0";
        frames[2].style.opacity = "0";
        frames[3].style.left = "0";
        frames[3].style.opacity = "0";
        frames[4].style.left = "0";
        frames[4].style.opacity = "0";
    }

});