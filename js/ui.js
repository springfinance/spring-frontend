(function ($){ "use strict"

	$(".list_table tr.info").on('click', function(){
		if($(this).hasClass("open")){
			$(this).removeClass("open");
			$(this).next("tr.detail").find(".detail_box").slideUp();
		} else {
			$(this).addClass("open");
			$(this).next("tr.detail").find(".detail_box").slideDown();
		}
	});


	//모바일메뉴
	if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }

	$('div.burger').on(click, function(){
		if( !$(this).hasClass('open') ){ openMenu(); }
		else { closeMenu(); }
	});


	function openMenu(){
		$("#header").addClass('open');
		$('div.circle').addClass('expand');
		$('div.burger').addClass('open');
		$('div.x, div.y, div.z').addClass('coll');

		setTimeout(function(){
			$('div.y').hide();
			$('div.x').addClass('rotate30');
			$('div.z').addClass('rotate150');
		}, 70);
		setTimeout(function(){
			$('div.x').addClass('rotate45');
			$('div.z').addClass('rotate135');
		}, 120);
		setTimeout(function(){
			$("#header .inner .side ul").fadeIn();
		}, 500);
	}

	function closeMenu(){
		$("#header .inner .side ul").fadeOut("fast");
		$("#header").removeClass('open');
		$('div.burger').removeClass('open');
		$('div.x').removeClass('rotate45').addClass('rotate30');
		$('div.z').removeClass('rotate135').addClass('rotate150');

		setTimeout(function(){
			$('div.x').removeClass('rotate30');
			$('div.z').removeClass('rotate150');
		}, 50);
		setTimeout(function(){
			$('div.y').show();
			$('div.x, div.y, div.z').removeClass('coll');
		}, 70);
		setTimeout(function(){
			$('div.circle').removeClass('expand');
		}, 150);
	}


})(jQuery);