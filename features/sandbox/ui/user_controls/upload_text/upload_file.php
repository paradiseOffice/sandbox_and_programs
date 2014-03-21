<?php

$demo_mode = false;
$upload_dir = 'uploads/';
$allowed_ext = array('jpg','jpeg','png','gif');

if(strtolower($_SERVER['REQUEST_METHOD']) != 'post'){
    exit_status('Error! Wrong HTTP method!');
}

if(array_key_exists('pic',$_FILES) && $_FILES['pic']['error'] == 0 ){

    $pic = $_FILES['pic'];

    if(!in_array(get_extension($pic['name']),$allowed_ext)){
        exit_status('Only '.implode(',',$allowed_ext).' files are allowed!');
    }   

    if($demo_mode){

        // File uploads are ignored. We only log them.

        $line = implode('       ', array( date('r'), $_SERVER['REMOTE_ADDR'], $pic['size'], $pic['name']));
        file_put_contents('log.txt', $line.PHP_EOL, FILE_APPEND);

        exit_status('Uploads are ignored in demo mode.');
    }

    // Move the uploaded file from the temporary
    // directory to the uploads folder:

    if(move_uploaded_file($pic['tmp_name'], $upload_dir.$pic['name'])){
        exit_status('File was uploaded successfuly!');
    }

}

exit_status('Something went wrong with your upload!');

// Helper functions

function exit_status($str){
    echo json_encode(array('status'=>$str));
    exit;
}

function get_extension($file_name){
    $ext = explode('.', $file_name);
    $ext = array_pop($ext);
    return strtolower($ext);
}

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
     <style type="text/css">
     
     </style>
</head>
<body onload="checkWidth();">


<form method='post' action='upload2.php' enctype='multipart/form-data'>
Select a JPG, GIF, PNG or TIF File:
<input type='file' name='filename' size='10' />
<input type='submit' value='Upload' /></form>

</body>
</html>
