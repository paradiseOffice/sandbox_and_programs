<?php

function save_file($filename) 
{
    $dir = "/home/uploads/";
    $filename = "testfile.txt"; // DEBUG
    $filepath = $dir . $filename;
    
    if(!$filename)
    {
	// File doesn't exist, output error
	die("File $filename not uploaded.");
    }
    else
    {
	header('Content-Description: File Transfer');
	header('Content-Disposition: attachment; filename="$filepath"');
	/*
	header('Content-Type: application/octet-stream');
	header('Content-Transfer-Encoding: binary');
	header('Expires: 0');
	header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
	header('Pragma: public');
	*/
	readfile("$filepath");  // creates the file .. BUG called $filepath
	exit;
    }
} // end of save function

save_file("");

?>
<!DOCTYPE html class="no-js">
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta keyword="author" value="Hazel Windle" />
  <meta keyword="creation-date" value="20140120" />
     <title>Jotter - Paradise Office</title>
  
<script type="text/JavaScript" src="../../../js_lib/jquery-1.9.1.js"></script>
<script type="text/javascript" src="../../../js_lib/modernizr.custom.min.js"></script>
<script type="text/javascript" src="../../../js_lib/colour_picker/spectrum.js"></script>
<noscript>
<h2>Javascript not present</h2><p>Please turn on javascript by altering your web browser settings. <a target="blank" href="http://www.btny.purdue.edu/enablejavascript.html">Additional help for turning this setting on</a>.</p>
</noscript>
<script type="text/JavaScript" src="../../../js_lib/jqueryui-default-pro/js/jquery-ui-1.10.3.custom.js" ></script>
<script type="text/JavaScript" src="../../../js_lib/resize-screen.js"></script>
<script type="text/JavaScript" src="../../sandbox/logic/file_port/file_port_tabs.js"></script>
<script type="text/javascript" src="../../sandbox/appearance/default_pro_theme/scripts/widgets.js"></script>
<script type="text/JavaScript" src="../../sandbox/logic/file_port/open/new.js"></script>

     <link rel="stylesheet" type="text/css" href="../../sandbox/ui/layouts/reset.css" />
     <!-- choosing the screen size/type -->
     <link rel="stylesheet" type="text/css" href="../../sandbox/ui/layouts/screen_860x600.css" />
     <link rel="stylesheet" type="text/css" href="../../sandbox/ui/layouts/structure.css" />
     <link rel="stylesheet" type="text/css" href="../../../js_lib/colour_picker/spectrum.css" />
     <link rel="stylesheet" type="text/css" href="../../sandbox/ui/dialogs/dialogs.css" />
     <link rel="stylesheet" type="text/css" href="../../sandbox/appearance/default_pro_theme/styles/widgets.css" />
     <link rel="stylesheet" type="text/css" href="../../sandbox/appearance/default_pro_theme/styles/ui_themes.css" />
     <!-- jquery UI -->
     <link rel="stylesheet" type="text/css" href="../../../js_lib/jqueryui-default-pro/css/default-pro/jquery-ui-1.10.3.custom.css" />
     <script type="text/javascript">
        
     </script>
</head>
<body onload="checkWidth();">


</body>
</html>