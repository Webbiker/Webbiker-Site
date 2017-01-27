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