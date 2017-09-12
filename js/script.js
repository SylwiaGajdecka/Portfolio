$(document).ready(function(){
	$('a[href^="#"]').click(function(event){
		event.preventDefault();
		$('body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 800);
	});

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top > 50){
			$('.header').addClass('sticked-menu');
		} else {
			$('.header').removeClass('sticked-menu');
		}
	})

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top < 300){
			$('.arrow-up').addClass('unvisible');
		} else {
			$('.arrow-up').removeClass('unvisible');
		}
	})

	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if(){
			
		}
	})
})