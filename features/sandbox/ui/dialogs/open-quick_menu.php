<?php
  /* The correct way to test whether a file was successfully uploaded is to use the function
is_uploaded_file(), as follows:
if (is_uploaded_file($_FILES['toProcess']['tmp_name'])) {
// successfully uploaded
}
Files are stored in the server’s default temporary files directory, which is specified in
php.ini with the upload_tmp_dir option. To move a file, use the move_uploaded_file()
function:
move_uploaded_file($_FILES['toProcess']['tmp_name'], "path/to/put/file/{$file}");
The call to move_uploaded_file() automatically checks whether it was an uploaded file.
When a script finishes, any files uploaded to that script are deleted from the temporary
directory.
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
     <title>appName - Paradise Office</title>
  
<script type="text/JavaScript"
src="../../../sandbox/sandbox/appearence/themes/default_pro_theme/jqueryui/development-bundle/jquery-1.9.1.js">
</script>
<script type="text/JavaScript"
src="../../../sandbox/sandbox/appearence/themes/default_pro_theme/jqueryui/development-bundle/ui/minified/jquery-ui.custom.min.js" ></script>
<script type="text/JavaScript" src="../../../sandbox/sandbox/appearence/themes/default_pro_theme/scripts/resize-screen.js">
</script>
<script type="text/JavaScript" src="../../../sandbox/sandbox/appearence/themes/default_pro_theme/scripts/file_port_tabs.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
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
});

  
    
</script>
     <link rel="stylesheet" type="text/css" href="../../../sandbox/sandbox/ui/layouts/reset.css" />
     <!-- choosing the screen size/type -->
     <link rel="stylesheet" type="text/css" href="../../../sandbox/sandbox/ui/layouts/screen_860x600.css" />
     <link rel="stylesheet" type="text/css" href="../../../sandbox/sandbox/ui/layouts/structure.css" />
     <link rel="stylesheet" type="text/css" href="../../../sandbox/sandbox/appearence/themes/default_pro_theme/styles/ui_themes.css" />
     <!-- jquery UI -->
     <link rel="stylesheet" type="text/css" href="../../../sandbox/sandbox/appearence/themes/default_pro_theme/jqueryui/css/default-pro/jquery-ui-1.10.3.custom.min.css" />

</head>
<body> 

<a href="#" id="open_quick-menu">Open</a>
<div id="open_dialog" class="dialog" title="Open File">
<form  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
  <label for="open_filename">Filename</label>
  <input type="file" id="open_filename" class="path" name="open_filename" />
  <br />
  <input type="submit" id="Open" name="Open" value="Open" />
</form>
</div>


</body>
</html>