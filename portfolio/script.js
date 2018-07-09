var tl = new TimelineMax();
var tlTwo = new TimelineMax();

//spinning rods ========================
tlTwo.to(".toprod", 2, {rotation: 720, ease: Power3.easeInOut})
.to(".rods", 2, {rotation: -360, ease: Power3.easeInOut}, 0);

tlTwo.repeat(-1);


// waving hand ========================
tl.set(".hand", {rotation: 0});

tl.to(".arm", .5, {rotation: 45, ease: Power1.easeInOut}, 0)
.to(".forewhole", .25, {rotation: -45, ease: Power1.easeInOut}, 0)
.to(".forewhole", .25, {rotation: 0, ease: Power1.easeInOut}, .25)
.to(".arm", .25, {rotation: 0, ease: Power1.easeInOut}, .5)

.to(".hand", .25, {rotation: -90, ease: Power1.easeInOut}, 0)
.to(".hand", .25, {rotation: 30, ease: Power1.easeInOut}, .25)
.to(".hand", .25, {rotation: 0, ease: Power1.easeInOut}, .5);

tl.duration(1);
tl.repeat(-1);
