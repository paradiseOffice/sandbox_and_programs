 $(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
    });
 /* #new_file */
 $(document).ready(function() {
   $( "#new_file" ).click(function() {
     var num_open_files = $( "#tabrow ul li" ).length;
     var next_file_num = num_open_files + 1;
     $( "#tabrow ul" )
     .append('<li class="ui-state-default ui-corner-top ui-tabs-active" role="tab" tabindex="0" aria-controls="wrapper-file1" aria-labelledby="ui-id-1" ><a href="#wrapper-file'+next_file_num+'">Untitled_'+next_file_num+'</a></li>');
     $( "#wrapper-file"+num_open_files )
     .after('<div id="wrapper-file'+next_file_num+'">\n<div id="file'+next_file_num+'" class="ui-tabs-panel" contenteditable> </div>\n</div>');
   });
 
 /* #open_quick-menu */
  $(function() {
      $( '#open_dialog' ).dialog({
      modal: true,
      autoOpen : false,
      show : 'scale'
      });
    });
  $( '#open_quick-menu' ).click(function (event)
  {
    if ($("#open_dialog").dialog ("isOpen")) console.log("Already open !");
    else $("#open_dialog").dialog ("open");
  });
  /* save quick menu */
  $( '#save_advanced_btn' ).click(function () {
      $( '#save_advanced' ).toggle();
    });
    $(function() {
      $( '#save_dialog' ).dialog({
      modal: true,
      autoOpen : false,
      show : 'scale'
      });
    });
  $( '#save-quick_menu' ).click(function (event)
  {
    if ($("#save_dialog").dialog ("isOpen")) console.log("Already open !");
    else $("#save_dialog").dialog ("open");
  });
  /* save-as quick menu */
  $( '#save-as_advanced_btn' ).click(function () {
      $( '#save-as_advanced' ).toggle();
    });
    $(function() {
      $( '#save-as_dialog' ).dialog({
      modal: true,
      autoOpen : false,
      show : 'scale'
      });
    });
  $( '#save-as-quick_menu' ).click(function (event)
 // Open button Treatment
  {
    if ($("#save-as_dialog").dialog ("isOpen")) console.log("Already open !");
    else $("#save-as_dialog").dialog ("open");
  });
  /* close file -- override jqueryUI bit */
 
 
 
 
 
});