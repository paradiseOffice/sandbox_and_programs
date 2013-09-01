/* For animating CSS drop down menus */
$(document).ready(function() {
  for ( var i = 1; i <= 10; i++ )
  {
    var iString = i.toString();
    var menuLink = "#menuLink" + iString;
    var menuLinkX = $(menuLink);
    
    menuLinkX.hover ( function(iString) {
      var menu = "#menu" + iString;
      var menuX = $(menu);
      
      menuX.stop(true, true)
        .delay(10)
        .show(200)
        .delay(5000)
        .hide(200);
      });
    
      $(document).click ( function(menuX) {
         menuX.hide(); 
      });
  }   
});
  
