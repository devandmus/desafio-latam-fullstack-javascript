$('document').ready(() =>  {

  // Carousel
  $('.carousel').carousel({
    interval: 2000
  });

  $('.carousel-control-prev').click(function(e) {
    e.preventDefault();
    $('#pvCarousel').carousel('prev');
  });

  $('.carousel-control-next').click(function(e) {
    e.preventDefault();
    $('#pvCarousel').carousel('next');
  });


  // Smooth scroll
  $('.navbar a').click(function(e){
    e.preventDefault();
    const goto = this.hash;
    $('html').animate({
      scrollTop: $(goto).offset().top,
    }, 800)
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // Popover
  $('[data-toggle="popover"]').popover();

});