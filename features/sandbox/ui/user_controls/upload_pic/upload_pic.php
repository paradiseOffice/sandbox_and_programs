<?php

$upload_dir = '/home/uploads/';
$allowed_ext = array('jpg','jpeg','png','gif', 'JPG','JPEG','PNG', 'svg');
if (isset($_POST['upload']))
{
    if(strtolower($_SERVER['REQUEST_METHOD']) != 'post')
    {
        $errors = 'Error! Wrong HTTP method!';
        exit();
    }
    if(array_key_exists('picture',$_FILES) && $_FILES['picture']['error'] == 0 )
    {
        $picture = $_FILES['picture'];
        if(!in_array(get_extension($picture['name']),$allowed_ext))
        {
            $errors .= 'Only common picture files are allowed, (e.g. jpg, svg, png).';
            exit();
        }   
        // Move the uploaded file from the temporary
        // directory to the uploads folder:
        if(move_uploaded_file($picture['tmp_name'], $upload_dir.$picture['name'])){
            $filename = $upload_dir;
            $filename .= $picture['name'];
            $errors .= "<p class='info'>Filename: $filename </p>";
        }
    }
    else
    {
        $errors = '<p class="error">The upload went wrong somehow. </p>';
        exit();
    }
} // end of upload bit

function get_extension($file_name)
{
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
     $(function() {
     
     });
     </script>
     <style type="text/css">
        .upload_pic { }
        input#picture { }
        input.upload { }
        img.pic_upload_preview { }
     </style>
</head>
<body onload="checkWidth();">

<div class="upload_pic">
<form method='post' action="<?php echo $_SERVER['PHP_SELF']; ?>" enctype='multipart/form-data'>
    <input type='file' name='picture' id='picture' placeholder="Picture" />
    <input type='submit' name="upload" id="upload" class="upload" value='Add Image' />
</form>
<img width="200" height="100" class="pic_upload_preview" src="<?php echo $filename; ?>" />
</div>
<div><?php echo $errors; ?></div>

</body>
</html>