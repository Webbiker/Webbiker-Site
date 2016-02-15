/* -------------------------
   Global functions
   ------------------------- */

	$(document).ready(function(){

		$(window).scroll(function() {

			// behaviour of the main navigation on scroll
			var height = $(window).scrollTop();
			if(height  > 40) {
				$('header nav').addClass('sticky');
			} else {
				$('header nav').removeClass('sticky');
			}

		});
	});
