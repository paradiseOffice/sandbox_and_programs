 $(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
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
 
 
 
 
 

