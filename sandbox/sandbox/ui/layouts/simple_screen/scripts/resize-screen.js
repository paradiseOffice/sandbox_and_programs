 /* get the document areas height and width (viewport, using jQuery.
 
  var toolbarHeight = height * 0.30 ( work out total percentage / 100)
 add size choosing script function here too, with the value passed
 as a parameter to the resizing function 
 resize any pixel values if needed. 
*/

var checkWidth = function() {
  // innerWidth, innerHeight works when page is zoomed.
  var viewportWidth = jQuery(window).innerWidth();
  var viewportHeight = jQuery(window).innerHeight();
  var toolbarHeight = 136; // for simple screen size
  var toolPane = 190; // for simple screen only
  // if sizecss == x then toolbarHeight = this, or a case menu.
//$(".title-bar").height() + $(".menu-bar").height() + $(".common-bar").height() + $(".status-bar").height();
  toolbarHeight = parseInt(toolbarHeight);
  toolPane = parseInt(toolPane);
  viewportHeight = viewportHeight - toolbarHeight;
  viewportHeight = parseInt(viewportHeight);  
  viewportWidth = viewportWidth - toolPane ;
  viewportWidth = parseInt(viewportWidth);
  var  margin = 30;
  jQuery('.file_port').css("width", viewportWidth - margin);
  jQuery('.file_port').css("height", viewportHeight);
  jQuery('.tool_pane-skel').css("left", viewportWidth);
  jQuery('.status_bar').css("top", viewportHeight + toolbarHeight - 25);

};
jQuery(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});