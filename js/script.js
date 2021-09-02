




// counter plugin
$(document).ready(function(){
    
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // wow plugin
    var wow = new WOW(
        {
          boxClass:     'wow',     
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true,       
          callback:     function(box) {
            
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
    );
    wow.init();

    $('.parallax-window').parallax({imageSrc: 'images/team-bg.jpg'});
    
    // isotope
    // init Isotope
    var $grid = $('.img-detail').isotope({
        // options
    });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //   text circle
  new CircleType(document.getElementById('h1'));
   

    
  
   
})


















