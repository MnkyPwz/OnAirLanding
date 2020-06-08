$(window).scroll(function () {
  var scrollLength = $(window).scrollTop();
  var viewEnd = $(document).height() - $(window).height() - 140;
  if (scrollLength > viewEnd) {
    var fewMoreElems = '<div class="item">Item</div><div class="item">Item</div><div class="item">Item</div>'; $(fewMoreElems).hide().appendTo("#items").fadeIn(1200);
  }
});


var overlays = $('.overlay-bg')

$('.item a').click(function () {

  var link = $(this)
  var overlay = link.data('overlay')
  overlays.removeClass('visible')
  $(overlay).addClass('visible')
  return false
});












