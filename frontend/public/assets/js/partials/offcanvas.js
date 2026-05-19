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

	$(document).on('click', '.offcanvas a', function(){
		setTimeout(function(){ 
			$('.wrapper__offcanvas').removeClass('wrapper__offcanvas--open');
			$('body').unbind('touchmove');
		}, 300);
	});
});