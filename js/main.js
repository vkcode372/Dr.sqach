
$(".all-carousel-cls").owlCarousel({
	loop: !0,
	margin: 20,
	nav: !0,
	dots: !1,
	responsive: {
		0: {
			items: 1,
			autoWidth:true
		},
		767: {
			items: 3,
			autoWidth:false
		},
		830: {
			items: 4,
			autoWidth: !0
		},
		1200: {
			items: 4,
			autoWidth: null,
			margin: 40
		}
	}
});
$(".mid-right-side-carousel").owlCarousel({
   loop:true,
	margin: 20,
	nav: false,
    smartSpeed: 800,
	lazyLoad:true,
	responsive: {
		0: {
			items: 1,
			autoWidth:true
		},
		768: {
			items: 2
		},
		1100: {
			items: 2,
			margin:30,
		},
		1200:{
             items:3.9,
			 margin:32,
			
		},
		1600: {
			items: 3.9,
			margin: 32,
		}
	}
}),
$(".mid-right-side-carousel2").owlCarousel({
	loop:true,
	 margin: 20,
	 nav: false,
	 lazyLoad:true,
	 responsive: {
		 0: {
			 items: 1,
			 autoWidth:true
		 },
		 767: {
			 items: 2,
			 autoWidth:false
		 },
		 1100: {
			 items: 3,
			 margin:30,
		 },
		 1200:{
			  items:3.5,
			  margin:32,
		 },
		 1600: {
			 items: 3.5,
			 margin: 32,
		 }
	 }
 });

$(".testimonial-carousel").owlCarousel({
	loop: !0,
	margin: 10,
	nav: !0,
	dots: !1,
	responsive: {
		0: {
			items: 1
		},
		766: {
			items: 2
		},
		1200: {
			items: 3,
			nav: !1
		}
	}
}), $(".trusted-sec-carousel").owlCarousel({
	autoPlay:true,
	loop: !0,
	margin: 20,
	dots: !1,
	responsive: {
		0: {
			items: 2,
			nav: !0
		},
		768: {
			items: 3,
			margin: 30,
			center:true
		},
		1200: {
			items: 3,
			margin: 30,
			center:true

		}
	}
}), $(".box-video").click(function() {
	$("iframe", this)[0].src += "&amp;autoplay=1", $(this).addClass("open")
}), $(".sqatch-diff-tv.box-video").click(function() {
	$("iframe", this)[0].src += "&amp;autoplay=1", $(this).addClass("open")
});


var brandSlider = $('.all-carousel-cls');
brandSlider.on('translated.owl.carousel', function(event) {
    var total = $(this).find('.owl-item.active').length;
	$(this).find('.owl-item.last-active').removeClass('last-active');
	$(this).find('.owl-item.first-active').removeClass('first-active');

    $(this).find('.owl-item').removeClass('firstactiveitem');
    $(this).find('.owl-item').removeClass('lastactiveitem');
    $(this).find('.owl-item.active').each(function(index) {
        if (index === 0) {
            $(this).addClass('firstactiveitem')
        }
        if (index === total - 1 && total > 1) {
            $(this).addClass('lastactiveitem');
        }
    });
});

$(".bar-shop .all-carousel-cls .owl-item.active").last().addClass("last-active");
$(".sect-hair-care .all-carousel-cls .owl-item.active").first().addClass("first-active");
$(".deodorant-section .all-carousel-cls .owl-item.active").last().addClass("last-active");
