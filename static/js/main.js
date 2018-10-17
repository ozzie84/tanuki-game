"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  });
  var swiper = new Swiper('.swiper-container');
  $(document).on('click', '.active_popup', function () {
    $('.popup_wrap').fadeIn(300);
  });
  $(document).on('click', '.popup_bg, .popup_close', function () {
    $('.popup_wrap').fadeOut(300);
  });
})(jQuery);