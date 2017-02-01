<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width">
        
        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
        <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/apple-touch-icon-114x114-precomposed.png" sizes="114x114">
        <link rel="apple-touch-icon-precomposed" href="/assets/img/favicon/apple-touch-icon-72x72-precomposed.png" sizes="72x72">
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon/favicon.ico">

        <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
        <script src="/assets/js/build/loader.min.js"></script>

        <link rel="stylesheet" href="/assets/css/loader.css">
    </head>
    <body>
        <!--[if lt IE 10]>
            <p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
        <![endif]-->
        <div class="loader__spinner" id="loading"><?php include("assets/svg/loader.svg"); ?></div>
        <div class="loader__overlay" id="overlay"></div>
        <div class="wrapper">
            
            <div class="wrapper__offcanvas">
                <nav class="offcanvas">
                    <div class="offcanvas__list">
                        <a href="/about.php" class="active">Over Webbiker</a>
                        <a href="/portfolio.php">Portfolio</a>
                        <a href="/services.php">Diensten</a>
                        <a href="/contact.php">Contact</a>
                    </div>
                    <ul class="offcanvas__social">
                        <li><a href="javascript:;"><svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-twitter"></use></svg></a></li>
                        <li><a href="javascript:;"><svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-facebook"></use></svg></a></li>
                        <li><a href="javascript:;"><svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-google-plus"></use></svg></a></li>
                        <li><a href="javascript:;"><svg class="offcanvas__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-linkedin"></use></svg></a></li>
                    </ul>
                </nav>
                <button class="close-button" id="offcanvas-close">Close Menu</button>
            </div>

            <header class="header">
                <nav class="submenu">
                    <div>
                        <ul class="submenu__mobile">
                             <li><a href="javascript:;" id="offcanvas-open"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-menu"></use></svg></a></li>
                        </ul>     
                        <ul class="submenu__social">
                            <li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-twitter"></use></svg></a></li>
                            <li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-facebook"></use></svg></a></li>
                            <li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-google-plus"></use></svg></a></li>
                            <li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-linkedin"></use></svg></a></li>
                        </ul>
                        <ul class="submenu__language">
                            <li><a href="javascript:;" class="active">NL</a></li>
                            <li><a href="javascript:;">EN</a></li>
                        </ul>
                    </div> 
                </nav>
                <nav class="mainmenu">
                    <ul>
                        <li><a href="/about.php" class="active">Over Webbiker</a></li>
                        <li><a href="/portfolio.php">Portfolio</a></li>
                        <li><a href="/" class="logo"><img src="/assets/img/header/logo.svg" alt="Webbiker logo"></a></li>
                        <li><a href="/services.php">Diensten</a></li>
                        <li><a href="/contact.php">Contact</a></li>
                    </ul>
                </nav>
                <div class="clouds clouds__horizon"></div>
                <div class="clouds clouds__cloudone"></div>
                <div class="clouds clouds__cloudtwo"></div>
                <div class="clouds clouds__cloudthree"></div>
            </header>

            <main class="main" id="main-content">
                <article>
