/* -------------------------
   Dynamic page function
   ------------------------- */
$(function() {
    if (Modernizr.history) {
		// hijack the nav click event
		$(".mainmenu, .offcanvas__list").delegate("a", "click", function(e) {
			e.preventDefault();

			_href = $(this).attr("href");
			// change the url without a page refresh and add a history entry.
			history.pushState(null, null, _href);

			// load the content
			loadContent(_href);
		});
    } else {
        // console.log('history is not supported; nothing fancy here');
    }
});

// set up some variables
var $mainContent = $("#main-content"),
    $pageWrap    = $("#page-wrap"),
    baseHeight   = 0,
    $el;

// calculate wrapper heights to prevent jumping when loading new content
// $pageWrap.height($pageWrap.height());
// baseHeight = $pageWrap.height() - $mainContent.height();

var loadContent = function(href){
	console.log('load content');

	$("#main-guts")
		.addClass('article__hide', function(){
		// .fadeOut(500, function() { // fade out the content of the current page
			console.log('main content');
		// $mainContent.hide().load(href + " #main-guts", function() { // load the contents of whatever href is
		// 	$mainContent.fadeIn(200, function() {
		// 		// $pageWrap.animate({
		// 		// 	height: baseHeight + $mainContent.height() + "px";
		// 		// });
		// 	});
	  
			$(".mainmenu a, .offcanvas__list a").removeClass("active");
			$(".mainmenu a[href$='" + href + "'], .offcanvas__list a[href$='" + href + "']").addClass("active");

		// });
	});
}

$(window).bind("popstate", function() {
	link = location.pathname.replace(/^.*[\\/]/, ""); // get filename only
	loadContent(link);
});