$(document).ready(function(){
  var imgItems = $('.carrusel li').length;
  var imgPos = 1;
  /*Numero de imagenes por circulo*/
  for (var i = 1; i <= imgItems; i++) {
      $('.pagination').append('<li><span><i class="far fa-circle"></i></span></li>');
  }

  $('.carrusel li ').hide();
  $('.carrusel li:first').show();

  /*Colorear los circulitos*/
  $('.pagination li:first').css({'color':'#CDCDC0'});

  /*Ejecutar todas las funciones*/
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  setInterval(function(){
    nextSlider();

  }, 4000);

  /*FUNCIONES*/
  function pagination(){
    var paginationPos = $(this).index() + 1;
    console.log(paginationPos);
    $('.carrusel li').hide();
    $('.carrusel li:nth-child('+paginationPos+')').fadeIn();
    $('.pagination li').css({'color':'#858585'});
    $(this).css({'color':'#CDCDC0'});

    imgPos = paginationPos;
  }

  function nextSlider(){
    if (imgPos >= imgItems) {
      imgPos = 1;
    }else{
      imgPos++;
    }
    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#CDCDC0'});

    $('.carrusel li').hide();
    $('.carrusel li:nth-child('+imgPos+')').fadeIn();

  }

  function prevSlider(){
    if (imgPos <= 1) {
      imgPos = imgItems;
    }else{
      imgPos--;
    }
    $('.pagination li').css({'color':'#858585'});
    $('.pagination li:nth-child('+imgPos+')').css({'color':'#CDCDC0'});

    $('.carrusel li').hide();
    $('.carrusel li:nth-child('+imgPos+')').fadeIn();

  }

});
