<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="/design/jc-icon.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Grand+Hotel|Nunito:400,700|Roboto+Slab" rel="stylesheet">
    <script defer src="https://use.fontawesome.com/releases/v5.0.9/js/all.js" integrity="sha384-8iPTk2s/jMVj81dnzb/iFR2sdA7u06vHJyyLlAd4snFpCl/SnyUjRrbdJsw1pGIl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="portfolio.css">
    <link href="lightbox/src/css/lightbox.css" rel="stylesheet">
    <link rel="stylesheet" href="gsap_testing/gsap.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>Joey Carlino's Portfolio</title>
</head>

<body>
    <header class="lgreen tdgreen">
            <a href="/index.php" id="headerLogo"><img src="/svg/jc_logo_color.svg" alt="home"></a>
        <h1>Thanks for checking out my<br>"secret portfolio"</h1>
        <p>-Joey Carlino</p>
    </header>

    <div class="main tmgreen">
        <div id="graphic">
            <h2>Graphic Design Stuff</h2>
            <p class="tcenter">Click on an image to see a short description.</p>
            <div class="gallery">
                <a href="art/avocado_logo.jpg" data-lightbox="gallery" data-alt="Avocado" data-title="An avocado logo I made for fun after seeing a restaurant sign."><img src="art/thumb_avocado_logo.jpg" alt="Avocado"></a>

                <a href="art/beverage-01.png" data-lightbox="gallery" data-alt="Eyeball Martini" data-title="This was made for a vector art challenge, the theme was beverage."><img src="art/thumb_beverage.jpg" alt="Eyeball Martini"></a>

                <a href="art/music-01.png" data-lightbox="gallery" data-alt="Boombox" data-title="This was also made for a vector art challenge. The theme was music."><img src="art/thumb_music.jpg" alt="Boombox"></a>

                <a href="art/CALDERA.jpg" data-lightbox="gallery" data-alt="Caldera" data-title="A logo I made for Caldera, which is just a band name I thought was neat."><img src="art/thumb_CALDERA.jpg" alt="Caldera"></a>

                <a href="art/cloud.jpg" data-lightbox="gallery" data-alt="Angry Cloud" data-title="This is an angry cloud that I designed for a set of pins called 'Angry Nature'"><img src="art/thumb_cloud.jpg" alt="Angry Cloud"></a>

                <a href="art/ghost.jpg" data-lightbox="gallery" data-alt="Ghost" data-title="This is another pin design. I drew the ghost with markers and made the background digitally."><img src="art/thumb_ghost.jpg" alt="Ghost"></a>
            </div>
        </div>
        <div id="web">
            <h2>Web Development and Design</h2>
            <div id="site1">
                <a href="http://joeycarlino.com/" target="_blank">
                    <img src="art/joeycarlino.png" alt="Joey Carlino's Website">
                </a>
                <h3 class="tcenter">
                    <a href="http://joeycarlino.com/" target="_blank">Joeycarlino.com</a>
                </h3>
                <p>This is my Web Development site. I used HTML, CSS, and JavaScript to code it from scratch, including the mobile menu interactions. Some animations were made using GSAP, the JavaScript library.
                </p>
            </div>
            <div id="site2">
                <a href="http://sample.joeycarlino.com/" target="_blank">
                    <img src="art/streetEats.jpg" alt="Street Eats of Orleans Mock-up">
                </a>
                <h3 class="tcenter">
                    <a href="http://sample.joeycarlino.com/" target="_blank">Street Eats of Orleans</a>
                </h3>
                <p>This is a website mock-up made for a Cape Cod food truck. I'm currently in the process of developing the actual website. The mock-ups were made with Adobe XD. Though, it contains some placeholder images and text (for lack of delivered content), it helps the client understand the look and feel of their site.</p>
            </div>
            <div id="site3">
                <a href="http://rbspnk.com" target="_blank">
                    <img src="art/spunkyLogo.png" alt="Spunky Buttons">
                </a>
                <p>Spunky Buttons is the website where I sell my pins. It was made with Wordpress and custom CSS.</p>
            </div>
            <div id="site4">
                <h3 class="tcenter">Web Animations</h3>
                <p>All of these were made with only HTML, CSS, and in some cases SVG graphics and GSAP.</p>
                <p class="tcenter"><a href="https://codepen.io/Robospunk" target="_blank">Click here to check out my CodePen.</a></p>

                <div class="three">
                    <div class="arm">
                        <div class="forewhole">
                            <div class="hand">
                                <img src="art/hand.svg" alt="">
                            </div>
                            <div class="fore"></div>
                        </div>
                        <div class="bicep"></div>
                    </div>
                    <div class="bod">
                        <div class="face tlblue">
                            <p>._.</p>
                        </div>
                    </div>
                </div>

                <div class="two">
                    <div class="rods">
                        <div class="toprod"></div>
                        <div class="botrod"></div>
                    </div>
                </div>
                
                <div class="responsive">
                    <div class="dgreen outside center">

                        <div class="lblue screen">
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                            <div class="mblue content"></div>
                        </div>
            
                        <div class="mgreen button"></div>
                        <div class="stand dgreen"></div>
                    </div>
                </div>

                <div class="cubeContainer">
                    <div class="cube">
                      <div class="front cubeCenter">
                        <div class="round"></div>
                      </div>
                      
                      <div class="back cubeCenter">
                        <div class="round"></div>
                        <div class="round"></div>
                      </div>
                      
                      <div class="top cubeCenter">
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                      </div>
                      
                      <div class="bottom cubeCenter">
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                      </div>
                      
                      <div class="left cubeCenter">
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                      </div>
                      
                      <div class="right cubeCenter">
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                        <div class="round"></div>
                      </div>
                      
                    </div>
                  </div>

                <div class="wrapper">
                    
                    <div class="bg">
                        <div class="spin"></div>
                    </div>

                    <div class="bg">
                        <div class="spin2"></div>
                        <div class="spin21"></div>
                        <div class="spin22"></div>
                        <div class="spin23"></div>
                        <div class="spin24"></div>
                        <div class="spin25"></div>
                        <div class="spin26"></div>
                        <div class="spin27"></div>
                    </div>

                    <div class="bg">
                        <div class="pulse"></div>
                        <div class="pulse2"></div>
                        <div class="pulse3"></div>
                        <div class="pulse4"></div>
                    </div>

                    <div class="bg">
                        <div class="pulsespin"></div>
                        <div class="pulsespin2"></div>
                        <div class="pulsespin3"></div>
                        <div class="pulsespin4"></div>
                    </div>

                    <div class="bg">
                        <div class="pulsespin21"></div>
                        <div class="pulsespin22"></div>
                        <div class="pulsespin23"></div>
                        <div class="pulsespin24"></div>
                    </div>

                    <div class="bg">
                        <div class="cradle"></div>
                        <div class="cradle2"></div>
                    </div>
                
                <div class="bg">
                        <div class="dot1"></div>
                        <div class="dot2"></div>
                <div class="dot3"></div>
                    </div>
                
                
                <div class="bg2">
                <div class="dots"></div>
                <div class="pacman">
                    <div class="eat"></div>
                    <div class="pactop"></div>
                    <div class="pacbot"></div>
                </div>
                    </div>
                

                </div>
            </div>
        </div>
    </div>

    <footer class="dblue tlgreen">
            <div id="footerMenu">
                <a href="/index.php#web">Services</a>
                <a href="/index.php#skills">Skills</a>
                <!-- <a href="index.php#testimonials">Testimonials</a> -->
                <a href="/projects.php">Projects</a>
                <a href="/contact.php">Contact</a>
                <a href="/index.php#about">About</a>
            </div>
            <a href="https://goo.gl/forms/oFs7nOpl3RQRiCF02" target="_blank" id="footercta" class="tmblue">Order a website?</a>
            <a href="/index.php" id="footerLogo"><img src="/svg/jc_logo_color.svg" alt="home"></a>
            <div id="social">
                <a href="https://codepen.io/Robospunk/" target="_blank"><i class="fab fa-codepen"></i></a>
                <a href="https://www.linkedin.com/in/joey-carlino/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/robospunk/?hl=en" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/user/ninjaGnome92" target="_blank"><i class="fab fa-youtube"></i></a>
            </div>
            <p id="copyright" class="tcenter center tmgreen">&copy; <?php echo date('Y'); ?>, Joseph A. Carlino</p>
        </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>
    <script src="script.js"></script>
    <script src="lightbox/src/js/lightbox.js"></script>

</body>
</html>