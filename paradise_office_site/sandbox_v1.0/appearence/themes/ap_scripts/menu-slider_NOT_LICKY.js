/* For animating CSS drop down menus */
$('body').ready(function() {
    $('.menuHead').hover ( function() {
      $('.menuBody')
        .stop(true, true)
        .delay(200)
        .show(800)
        .delay(5000)
        .hide(600);
      }); /* showing the sub menus, which all have a class of menuBody */
    
      $(document).click ( function() {
          $('.menuBody').hide(); /* hiding the menus when the user clicks anywhere else */
      });


});
  
