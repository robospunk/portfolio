var hamburger = document.getElementById("hamburger");
var menu = document.getElementById('menu');
var nav = document.getElementById("nav");
var position = 0;

menu.style.transform = "rotateX(90deg) translateY(70px) perspective(500px)";

function show() {
    if (menu.style.transform === "rotateX(90deg) translateY(70px) perspective(500px)") {
        menu.classList.add('show');
        hamburger.innerText = "✖";
        menu.style.transform = "rotateX(0deg)";
    } else {
        hamburger.innerText = "☰";
        menu.classList.remove('show');
        menu.style.transform = "rotateX(90deg) translateY(70px) perspective(500px)";
    }
}



function navSolid() {
    var ypos = window.pageYOffset;
    if (ypos > 600) {
        nav.classList.add("solid");
        nav.style.height = '70px';
        menu.style.top = '70px'
        document.querySelector("#nav h1").innerHTML = "A Pizza My Mind";
        document.querySelector("#nav h1").style.fontSize = '1.7rem';
        document.querySelector("#nav svg").style.height = '50px';

        menu.style.opacity = '1';

        // function hideNav() {
            if (position < window.pageYOffset) {
                console.log("down");
                position = window.pageYOffset;
                nav.classList.add("goUp")
                menu.style.transform = "rotateX(90deg) translateY(-70px) perspective(500px)";
                hamburger.innerText = "☰";
                menu.classList.remove('show');
            } else {
                console.log("up");
                position = window.pageYOffset;
                nav.classList.remove("goUp")
                menu.style.transform = "rotateX(90deg) translateY(70px) perspective(500px)";
                hamburger.innerText = "☰";
                menu.classList.remove('show');
            }

    } else {
        nav.classList.remove("solid");
        nav.style.height = '124px';
        menu.style.top = '124px'
        document.querySelector("#nav h1").innerHTML = "A Pizza<br>My Mind";
        document.querySelector("#nav h1").style.fontSize = '2rem';
        document.querySelector("#nav svg").style.height = '80px';

        menu.style.opacity = '.7';
    }
}



// Event listeners below -------------------------------

hamburger.addEventListener("click", show);

window.addEventListener("scroll", navSolid);


// link fixing

// window.addEventListener("hashchange", function() {
//     window.scrollTo(window.scrollX, window.scrollY - 70);
// });

var links = document.querySelectorAll('a[href*="#"]');

for (var i = 0; i < links.length; i ++) {
    links[i].addEventListener('click', function() {
        console.log("scrolling in a sec");
        window.setTimeout(function() {
            window.scrollTo(window.scrollX, window.scrollY - 70)
        }, 0);
    });
}
