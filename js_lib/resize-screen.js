/* 
 * This script puts the status bar on the bottom, after the file port and makes the
 * file port fill the windows space dynamically, and on page refresh. 
 */
/*
var checkWidth = function() {
  // Get the window dimensions, save to variables.
  var viewportWidth = window.innerWidth;
  // console.log("viewportWidth: " + viewportWidth); // DEBUG
  var viewportHeight = window.innerHeight;
  // console.log("viewportHeight: " + viewportHeight); // DEBUG
  // Getting the margins as well with outerHeight(true)
  var titlebar = $('.title_bar-skel').outerHeight(true);
  var menubar = $('.menu_bar-skel').outerHeight(true);
  var commonbar = $('.common_bar-skel').outerHeight(true);
  var statusbar = $('.status_bar').outerHeight(true);
  // console.log("titlebar: " + titlebar + " menu bar: " + menubar + " common bar: " + commonbar + " status bar: " + statusbar); // DEBUG
  
  var toolPane = $('.tool_pane-skel').outerWidth(true);
  var toolbarHeight = parseInt(titlebar + menubar + commonbar + statusbar); 
  // console.log("height of all toolbars: " + toolbarHeight);
  // console.log("Width of tool panes: " + toolPane);
  
  viewportHeight = viewportHeight - toolbarHeight;
  viewportHeight = parseInt(viewportHeight);  
  // The 15 is the from left border 
  var leftPos = 15;
  fileportWidth = viewportWidth - (toolPane + leftPos) ;
  viewportWidth = parseInt(viewportWidth);
  var fileWidth = parseInt(fileportWidth - 8);
  var fileportHeight = viewportHeight - 8;
  // console.log("File Width: " + fileWidth); // DEBUG
  var topMargin = 6;
  var tabRow = $( '#tabrow' ).outerHeight(true);
  var statusBtm = ((viewportHeight + toolbarHeight) - (parseInt(statusbar) + topMargin));
  var fileHeight = fileportHeight - (parseInt(statusbar) - tabRow - topMargin);
  // console.log("status is " + statusBtm + " from the top"); // DEBUG
  console.log("File height is " + fileHeight );
  $('.file_port').css("width", fileportWidth);
  $('.file_port').css("height", fileportHeight);
  $('.file').css("height", fileHeight );
  $('.file').css("width", fileWidth );
  $('.tool_pane-skel').css("left", fileportWidth  );
  $('.status_bar').css("top", statusBtm ); 
  $('.window').css("height", viewportHeight);
  $('.window').css("width", viewportWidth);
}; */

$(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});
