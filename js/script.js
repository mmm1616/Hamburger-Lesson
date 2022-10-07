$(function() {
  $('.menu-trigger').on('click', function(event) {
        // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
       // on offをする　＝　toggle
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});