/* Initialises tabs, goes in other utilities Javascript function. */

$(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
}); 


/* #new_file - adds the default classes to tab_n */
function newFile() {
  $(document).ready(function() {
    $( "#newFile" ).click(function() {
      var numOpenTabs = $( "#tabrow ul li .open" ).length();
      var nextTabNum = parseInt(numOpenTabs) + 1;
      $( "#tabrow #tab_" + nextTabNum )
      	.addClass(".open")
	.removeClass(".closed");
      // Emptying the file of content.
      $( "#file" + nextTabNum + "_wrapper" ).html("");
    }); // end of click function 
  });  //end of inner function
}

/* close a file */
function closeFile() {
  $(function() {
    $( "#closeFile").click(function() {
      var currentTab = findCurrentTab();
      $(currentTab).removeClass(".open")
        .addClass(".closed");
    });
  });
}

/* to go into doc_utilities along with other functions from here */
function findCurrentTab() {
    var tab = $( "#tabrow" )
    // check line below
    .find( ".ui-tab-selected" );
    tab.css({ color: #f00; }); // DEBUG
    return tab;
}

function getTabFName() {
    var selectedTab = findCurrentTab();
    var fileName = $(selectedTab + "[data-filename]" ).attr("data-filename");
    console.log(fileName); // DEBUG
    return fileName;
}

function setTabFName(filename) {
    // filename sent via ajax
    var selectedTab = findCurrentTab();
    $(selectedTab).attr("data-filename", "filename"); // check
    console.log(filename); // DEBUG, testing AJAX
    return true;
}

/* should go somewhere else */
function fillTab (file) {
    var tab = findCurrentTab();
    $(tab).html(file);
    return true;
};

