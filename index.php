<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
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

		<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
		<script src="/assets/js/build/loader.min.js"></script>

		<link rel="stylesheet" href="/assets/css/loader.css">
	</head>
	<body>
		<!--[if lt IE 10]>
			<p class="chromeframe">You are using an outdated browser. <a href="http://browsehappy.com/">Upgrade your browser today</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to better experience this site.</p>
		<![endif]-->
		<div id="preloader">	
			<div id="loading"><?php include("assets/svg/loader.svg"); ?></div>
		</div>
		<div class="wrapper">
			
			<div class="wrapper__offcanvas">
			    <nav class="offcanvas">
			        <div class="offcanvas__list">
			            <a href="javascript:;">Over Webbiker</a>
			            <a href="javascript:;">Portfolio</a>
			            <a href="javascript:;">Diensten</a>
			            <a href="javascript:;">Contact</a>
			        </div>
					<ul class="offcanvas__social">
						<li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-twitter"></use></svg></a></li>
						<li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-facebook"></use></svg></a></li>
						<li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-google-plus"></use></svg></a></li>
						<li><a href="javascript:;"><svg class="submenu__icon"><use xlink:href="/assets/img/gui/sprite.svg#icon-linkedin"></use></svg></a></li>
					</ul>
			    </nav>
			    <button class="close-button" id="offcanvas-close">Close Menu</button>
<!-- 			    <div class="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
			        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">
			            <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z"/>
			        </svg>
			    </div> -->
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
						<li><a href="javascript:;" class="active">Over Webbiker</a></li>
						<li><a href="javascript:;">Portfolio</a></li>
						<li><a href="/" class="logo"><img src="/assets/img/header/logo.svg" alt="Webbiker logo"></a></li>
						<li><a href="javascript:;">Diensten</a></li>
						<li><a href="javascript:;">Contact</a></li>
					</ul>
