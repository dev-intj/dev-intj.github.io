$("#pre-loader").load("/preloader/preloader.html");

//menu button
$('#navtoggle').click(function() {
  $('body').toggleClass("nav-active");
  $('#nav-menu').toggleClass("is-menu-active");
});



  $(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });