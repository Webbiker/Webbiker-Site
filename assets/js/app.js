/* -------------------------
   Global functions
   ------------------------- */

	$(document).ready(function(){



		$(window).scroll(function() {
			// console.log('wrapper is scrolling');

			// behaviour of the main navigation on scroll
			var wrapperPos = $('.wrapper').scrollTop();
			// console.log('height: '+ wrapperPos);


			if(wrapperPos  > 40) {
				$('.header').addClass('header--sticky');
			} else {
				$('.header').removeClass('header--sticky');
			}

		});
	});

	$(window).scroll(function(){
		var wrapperPos = $('p').scrollTop();
		console.log('scrolling: '+wrapperPos);
	});

