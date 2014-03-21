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
  var commonbar = jQuery('.common_bar-skel').outerHeight(true);
  var statusbar = jQuery('.status_bar').outerHeight(true);
  
  var toolPane = jQuery('.tool_pane-skel').outerWidth(true);
  var toolbarHeight = parseInt(titlebar + menubar + commonbar + statusbar); 
  // console.log(toolbarHeight);
  // console.log(toolPane);
  
  // toolbarHeight = parseInt(toolbarHeight);
  toolPane = parseInt(toolPane) + 30; // For borders and 15px left border
  viewportHeight = viewportHeight - toolbarHeight;
  viewportHeight = parseInt(viewportHeight);  
  fileportWidth = viewportWidth - toolPane ;
  viewportWidth = parseInt(viewportWidth);
  jQuery('.file_port').css("width", fileportWidth);
  jQuery('.file_port').css("height", viewportHeight - parseInt(statusbar) );
  jQuery('.file').css("height", viewportHeight - parseInt(statusbar));
  jQuery('.file').css("width", fileportWidth - 6);
  jQuery('.tool_pane-skel').css("left", fileportWidth  );
  jQuery('.status_bar').css("top", viewportHeight + toolbarHeight - (parseInt(statusbar) + 6)); // for borders
  jQuery('.window').css("height", viewportHeight);
  jQuery('.window').css("width", viewportWidth);
};

jQuery(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});
