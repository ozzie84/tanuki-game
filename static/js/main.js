"use strict";

(function ($) {
  $(document).ready(function () {
    svg4everybody({});
  }); // Nav pages global

  $('.menu_click').on('click', function () {
    $('.menu_wrap').toggleClass('menu_wrap_active');
  }); // Page scroll to id
  // $("a[rel='m_PageScroll2id']").mPageScroll2id();
})(jQuery);