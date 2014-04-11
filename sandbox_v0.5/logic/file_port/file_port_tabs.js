$(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
    var tab_panel = $( "#tabrow ul li a" );
    for (var i=1; i <= 20; i++)
    {
        $( "#tabrow #tab_" +i ).text("File " + i);
    }
});

 /* ===================================================================== */
 /* #open_quick-menu */
  $(function() {
      $( '#quickMenu' ).dialog({
      modal: true,
      autoOpen : false,
      show : 'scale'
      });
    });

 
 
 
 

