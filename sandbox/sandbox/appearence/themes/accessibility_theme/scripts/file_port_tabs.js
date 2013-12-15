 $(function() {
    $("#tabrow")
      .tabs()
      .find( ".ui-tabs-nav" )
      .sortable({ axis: "x" });
    $( ".tabs-top .ui-tabs-nav, .tabs-top .ui-tabs-nav > * " )
      .removeClass( "ui-corner-all ui-corner-bottom" )
      .addClass( "ui-corner-top" );
    });
 
  // Link to open the dialog
        $( "#link1" ).click(function( event ) {
            $( "#dialog1" ).dialog( "open" );
            event.preventDefault();
        });
  $( "#dialog1" ).dialog({
        autoOpen: false,
        width: 400,
        buttons: [
           {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                }
            },
            {
                text: "Cancel",
                click: function() {
                    $( this ).dialog( "close" );
                }
            }
        ]
    });