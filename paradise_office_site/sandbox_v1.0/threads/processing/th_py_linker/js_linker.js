
$(document).ready( function () {
  $('#btn1').bind('click', function() {
    $.ajax({
      type: "POST",
      url: "test_plugin.php",
      data: { }, // place some json in here
      dataType: json
    }).done(function( msg ) {
      $("#messages").append("<p class=\"info\">Success</p>");
    });
  });
});