<!-- 					<a href="/" class="logo">
						<img src="/assets/img/header/logo.svg" alt="Webbiker logo">
						<svg viewBox="0 0 229 232" class="logo__shield">
							<use xlink:href="/assets/img/gui/sprite.svg#logo-shield"></use>
						</svg>
						<svg viewBox="0 0 138 104" class="logo__bike">
							<use xlink:href="/assets/img/gui/sprite.svg#logo-bike"></use>
						</svg>
						<svg viewBox="0 0 357 123" class="logo__text">
							<use xlink:href="/assets/img/gui/sprite.svg#logo-text"></use>
						</svg>
						<svg viewBox="0 0 229 232" class="logo__shadow">
							<use xlink:href="/assets/img/gui/sprite.svg#logo-shadow"></use>
					</a> -->
				</nav>
				<div class="clouds clouds__horizon"></div>
				<div class="clouds clouds__cloudone"></div>
				<div class="clouds clouds__cloudtwo"></div>
				<div class="clouds clouds__cloudthree"></div>
			</header>

			<main class="main">
				<h1>
					<img src="/assets/img/header/avatar.jpg" alt="Joost Brommert - Webdesigner" class="avatar">
					Joost Brommert
					<small>Webdesigner</small>
				</h1>
				<article>
					<p><strong>Morem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestias, voluptatum cumque aut nostrum, nisi sint voluptates illo repellat quis voluptate iure quos dolorum ullam incidunt vitae quisquam tempore possimus, et sequi perspiciatis aliquid omnis distinctio deleniti. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, pariatur quia debitis nobis esse, molestias eum aperiam quae minus inventore magnam eligendi veritatis facilis assumenda nesciunt hic obcaecati.</strong></p>
					<p>Dolorem eius a aliquam, corporis nihil nobis itaque culpa, quod qui recusandae quibusdam laboriosam obcaecati, reiciendis, nesciunt voluptate aspernatur. Iure quos recusandae dolore? Voluptas itaque error, cupiditate deleniti quibusdam vel! Incidunt aliquam facere odio blanditiis suscipit aspernatur?</p>
					<p>Proin vel egestas ex. Morbi efficitur libero eget libero mattis posuere pretium vel ligula. Vivamus efficitur ipsum risus, nec tincidunt nulla eleifend vehicula. Pellentesque consequat enim vulputate felis consequat, a placerat lorem luctus. Phasellus sagittis tristique varius. Nulla tellus arcu, consectetur ac ullamcorper vel, porttitor at sem. Nullam id egestas ex, eget rhoncus dolor. Integer eget purus pulvinar, feugiat erat in, luctus mi. Fusce odio ipsum, luctus eu orci quis, tincidunt rhoncus leo. Proin aliquet, metus at mollis tincidunt, dui quam facilisis nunc, quis congue felis mi sed libero. Sed a dignissim nisl. Morbi vitae magna fermentum, auctor tellus vel, pulvinar metus.</p>
					<blockquote>
						You can't handle the thruth!    
					</blockquote>
					<p>Curabitur laoreet pulvinar dui, vitae interdum ligula tincidunt at. Cras rhoncus velit urna, vel eleifend orci accumsan ut. Aliquam eget consequat massa, eget vulputate elit. Pellentesque justo diam, tempor ut erat id, congue aliquet tellus. Etiam congue dignissim dignissim. Sed quis nibh in sem faucibus interdum ut vel nulla. Fusce porttitor ornare euismod. Vestibulum dolor metus, convallis non velit sed, ullamcorper placerat ante.</p>
					<p>Maecenas eros ante, dapibus sed ipsum sit amet, maximus maximus ex. Nullam odio elit, venenatis id dictum nec, consectetur eu metus. Donec in orci sit amet eros faucibus porta sagittis nec metus. Nullam quis suscipit lectus, nec iaculis turpis. Curabitur euismod eros sit amet magna dignissim, id pellentesque est egestas. Nam sit amet suscipit ex, eget consequat orci. Aliquam erat volutpat. Aliquam erat volutpat. Proin molestie, urna eu dignissim pretium, diam felis tincidunt nisl, eu porttitor sapien velit non magna. Proin et sagittis magna. Aenean quis metus eu neque ultricies ornare nec ut lacus. Phasellus cursus arcu sollicitudin, molestie ex id, laoreet tellus. Mauris vel molestie eros.</p>
					<h2>Lorem ipsum dolor sit amet</h2>
					<!-- <p><svg xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="/assets/img/gui/sprite.svg#logo" title="Webbiker logo"></use></svg></p> -->
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut molestias, voluptatum cumque aut nostrum, nisi sint voluptates illo repellat quis voluptate iure quos dolorum ullam incidunt vitae quisquam tempore possimus, et sequi perspiciatis aliquid omnis distinctio deleniti. Sed, dicta porro neque ab enim consequuntur assumenda tempore vitae fugit nam inventore qui, placeat distinctio impedit labore. Cupiditate quia deleniti aperiam quaerat voluptatem at temporibus ullam! Ex modi mollitia natus at earum assumenda nulla quam eum. </p>
					<h3>Lorem ipsum dolor sit amet</h3>
					<p>Voluptates esse, maiores saepe quis assumenda, eum odio atque consequatur blanditiis minima beatae similique placeat quas velit, quos ad provident commodi dolor eos quibusdam dolorum debitis fuga? Placeat quod, odit fuga quo sequi assumenda magni officia laudantium quam corporis, amet ullam tempora repellat porro architecto nemo eaque nisi laboriosam nam.</p>
					<h4>Lorem ipsum dolor sit amet</h4>
					<p>Voluptates esse, maiores saepe quis assumenda, eum odio atque consequatur blanditiis minima beatae similique placeat quas velit, quos ad provident commodi dolor eos quibusdam dolorum debitis fuga? Placeat quod, odit fuga quo sequi assumenda magni officia laudantium quam corporis, amet ullam tempora repellat porro architecto nemo eaque nisi laboriosam nam.</p>
					<p>
						<a href="javascript:;" class="button">Verzenden</a>
					</p>
				</article>        
			</main>
			<footer>
				&copy;<?php echo Date("Y"); ?> Webbiker
			</footer>
		</div>
		<script src="/assets/js/build/app.min.js"></script>
		<link rel="stylesheet" href="/assets/css/screen.css">
	</body>
</html>