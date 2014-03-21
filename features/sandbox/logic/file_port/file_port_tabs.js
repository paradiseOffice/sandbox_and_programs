 $(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
      /*.click(function (event) // bug - needs right click
      {
        $( "#tabrow ul li a" ).addClass( "close" );
      }); */
    }); 
  $(function() {
    var tab_panel = $( "#tabrow ul li a" );
    // all_tabs = $.makeArray( tab_panel );
    // $.each(all_tabs, function(index, tab)  ? bug
    for (var i=1; i <= 20; i++)
    {
	
	$( "#tabrow #tab_" +i ).text("File " + i);
        /* if ( $( "#tabrow #tab_" +i ).hasClass('close') )
        {
          $( "#tabrow #tab_" +i ).css({ 'display' : 'none' }); 
        } */
    }

    /* var show_tab = function(number) {
      var tab = $( "#tab_" + ($number - 1));
      alert($tab);
      $tab.css({ 'display' : 'visible' });
    } */
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

 
 
 
 

