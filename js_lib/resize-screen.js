/* 
 * This script puts the status bar on the bottom, after the file port and makes the
 * file port fill the windows space dynamically, and on page refresh. 
 */

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
  var header = parseInt(titlebar + menubar + commonbar);
  var statusbar = $('.status_bar').outerHeight(true);
  console.log("header: " + header + " status bar: " + statusbar); // DEBUG
  
  var toolPane = $('.tool_pane-skel').outerWidth(true);
  console.log("Side pane: " + toolPane);
  
  var fileportHeight = viewportHeight - (header + statusbar);
  var fileportWidth = viewportWidth - toolPane;
  // margins are to make the file smaller inside of the file_port
  var margins = 16;
  var fileWidth = fileportWidth - margins;
  var fileHeight = fileportHeight - margins;
  // console.log("File Width: " + fileWidth); // DEBUG
  $('.file_port').css("width", fileportWidth);
  $('.file_port').css("height", fileportHeight);
  $('.file').css("height", fileHeight );
  $('.file').css("width", fileWidth );
  // $('.tool_pane-skel').css("height", fileportHeight);
}; 

$(document).ready(function() {
  checkWidth();
  $(window).resize(checkWidth);
});
