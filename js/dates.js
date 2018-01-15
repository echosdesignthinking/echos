$(document).ready(function() {

  var $boxs = $("#parent > .box");
  var $btns = $(".btn").click(function() {

    var active =
      $btns.removeClass("active")
        .filter(this)
        .addClass("active")
        .data("filter");

    $boxs
      .hide()
      .filter( "." + active )
      .fadeIn(450);

  });

});
