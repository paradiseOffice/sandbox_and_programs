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
   var tabs = $( "#tabrow" ).tabs();
   $( "#new_file" ).click(function() {
     var num_open_files = $( "#tabrow ul li" ).length();
     var next_file_num = num_open_files + 1;
     var id = "file" + next_file_num + "-wrapper";
     var li = "<li><a href='#"+id+"'>File "+next_file_num "</a></li>\n";
     var div = "<div id='file"+next_file_num+"-wrapper'>\n<div id='file"+next_file_num+"' contenteditable='contenteditable'> </div>\n</div>\n";

     tabs.find( ".ui-tabs-nav" ).append( li );
     tabs.append( div );
     tabs.tabs( "refresh" );
   }); 
});

