var modal = $('#modal');
var m_body = $('#modal>div');
var m_close = $('#modal .close');
var m_open = $('.h_inner-wrapper .search');

var scroll_food = $('.scroll-to-food');
var food = $('#food .f_inner-wrapper');
var ty= food.offset().top;

m_open.click(function(){
  modal.css('display','block');
  m_body.addClass('on');
});
m_close.click(function(){
  modal.hide();
});


$('#fullpage').fullpage({
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  slidesNavigation: true,
  controlArrows: false,
})