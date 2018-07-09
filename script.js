// Dropdown menu

var bars = document.getElementById("bars");
var ex = document.getElementById("x");
var menu = document.getElementById("menu2");
var main = document. getElementById("main");
var fade = document.getElementById("overlay");


function show() {
        menu.style.right = "0";
        fade.style.visibility = "visible";
        fade.style.opacity = ".3";
}

function hide() {
    menu.style.right = "-155px";
    fade.style.opacity = "0";
    setTimeout(hidden, 300);
    function hidden() {
        fade.style.visibility = "hidden";
    }
}


bars.addEventListener("click", show);
ex.addEventListener("click", hide);
fade.addEventListener("touchstart", hide);
fade.addEventListener("mousedown", hide);

window.addEventListener("resize", hide);
window.addEventListener("scroll", hide);

// Dropdown menu end

// testimonial carousel
var carousel = document.getElementById("carousel");
var left = document.getElementById("carouselLeft");
var right = document.getElementById("carouselRight");
let current = 0;
let time = 3000;
// var timeID = setTimeout(spin, time );

function moveLeft() {
    current -= 90;
    carousel.style.transform = "rotate(" + current + "deg)";
}

function moveRight() {
    current += 90;
    carousel.style.transform = "rotate(" + current + "deg)";
}

// function timeOut() {
//     setTimeout(spin, time );
// }
//
// function freeze() {
//     clearTimeout(timeOut);
//     console.log("Clicked. Now freeze.")
// }
//
// function spin() {
//     if (current <= 270) {
//         current += 90;
//         carousel.style.transform = "rotate(" + current + "deg)";
//         timeOut();
//     } else {
//         current = 0;
//         current += 90;
//         carousel.style.transform = "rotate(" + current + "deg)";
//         timeOut();
//     }
// }


// window.onload = spin;


left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
// carousel.addEventListener("click", freeze);
