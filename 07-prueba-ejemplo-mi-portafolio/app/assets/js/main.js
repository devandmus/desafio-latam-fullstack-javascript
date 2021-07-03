$('document').ready(() =>  {
  // Smooth scroll
  $('a').click(function(e){
    e.preventDefault();
    const goto = this.hash;
    $('html').animate({
      scrollTop: $(goto).offset().top - 85 ,
    }, 800)
  });

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip()

  // Popover
  $('[data-toggle="popover"]').popover();

});