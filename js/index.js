(function($) {
	$(function() {		
		//thermometers
		$('.thermometer').thermometer();

		//caption
		$('.imgArea').hover(function () {
			$('figcaption', this).fadeIn();
		}, function () {
			$('figcaption', this).fadeOut();
		});

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
	});

	//typing
	$("#typed").typed({
		strings: ["Welcome!!","I'm a web creater.", "My skills are design,","coding,","derection.","And Using these,","I can create a good Web page of UI / UX.", "If interested in me,","Let's create something interesting together!!"],
		typeSpeed: 30,
		backDelay: 500,
		loop: false,
		contentType: 'html',
		loopCount: false,
		callback: function(){ foo(); },
		resetCallback: function() { newTyped(); }
	});

	$(".reset").click(function(){
		$("#typed").typed('reset');
	});

	function newTyped(){}
	function foo(){
		$(".typed-cursor").hide();

	}

})(jQuery);

