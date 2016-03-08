(function($) {
	
	//typing
	$("#typed").typed({
		strings: ["Welcome!","I'm a web creater.", "My skills are design,","coding,","derection.","And Using these,","I can create a good Web page of UI / UX.", "If interested in me,","Let's create something interesting together!!"],
		typeSpeed: 30,
		backDelay: 500,
		loop: false,
		contentType: 'html',
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	function newTyped(){}
	function foo(){
		$(".typed-cursor").hide();
	}



	//fixed navi
	var nav = $('header'),
	offset = nav.offset();

	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top) {
			nav.addClass('fixed');
		} else {
			nav.removeClass('fixed');
		}
	});


	
	//caption
	$('.imgArea').hover(function () {
		$('figcaption', this).fadeIn();
	}, function () {
		$('figcaption', this).fadeOut();
	});



	//scrollEvent
	var flagSkills = false;
	$(window).scroll(function() {
		var windowHeight = $(window).height(),
		topWindow = $(window).scrollTop();
		if (flagSkills == false) {
			$('#skills').each(function() {
				var targetPosition = $(this).offset().top;
				if (topWindow > targetPosition - windowHeight + 200) {
					//thermometers
					$('.thermometer').thermometer();
					flagSkills = true;
				}
			});
		}
	});



	//lazyload
	$('img.lazy').lazyload({
		threshold: 0 ,
		effect: "fadeIn" ,
		effect_speed: 1000 ,
	});

})(jQuery);

