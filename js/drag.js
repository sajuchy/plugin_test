$(document).ready(function(){
    $('#img, #img2, #img3').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

    // slider
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        autoplay:true
      });


    //   timer
    $('#getting-started').countdown('2021/09/15', function(event) {
       
        $(this).html(event.strftime('<div class="single-counter">%D <span>days</span></div> <div class="single-counter">%H <span>hours</span></div> <div class="single-counter">%M <span>minutes</span></div> <div class="single-counter">%S <span>Second</span></div>'));
      });

      // vide js

      
})