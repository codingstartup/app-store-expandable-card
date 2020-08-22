$('.card').on('click', function (e) {
  let card = $(e.currentTarget)
  let card_offset_scrolltop = $(card).offset().top - $(window).scrollTop()
  
  $(card).css('--data-offset-top', card_offset_scrolltop * -1 + 'px')
  
  $(card).toggleClass('active')
  
  let ratio = 480/420
  let height = $(window).height()
  height -= $(card).find('img').outerHeight() * ratio
  height -= $(card).find('h4').outerHeight() * ratio
  height /= ratio
  
  $(card).find('.content').css('height', height)
  
  if ($(card).hasClass('active')) {
    $('body').addClass('noscroll')
  } else {
    $('body').removeClass('noscroll')
  }
})