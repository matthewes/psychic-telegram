$(function() {
	
    if(navigator != undefined && navigator.userAgent != undefined) {
        user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf('android') > -1) { // Is Android.
            $(document.body).addClass('android').removeClass('ios');
        }
    }
	
	// Collapsable Sections
	$("ul.collapse li:not(.hasdetail) a").click(function(e) {
		var li = $(this).parents('li');
		var content = li.find('div.collapse-detail');
		
		if (content) {
			if (li.hasClass('active')) {
				li.removeClass('active');
				content.slideUp();
			} else {
				li.siblings().each(function() {
					$(this).removeClass('active');
					$(this).find('div.collapse-detail').slideUp();
				});
				li.addClass('active');
				content.slideDown();
			} // if (li.hasClass('active'))
		} // if (content)
	});	
	
	
});
