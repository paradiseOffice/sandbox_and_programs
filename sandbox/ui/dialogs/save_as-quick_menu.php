<?php
  0. Get filename from user, strip illegal chars. 
  1. Save html in current file tab to selected filename, file type, encoding.
  2. Provide a download link and add to the a href link for save as, 
  3. download as an attachment to stop the browser merely displaying the file.
  
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

<a href="#" id="save-as-quick_menu">Save</a>
<div id="save-as_dialog" class="dialog" title="Save File As">
<form  action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
  <label for="save-as_filename">Filename</label>
  <input type="text" id="save-as_filename" class="path" name="save-as_filename" required="required" />
  <br />
  <a href="#" id="save-as_advanced_btn">Advanced</a>
  <div id="save-as_advanced" class="advanced_dialog">
  file encoding etc
  </div>
  <input type="submit" id="Save-as" name="Save-as" value="Save As" />
</form>
</div>


</body>
</html>