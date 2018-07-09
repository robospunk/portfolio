// headercta

var tlHeader = new TimelineMax();

tlHeader.set("#thing", {opacity: 0, scale: .1, transformOrigin: "center"});
tlHeader.set("#wow", {opacity: 0, scale: .1, transformOrigin: "center"});
tlHeader.set("#bubble", {opacity: 0, y: "-100em"});

tlHeader.to("#bubble", 1, {y: 0, opacity: 1, ease: Bounce.easeOut, delay: 1})
   .to("#thing", .5, {opacity: 1, scale: 1, ease: Expo.easeOut, delay: .5}, "thing appears")
   .to("#youHandL", .2, {transformOrigin: "top right", rotation: 90, y: "-10em", delay: .5}, "thing appears+=.3")
   .to("#youHandR", .2, {transformOrigin: "top left", rotation: -110, y: "-10em", delay: .5}, "thing appears+=.3")
  .to("#youHandL", .2, {y: "+=20em", ease: Power1.easeInOut}, "eyes up")
  .to("#youHandR", .2, {y: "+=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .2, {y: "-=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "-=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .2, {y: "+=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "+=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .2, {y: "-=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "-=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .2, {y: "+=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "+=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .2, {y: "-=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "-=20em", ease: Power1.easeInOut}, "-=.2")

  .to("#youHandL", .2, {y: "+=20em", ease: Power1.easeInOut}, "thinking")
  .to("#youHandR", .2, {y: "+=20em", ease: Power1.easeInOut}, "thinking")
  .to("#youHandL", .2, {y: "-=20em", ease: Power1.easeInOut})
  .to("#youHandR", .2, {y: "-=20em", ease: Power1.easeInOut}, "-=.2")
  .to("#youHandL", .4, {y: 0, x: 0, rotation: 0, ease: Power1.easeInOut})
  .to("#youHandR", .4, {y: 0, x: 0, rotation: 0, ease: Power1.easeInOut}, "-=.4")

  .to("#browL", .3, {y: "-10em"}, "thinking")
  .to("#browR", .3, {y: "5em"}, "thinking")
  .to("#meHandL", .5, {transformOrigin: "top right", rotation: 130, x: "-10em", y: "-8em"}, "thinking")
  .to("#meHandR", .5, {transformOrigin: "top left", rotation: 40, x: "6em"}, "thinking")
  .to("#meHandL", .2, {rotation: "-=30", ease: Power1.easeInOut})
  .to("#meHandL", .2, {rotation: "+=30", ease: Power1.easeInOut})
  .to("#meHandL", .2, {rotation: "-=30", ease: Power1.easeInOut})
  .to("#meHandL", .2, {rotation: "+=30", ease: Power1.easeInOut})
  .to("#meHandL", .2, {rotation: "-=30", ease: Power1.easeInOut})
  .to("#meHandL", .2, {rotation: "+=30", ease: Power1.easeInOut})
  .to("#browL", .2, {y: "-15em", delay: .5, ease: Power1.easeInOut}, "ah ha")
  .to("#browR", .2, {y: "-15em", delay: .5, ease: Power1.easeInOut}, "ah ha")

  .to("#meHandL", .5, {x: "-120em", y: "-80em", rotation: 100, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#meHandR", .5, {x: 0, y: "-20em", rotation: -30, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#meBody", .5, {transformOrigin: "bottom", rotation: -5, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#glasses", .5, {x: "-15em", y: "-10em", rotation: 5, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#browL", .5, {x: "-15em", y: "-25em", rotation: 5, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#browR", .5, {x: "-15em", y: "-15em", rotation: 5, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#meLegR", .5, {transformOrigin: "top", rotation: -35, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#meLegL", .5, {transformOrigin: "bottom", rotation: -5, delay: .5, ease: Power1.easeInOut}, "reaching")
  .to("#youEyes", .5, {y: "-20em" ,delay: .5, ease: Power1.easeInOut}, "reaching")

  .to("#meHandL", .1, {x: "-120em", y: "-70em", rotation: 100, ease: Power1.easeInOut}, "pulling")
  .to("#thing", .1, {y: "10em", ease: Power1.easeInOut}, "-=.1")
  .to("#meHandL", .1, {x: "-120em", y: "-80em", rotation: 100, ease: Power1.easeInOut})
  .to("#thing", .1, {y: 0, ease: Power1.easeInOut}, "-=.1")
  .to("#meHandL", .1, {x: "-120em", y: "-70em", rotation: 100, ease: Power1.easeInOut})
  .to("#thing", .1, {y: "10em", ease: Power1.easeInOut}, "-=.1")
  .to("#meHandL", .1, {x: "-120em", y: "-80em", rotation: 100, ease: Power1.easeInOut})
  .to("#thing", .1, {y: 0, ease: Power1.easeInOut}, "-=.1")
  .to("#meHandL", 1, {x: "-120em", y: "-70em", rotation: 100, ease: Power1.easeInOut})
  .to("#thing", 1, {y: "10em", ease: Power1.easeInOut}, "-=1")

  .to("#meHandL", .2, {x: "-20em", y: "40em", rotation: 40, ease: Power1.easeOut}, "yank")
  .to("#meHandR", .2, {x: 0, y: 0, rotation: 0, ease: Power1.easeOut}, "yank")
  .to("#thing", .2, {x: "65em", y: "180em", ease: Power1.easeOut}, "yank")
  .to("#meBody", .2, {rotation: 0, ease: Power1.easeInOut}, "yank")
  .to("#browL", .2, {rotation: 0, x: 0, y: "35em", ease: Power1.easeInOut}, "yank")
  .to("#browR", .2, {rotation: 0, x: 0, y: "35em", ease: Power1.easeInOut}, "yank")
  .to("#glasses", .2, {rotation: 0, x: 0, y: "35em", ease: Power1.easeInOut}, "yank")
  .to("#meLegR", .2, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "yank")
  .to("#meLegL", .2, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "yank")
  .to("#youEyes", .2, {y: "20em", ease: Power1.easeInOut}, "yank")
  .to("#bubble", .5, {opacity: 0}, "yank+=.3")

  .to("#glasses", .2, {x: 0, y: 0, ease: Power1.easeInOut, delay: .3})
  .to("#browL", .2, {x: 0, y: 0, ease: Power1.easeInOut}, "-=.2")
  .to("#browR", .2, {x: 0, y: 0, ease: Power1.easeInOut}, "-=.2")
  .to("#youEyes", .2, {y: 0, ease: Power1.easeInOut})
  .to("#browL", .2, {y: "-20em", ease: Power1.easeInOut, delay: .5})
  .to("#browR", .2, {y: "-20em", ease: Power1.easeInOut}, "-=.2")
  .to("#browL", .2, {y: 0, ease: Power1.easeInOut})
  .to("#browR", .2, {y: 0, ease: Power1.easeInOut}, "-=.2")
  .to("#browL", .2, {y: "-20em", ease: Power1.easeInOut})
  .to("#browR", .2, {y: "-20em", ease: Power1.easeInOut}, "-=.2")
  .to("#browL", .2, {y: 0, ease: Power1.easeInOut})
  .to("#browR", .2, {y: 0, ease: Power1.easeInOut}, "-=.2")

  .to("#meHandL", .2, {delay: .3})
  .to("#thing", .5, {x: "15", y: "180em", ease: Power1.easeInOut}, "hand over")
  .to("#meHandL", .5, {x: "-70em", y: "40em", rotation: 40, ease: Power1.easeInOut}, "hand over")
  .to("#youEyes", .3, {y: "20em", ease: Power1.easeInOut}, "hand over")
  .to("#youHandR", .3, {rotation: -40, x: "140em", ease: Power1.easeInOut})
  .to("#youHandL", .3, {rotation: -90, x: "240em", ease: Power1.easeInOut}, "-=.3")
  .to("#thing", .5, {x: "-75", y: "180em", ease: Power1.easeInOut})
  .to("#youHandR", .5, {rotation: -40, x: "50em", ease: Power1.easeInOut}, "-=.5")
  .to("#youHandL", .5, {rotation: -90, x: "150em", ease: Power1.easeInOut}, "-=.5")
  .to("#meHandL", .5, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "-=.5")

  .to("#youEyes", .3, {y: 0, ease: Power1.easeInOut, delay: .3})
  .set("#bubble", {scale: .1})
  .to("#bubble", 1, {scale: 1, opacity: 1, ease: Bounce.easeOut})
  .set("#wow", {scale: .1})
  .to("#wow", .5, {scale: 1, opacity: 1, ease: Expo.easeOut, delay: .5})

  .to("#me", .1, {delay: 2})

  .to("#youHandL", 1, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "reset")
  .to("#youHandR", 1, {rotation: 0, x: 0, y: 0, ease: Power1.easeInOut}, "reset")
  .to("#thing", 1, {opacity: 0, scaleX: .1, ease: Power1.easeInOut}, "reset")
  .to("#wow", 1, {opacity: 0, scaleX: .1, ease: Power1.easeInOut}, "reset")
  .to("#bubble", 1, {opacity: 0, ease: Power1.easeInOut}, "reset");


tlHeader.repeat(-1);
// tlHeader.duration(4);



// monster

var tl = new TimelineMax();


// var head = document.getElementById("monsterHead");
// var face = document.getElementById("monsterFace");
// var brow = document.getElementById("monsterBrow");
// var eye = document.getElementById("monsterEye");
// var pupil = documnet.getElementById("monsterPupil");
// var mouth = documnet.getElementById("monsterMouth");

tl.set("#monsterHead", {css:{left: "-19%", top: "+=5%"}});
tl.set("#monsterFace", {x: "30%", scaleX: 0.8});

tl.to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "100%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", y: "60%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "90%", y: "-20%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", y: "60%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "90%", y: "-20%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: 0, y: 0, ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", y: "60%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})

    .to("#monsterFace", 1, {x: "0%", scale: 1, ease: Power1.easeInOut, delay: 1})
    .to("#monsterPupil", 2, {x: "0%", y: "0%", ease: Power1.easeInOut}, "frown")
    .to("#monsterBrow", 2, {y: "+=5", ease: Power1.easeInOut}, "frown")

    .to("#monsterMouth", 3, {height: "1.8em", borderRadius: "5em 5em 10em 10em", ease: Power1.easeInOut})


    .to("#monsterBrow", 2, {y: "-=5", ease: Power1.easeInOut, delay: 3}, "unfrown")
    .to("#monsterPupil", 2, {x: "50%", y: "0%", ease: Power1.easeInOut, delay: 3}, "unfrown")
    .to("#monsterFace", 2, {x: "30%", scaleX: 0.8, ease: Power1.easeInOut, delay: 3}, "unfrown")

    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "90%", y: "-20%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut})
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "-=5%"}, ease: Power1.easeInOut})
    .to("#monsterPupil", 1, {x: "-80%", y: "60%", ease: Power1.easeInOut}, "-=1")
    .to("#monsterHead", 1, {css:{left: "+=5%", top: "+=5%"}, ease: Power1.easeInOut});

tl.repeat(-1);
tl.duration(15);



// bird

var tlBird = new TimelineMax();

tlBird.set(".wingRight", {x: "-1em", rotationY: 180, rotation: 20});
tlBird.set(".wingLeft", {rotation: -20});
tlBird.set(".wing1", {x: "1em"});

tlBird.to(".wingRight", 1, {rotation: -50, transformOrigin: "right", ease: Power1.easeInOut}, "up")
    .to(".wingLeft", 1, {rotation: 50, transformOrigin: "right", ease: Power1.easeInOut}, "up")
    .to(".wing1", .5, {rotation: -75, transformOrigin: "right", ease: Power1.easeInOut}, "up")
    .to("#bird", .7, {y: "10em", ease: Power1.easeInOut}, "up+=.3")
    .to(".wingRight", 1, {rotation: 20, ease: Power1.easeInOut}, "down")
    .to(".wingLeft", 1, {rotation: -20, ease: Power1.easeInOut}, "down")
    .to(".wing1", 1, {rotation: 0, ease: Power1.easeInOut}, "down-=.5")
    .to("#bird", 1, {y: "0em", ease: Power1.easeInOut}, "down");


tlBird.repeat(-1);
tlBird.duration(2);
