/* -------------------------
   Sticky header function
   ------------------------- */
var stickyHeader = function(){
	// behaviour of the main navigation on scroll
	var height = $(window).scrollTop();
	if(height  > 40) {
		$('header').addClass('header--sticky');
	} else {
		$('header').removeClass('header--sticky');
	}
}

$(document).ready(function(){
	$(window).scroll(stickyHeader);
});
stickyHeader();


/* -------------------------
   Offcanvas function
   ------------------------- */
$(document).ready(function(){
	$(document).on('click', '#offcanvas-open', function(){
		$('.wrapper__offcanvas').addClass('wrapper__offcanvas--open');
		$('body').on('touchmove', function(e) {
		        e.preventDefault();
		}, false);
	});

	$(document).on('click', '#offcanvas-close', function(){
		$('.wrapper__offcanvas').removeClass('wrapper__offcanvas--open');
		$('body').unbind('touchmove');
	});
});