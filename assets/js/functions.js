$( document ).ready(function() {
  var $root = $('html, body');
  $('a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  var $slideshow_selector = $('.slideshow-selector');
  var $slideshow_img = $('.slideshow-img');
  $slideshow_img.addClass('unactive');
  $slideshow_selector.click(function() {
    $slideshow_selector.removeClass('active');
    $slideshow_img.removeClass('active');
    $(this).addClass('active');
    $slideshow_img.eq($(this).index()).addClass('active');
    clearInterval($interval);
    $interval = setInterval(slide, 8000);

  });
  var $interval = setInterval(slide, 8000);
  function slide() {
    var $currently = $slideshow_selector.filter('.active').index();
    if ($currently == 4) {
      $slideshow_selector.removeClass('active');
      $slideshow_selector.eq(0).addClass('active');

      $slideshow_img.removeClass('active');
      $slideshow_img.eq(0).addClass('active');
    }else {
      $slideshow_selector.removeClass('active');
      $slideshow_selector.eq($currently + 1).addClass('active');

      $slideshow_img.removeClass('active');
      $slideshow_img.eq($currently + 1).addClass('active');
    }


  }

});
