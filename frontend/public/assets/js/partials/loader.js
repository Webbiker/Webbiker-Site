/* -------------------------
   preloader
   ------------------------- */

$(document).ready(function(){
	var	speed = 1,
		rightHead = $("#loading #right-head"),
		rightArm = $("#loading #right-arm"),
		rightCrank = $("#loading #right-crank"),
		rightPiston = $("#loading #right-piston"),
		tlRightCrank = new TimelineMax({ repeat: -1 }),
		tlRightHead = new TimelineMax({ repeat: -1 }),
 		tlRightArmRotation = new TimelineMax({ repeat: -1 }),
		tlRightArmYPos = new TimelineMax({ repeat: -1 }),

		leftHead = $("#loading #left-head"),
		leftArm = $("#loading #left-arm"),
		leftCrank = $("#loading #left-crank"),
		leftPiston = $("#loading #left-piston"),
		tlLeftCrank = new TimelineMax({ repeat: -1 }),
		tlLeftHead = new TimelineMax({ repeat: -1 }),
 		tlLeftArmRotation = new TimelineMax({ repeat: -1 }),
		tlLeftArmYPos = new TimelineMax({ repeat: -1 });

	TweenLite.set(rightPiston, { rotation: 30, y: -123, x: 345 });
	TweenLite.set(leftPiston, { rotation: -30, y: 275, x: -240 });

	tlRightCrank
		.to(rightCrank, speed, {rotation:360, transformOrigin:"50% 184px", ease:Linear.easeNone });
	tlRightHead
		.to(rightHead, speed/2, { y: 307, transformOrigin:"50% 184px", ease: Power1.easeInOut })
		.to(rightHead, speed/2, { y: 65, transformOrigin:"50% 184px", ease: Power1.easeInOut });
	tlRightArmRotation
		.to(rightArm, speed/4, {rotation:-24, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(rightArm, speed/4, {rotation:0, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(rightArm, speed/4, {rotation:24, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(rightArm, speed/4, {rotation:0, transformOrigin:"50% 34px", ease:Sine.easeIn });
	tlRightArmYPos
		.to(rightArm, speed/4, { y:280, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(rightArm, speed/4, { y:375, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(rightArm, speed/4, { y:280, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(rightArm, speed/4, { y:135, transformOrigin:"50% 34px", ease:Sine.easeOut });


	var	tlMasterRightCrank = new TimelineMax({ repeat: -1 });
		tlMasterRightHead = new TimelineMax({ repeat: -1 }),
		tlMasterRightArmRotation = new TimelineMax({ repeat: -1 }),
		tlMasterRightArmYPos = new TimelineMax({ repeat: -1 }),

	tlMasterRightCrank
		.fromTo(tlRightCrank, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlRightCrank, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterRightHead
		.fromTo(tlRightHead, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlRightHead, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterRightArmRotation
		.fromTo(tlRightArmRotation, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlRightArmRotation, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterRightArmYPos
		.fromTo(tlRightArmYPos, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlRightArmYPos, 6, { timeScale:1, ease:Bounce.easeOut});

	tlLeftCrank
		.fromTo(leftCrank, speed, {rotation:180, transformOrigin:"50% 184px" }, {rotation:540, transformOrigin:"50% 184px", ease:Linear.easeNone });
	tlLeftHead
		.fromTo(leftHead, speed/2, { y: 307, transformOrigin:"50% 184px"}, { y: 65, transformOrigin:"50% 184px", ease: Power1.easeInOut })
		.to(leftHead, speed/2, { y: 307, transformOrigin:"50% 184px", ease: Power1.easeInOut });
	tlLeftArmRotation
		.to(leftArm, speed/4, {rotation:24, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(leftArm, speed/4, {rotation:0, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(leftArm, speed/4, {rotation:-24, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(leftArm, speed/4, {rotation:0, transformOrigin:"50% 34px", ease:Sine.easeIn });
	tlLeftArmYPos
		.fromTo(leftArm, speed/4, { y:375, transformOrigin:"50% 34px" }, { y:280, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(leftArm, speed/4, { y:135, transformOrigin:"50% 34px", ease:Sine.easeOut })
		.to(leftArm, speed/4, { y:280, transformOrigin:"50% 34px", ease:Sine.easeIn })
		.to(leftArm, speed/4, { y:375, transformOrigin:"50% 34px", ease:Sine.easeOut });


	var	tlMasterLeftCrank = new TimelineMax({ repeat: -1 });
		tlMasterLeftHead = new TimelineMax({ repeat: -1 }),
		tlMasterLeftArmRotation = new TimelineMax({ repeat: -1 }),
		tlMasterLeftArmYPos = new TimelineMax({ repeat: -1 }),

	tlMasterLeftCrank
		.fromTo(tlLeftCrank, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlLeftCrank, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterLeftHead
		.fromTo(tlLeftHead, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlLeftHead, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterLeftArmRotation
		.fromTo(tlLeftArmRotation, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlLeftArmRotation, 6, { timeScale:1, ease:Bounce.easeOut});
	tlMasterLeftArmYPos
		.fromTo(tlLeftArmYPos, 6, { timeScale:1 }, { timeScale:4, ease:Bounce.easeIn})
		.to(tlLeftArmYPos, 6, { timeScale:1, ease:Bounce.easeOut});

});

$(document).ready(function() {
	$('body').on('touchmove', function(e) {
	        e.preventDefault();
	}, false);
	$("#loading").fadeIn('slow');
});

$(window).load(function(){
	$('#loading').fadeOut('slow', function(){
		$("#overlay").fadeOut('slow')			
		$('body').unbind('touchmove');
	});
});
