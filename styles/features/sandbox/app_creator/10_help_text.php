<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Program Creator - Help Text</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
    <link rel="stylesheet" type="text/css" href="main.css" />
<script type="text/JavaScript"
src="/home/hazel/bin/jquery_dl/jquery-2.0.3.js">
</script>
<script type="text/JavaScript" src="/home/hazel/bin/jqueryUI_dl/jquery-ui-1.10.3/ui/jquery-ui.js" ></script>
<script type="text/JavaScript"></script>
</head>
<body id="app_creator-help-text">

<header>
  <h1>Program Creator</h1>
  <h2>Help Text</h2>  
</header>

<form id="menu" method="post" action="">
  <h3>Create a New Menu</h3>
  <input type="text" name="menu-title" maxlength="20" placeholder="Title" />
  <span class="help">Examples include File, Edit, Tools</span><br /> 
  <fieldset id="menu-items">
    <input type="text" name="menu-item1" maxlength="20" placeholder="item1" />
    <label for="item1-acc">Alt Key</label><input type="text" name="item1-acc" id="item1-acc" maxlength="1" placeholder="1" /><br />
  
  </fieldset>
  <input type="submit" id="next" value="Next" /><input type="reset" id="clear" value="Clear" />
</form>

<footer>
<div id="progress_links">
  <a href="01_appearance.php" title="Choose a theme and text size">Appearance</a>
  <a href="02_files.php" title="What kind of files do you want to use?">Files</a>
  <a href="03_menus.php" title="Create menu entries">Menus</a>
  <a href="04_common_bar.php" title="Add larger icons for commonly used tasks">Common Tasks</a>
  <a href="05_tool_box.php" title="Add icons to the tool boxes">Tool Box</a>
  <a href="06_add_features.php" title="Choose features and the graphical items that start them">Features</a>
  <a href="07_quick_menus.php" title="Make small dialogs for smaller amounts of input">Quick Dialogs</a>
  <a href="08_dialogs.php" title="Create full page dialogs with space for help texts">Dialogs</a>
  <a href="09_links.php" title="Hook up features to dialog graphical elements to make buttons work when clicked">Links</a>
  <a href="10_help_text.php" title="Customise the default help texts, and choose how much help to display">Help Text</a>
  <a href="11_hosting_options.php" title="Where will your program live?">Hosting</a>
</div>
</footer>

</body>
</html>