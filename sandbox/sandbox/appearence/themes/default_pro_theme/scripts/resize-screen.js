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
  var titlebar = jQuery('.title_bar-skel').height();
  var menubar = jQuery('.menu_bar-skel').height();
  var commonbar = jQuery('.common_bar-skel').height();
  var statusbar = jQuery('.status_bar').height();
  
  var toolPane = jQuery('.tool_pane-skel').width();
  var toolbarHeight = parseInt(titlebar + menubar + commonbar + statusbar - 15); 
  console.log(toolbarHeight);
  console.log(toolPane);
  
  // toolbarHeight = parseInt(toolbarHeight);
  toolPane = parseInt(toolPane);
  viewportHeight = viewportHeight - toolbarHeight;
  viewportHeight = parseInt(viewportHeight);  
  fileportWidth = viewportWidth - toolPane ;
  viewportWidth = parseInt(viewportWidth);
  var  margin = 45;
  jQuery('.file_port').css("width", fileportWidth - margin);
  jQuery('.file_port').css("height", viewportHeight - parseInt(statusbar) - 10);
  jQuery('.file').css("height", viewportHeight - parseInt(statusbar) - 10);
  jQuery('.tool_pane-skel').css("left", fileportWidth - 10 );
  jQuery('.status_bar').css("top", viewportHeight + toolbarHeight - parseInt(statusbar));
  jQuery('.status_bar').css("width", fileportWidth + 20 );
  jQuery('.window').css("height", viewportHeight);
  jQuery('.window').css("width", viewportWidth);
};
jQuery(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});