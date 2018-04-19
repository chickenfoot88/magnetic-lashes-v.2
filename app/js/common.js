$(function() {
  $('.owl-carousel').owlCarousel({
    items: 1,
    dots: true
  });

  $('.button-order').click(function(){
    $('html, body').animate({
      scrollTop: $('#form').offset().top+'px'
    });
    return false;
  });

});
