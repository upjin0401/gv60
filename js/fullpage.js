$(document).ready(function () {





	$('#fullpage').fullpage({
		//options here
		
		
    scrollOverflow : true,
		navigation: true,
		keyboardScrolling: true,
		responsiveWidth:498,
		
    normalScrollElements : '.swiper, .athe, .gift', //swiper 부분에만 스크롤 자동

		onLeave: function(){
			$('.section [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		onSlideLeave: function(){
			$('.slide [data-aos]').each(function(){
				$(this).removeClass("aos-animate")
			});
		},
		afterSlideLoad: function(){
			$('.slide.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		},
		afterLoad: function(){
			$('.section.active [data-aos]').each(function(){
				$(this).addClass("aos-animate")
			});
		}

	});

});