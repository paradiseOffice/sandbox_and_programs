 // get the document areas height and width (viewport, using jQuery.
 
 // var toolbarHeight = height * 0.30 ( work out total percentage / 100)
 
 // resize any pixel values if needed.
var checkWidth = function() {
  // innerWidth, innerHeight works when page is zoomed.
  var viewportWidth = jQuery(window).innerWidth();
  var viewportHeight = jQuery(window).innerHeight();
  var toolbarHeight = $(".title-bar").height() + $(".menu-bar").height() + $(".common-bar").height() + $(".status-bar").height();
  toolbarHeight = parseInt(toolbarHeight);
  viewportHeight = viewportHeight - toolbarHeight - 10;
  
  viewportWidth = viewportWidth * 0.73;
  viewportWidth = parseInt(viewportWidth);
  
  jQuery('.viewport').css("width", viewportWidth);
  jQuery('.viewport').css("height", viewportHeight);
  jQuery('.toolbox').css("height", viewportHeight);
  
};
jQuery(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});