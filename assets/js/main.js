var screenWidth = $("BODY").width();
var cloudsArray = new Array();

for(i=1; i<7; i++){
	var delayTime = Math.floor(Math.random() * 250) + 50;
	var speed = Math.floor(Math.random() * 160000) + 140000;
	var leftAnim = (parseInt($('.cloud-'+i).css('left')) - parseInt($('.cloud-'+i).css('width')) - screenWidth)+"px" ;
	cloudsArray['cloud-'+i]=Array(speed, delayTime, leftAnim);
}

$(document).ready(function(){
	
	$(".logo").hoverIntent(function(){
		$(this).children('SPAN').stop().animate({
			'background-position-x': '-98px'
		}, 500, 'easeOutBounce');
	}, function(){
		$(this).children('SPAN').stop().animate({
			'background-position-x': '-4px'
		}, 500, 'easeOutBounce');
	});

	$("NAV LI A").hoverIntent(function(){
		$(this).stop().delay(250).animate({
			'background-position-y': '0px'
		}, 500, 'easeOutBounce');
	}, function(){
		$(this).stop().animate({
			'background-position-y': '-40px'
		}, 500, 'easeOutBounce');
	});
	
	$('#homeCycle').cycle({
		fx: 'custom', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 0,
		after: onBefore,
		onPrevNextEvent: function(is,i,el) {
			if (is === true) { direction = "right"; } else { direction = "left"; }
		},
		next:   '#next', 
		prev:   '#prev',
		slideExpr: '.slide'
	});
	
	function onBefore(currentElement, nextElement){
		if(currentElement!=nextElement){
			console.log(direction);
			if(direction=="right"){
				$(nextElement).css('display', 'block');
				$(currentElement).find('.image').css('left', '-20px').stop(true, true).delay(150).animate({left: '2000px'}, 2300, 'easeInSine');
				$(currentElement).find('.story').css('left', '470px').stop(true, true).delay(50).animate({left: '2000px'}, 1900, 'easeInSine');
				$(currentElement).find('.bigbutton').css('left', '660px').stop(true, true).delay(0).animate({left: '2000px'}, 1500, 'easeInSine');
	
				$(nextElement).find('.image').css('left', '-2000px').stop(true, true).delay(1000).animate({left: '-20px'}, 2800, 'easeOutSine', function(){ $(currentElement).css('display', 'none'); });
				$(nextElement).find('.story').css('left', '-2000px').stop(true, true).delay(1100).animate({left: '470px'}, 2400, 'easeOutSine');
				$(nextElement).find('.bigbutton').css('left', '-2000px').stop(true, true).delay(1150).animate({left: '660px'}, 2000, 'easeOutSine');
			} else {
				$(nextElement).css('display', 'block');
				$(currentElement).find('.image').css('left', '-20px').stop(true, true).delay(0).animate({left: '-2000px'}, 2000, 'easeInSine');
				$(currentElement).find('.story').css('left', '470px').stop(true, true).delay(50).animate({left: '-2000px'}, 2400, 'easeInSine');
				$(currentElement).find('.bigbutton').css('left', '660px').stop(true, true).delay(150).animate({left: '-2000px'}, 2800, 'easeInSine');
	
				$(nextElement).find('.image').css('left', '2000px').stop(true, true).delay(1000).animate({left: '-20px'}, 2000, 'easeOutSine', function(){ $(currentElement).css('display', 'none'); });
				$(nextElement).find('.story').css('left', '2000px').stop(true, true).delay(1100).animate({left: '470px'}, 2400, 'easeOutSine');
				$(nextElement).find('.bigbutton').css('left', '2000px').stop(true, true).delay(1150).animate({left: '660px'}, 2800, 'easeOutSine');
			}
		}
	}
	
	$(".clouds DIV").each(function(){
		var cloud = $(this).attr('class');
		$(this).delay(cloudsArray[cloud][1]).animate({left: cloudsArray[cloud][2]}, cloudsArray[cloud][0], 'linear');
	});
	cloudAnimation();
	
	$("A[title]:not('NAV A[title]')").tooltip({
		offset: [18, -40],
		position: 'top right',
		effect: 'slide'
	}).dynamic({ bottom: { direction: 'down', bounce: true } });

        $("NAV A[title]").tooltip({
            offset: [10, 0],
            position: 'bottom center',
            tipClass: 'tooltipDown',
            effect: 'slide'
	});
});

function cloudAnimation(){
	$(".clouds DIV").each(function(){
		var cloud = $(this).attr('class');
		var cPos = parseInt($(this).css('left'));
		var cWidth = parseInt($(this).css('width'));
                
		if(cPos+cWidth < 0){
			$(this).stop().css('left', (screenWidth)+"px").animate({left: cloudsArray[cloud][2]}, cloudsArray[cloud][0], 'linear');
		} 
	});

        window.setTimeout(function() { 
		cloudAnimation();
	}, 1000);
}
