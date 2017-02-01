/* -------------------------
   Dynamic page function
   ------------------------- */

$(function() {

    if(Modernizr.history){
	    var $mainContent = $("#main-content"),
	        $speed   = 300;
	        
	    $(".mainmenu, .offcanvas").delegate("a", "click", function() {
	        _link = $(this).attr("href");
	        history.pushState(null, null, _link);
	        loadContent(_link);

            $(".mainmenu a, .offcanvas a").removeClass("active");
            $(this).addClass("active");

	        return false;
	    });

	    function loadContent(href){
	    	$mainContent.addClass('main__hide').delay($speed).queue(function(){
				$("#loading").addClass('loader__spinner--content').fadeIn($speed, function(){

			        $mainContent.load(href + " #main-content > *", function(responseData, status, xhr) {
						$('article *').load(function(){
    	    				$("#loading").fadeOut($speed, function(){
						    	$mainContent.removeClass('main__hide');
						    	$(this).removeClass('loader__spinner--content');
    	    				})
						});

			            // console.log("href: "+href);
			            // $(".mainmenu a").removeClass("active");
			            // $(".mainmenu a[href='"+href+"]").addClass("active");
			        })
				});

		        $(this).dequeue();
	    	});
	    }
	    
	    $(window).bind('popstate', function(){
	       _link = location.pathname.replace(/^.*[\\\/]/, ''); //get filename only
	       loadContent(_link);
	    });

	} // otherwise, history is not supported, so nothing fancy here.

    
});