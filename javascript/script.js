function slowScroll(id) {
  var offset = 0;
  $('html, body').animate({
    scrollTop: $(id).offset().top - offset
  }, 1500)
  return false;
}

// <script>
// $(window).scroll(function(){
//   var scroll = $(window).scrollTop(),
//   dh = $(document).height(),
//   wh = $(window).height();
//   scrollPercent = (scroll / (dh - wh)) * 100;
//   $('#proggresBar').css('height', scrollPercent + '%');
// })
// </script>

let proggres = document.getElementById('proggresBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalheight) * 100;
  progress.style.height = progresHeight + "%";
}
