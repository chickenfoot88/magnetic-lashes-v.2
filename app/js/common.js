$(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: true
  });

  $('.button_order').click(function(){
    $('html, body').animate({
      scrollTop: $('#form').offset().top+'px'
    });
    return false;
  });

  window.onscroll = function() {
    if( $(window).scrollTop() > 500) {
      $('.callback-button').fadeIn(200);
    };
  };

  $('.callback-button').click(function() {
    $('.callback-form-popup').css('display', 'flex').hide().fadeIn(300);
  });

  $('.callback-form-close').click(function() {
    $(this).parents().find('.callback-form-popup').fadeOut(300);
  });

  $('.callback-form-popup').click(function(e) {
    if ($(e.target).hasClass('callback-form-popup')) {
      $('.callback-form-popup').fadeOut(300);
    }

    e.stopPropagation();
  });

  $('.order_form_input').focus(function() {
    $(this).prev().fadeIn(100);
  })

  $('.order_form_input').focusout(function() {
    $(this).prev().fadeOut(100);
  })

  //countdown
  var note = $('#note'),
  		ts = new Date(2018, 3, 22, 10),
  		newYear = true;

  	// if((new Date()) > ts){
  	// 	ts = (new Date()).getTime() + 10*24*60*60*1000;
  	// 	newYear = false;
  	// }

  	$('#countdown').countdown({
  		timestamp	: ts
  	});

    $('#countdown-2').countdown({
      timestamp	: ts
    });


});
