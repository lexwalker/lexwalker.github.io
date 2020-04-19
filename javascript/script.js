function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1500)
  return false;
}

 $(window).scroll(function(){
   var scroll = $(window).scrollTop(),
   dh = $(document).height(),
   wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
   $('#proggresBar').css('height', scrollPercent + '%');
 })
