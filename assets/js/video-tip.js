var contenidoCurrentVideo = [{
  video: "https://www.youtube.com/watch?v=84096kP8Hwc"
}, {
  video: "https://www.youtube.com/watch?v=DdfzjtEiyO0"
}, {
  video: "https://www.youtube.com/watch?v=FDFGSNfSSXM"
}];

function responsiveCss() {
  $('.link-banner').on('click', function(e) {
    e.preventDefault();
  });
  $('.link-video-tip .div-play').attr('src', '/static/categorias/contenidoEstatico/landings/DeVueltaAlCole/assets/img/video-tip/play_blanco.svg');
  $('.link-video-tip').on('click', function(e) {
    e.preventDefault();
    $('.img-current ').attr('src', contenidoCurrentVideo[$(this).data('video')].img);
    $('.link-video-tip').css('border-top', '3px transparent solid');
    $('.link-video-tip').css('background-color', 'background-color: rgba(0, 0, 0, 0.4)');
    $(this).css('border-top', '3px blue solid');
    $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');

  })
}

var widthWindows = $(window).width();
$(document).ready(function() {
  if (widthWindows > 992) {
    responsiveCss();
  }
});
$(window).resize(function() {
  if (widthWindows > 992) {
    responsiveCss();
  }
});
