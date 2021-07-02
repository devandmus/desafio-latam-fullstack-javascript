$('document').ready(function(){
  // Carousel punto 1
  $('.carousel').carousel({
    interval: 2000000
  });

  $('.carousel-control-prev').click(function(e) {
    e.preventDefault();
    $('#carousel').carousel('prev');
  });

  $('.carousel-control-next').click(function(e) {
    e.preventDefault();
    $('#carousel').carousel('next');
  });

  // Tooltip punto 2
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  });

  // Evento punto 3
  $('#emailSend').click(function(){
    alert('El correo fue enviado correctamente...')
  });

  // Selectores de etiqueta punto 4
  $('aside > h3').dblclick(function(e){
    const clList = e.target.classList;
    clList.contains('red') ? clList.remove('red') : clList.add('red');
  })

  // Selectores de clase punto 5 con método toggle de jQuery
  $('.card .card-body .card-title').click(function (e) {
    const text = e.target.parentElement.querySelector('.card-text');
    $(text).toggle( "slow" );
  });
})