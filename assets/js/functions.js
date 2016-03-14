$( document ).ready(function() {
/*  $(function() {
    $('a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('#container').animate({
            scrollTop: $('#container').scrollTop() + target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });*/
  
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
