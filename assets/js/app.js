/* -------------------------
   Global functions
   ------------------------- */

	$(document).ready(function(){

		$(".wrapper__content").scroll(function() {

			// behaviour of the main navigation on scroll
			var height = $(".wrapper__content").scrollTop();
			if(height  > 40) {
				$('.header').addClass('header--sticky');
			} else {
				$('.header').removeClass('header--sticky');
			}

		});
	});
