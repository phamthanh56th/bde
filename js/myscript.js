jQuery(document).ready(function(){
	jQuery('.flexslider').flexslider({
		animation: "fade",
	    controlNav: false,
	    slideshowSpeed: 4000,
	    animationSpeed: 1200,
	    smoothHeight: true,
	})
	new WOW().init();



	jQuery('.link-panel').click(function(){
		jQuery('#main-menu').toggleClass('active');
		jQuery(this).toggleClass('active');
	})

	jQuery(function(){
		var header = jQuery('.header-top');
		if (header.length) {
			var offset = header.offset().top;
			// console.log(offset);
			headerheight = header.height();
			injectspace = jQuery('<div />', {
				height: headerheight
			}).insertAfter(header).hide();
			jQuery(window).scroll(function(){
				if (jQuery(this).scrollTop() > offset) {
					header.addClass('fixed');
					injectspace.show();
				} else {
					header.removeClass('fixed');
					injectspace.hide();
				}
			})
		}
	})

	jQuery('<span class="icon"></div>').insertBefore('.sub-menu');
	jQuery('.icon').click(function(){
		jQuery('.sub-menu').slideToggle();
	})

})

jQuery(window).load(function(){
	var img_mobile = jQuery('.banner-internal').find('img').attr('src');
	if(jQuery(window).width() < 576) {
		jQuery('.banner-internal').css({
			"background-image":"url("+img_mobile+")",
			"background-size":"cover",
			"background-repeat":"no-repeat", 
			"background-position":"center center",
			"min-height":"120px",
		})
		jQuery('.banner-internal').find('img').css({"display":"none"});
	}


	
})
