//preloader
$(window).on("load", function (e) {
  $('#preloader').fadeOut('slow', function () {
    $(this).remove();

  });
});

// $(document).ready(function () {

//   // add class .table for all tables inside .main_text and  wrap table for responsive
//   $('.main_text').find('table').addClass('table');
//   $('.main_text table ').wrap('<div class="table-responsive"></div>');

//   ///Masked Input Plugin http://digitalbush.com/projects/masked-input-plugin/
//   // $('#tel').mask('+38 (999) 999-9999');

//   //remove standart WP img wrap width & height styles
//   $(".wp-caption").removeAttr('style');

// });