<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Program Creator - Files</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
    <link rel="stylesheet" type="text/css" href="main.css" />
<script type="text/JavaScript"
src="/home/hazel/bin/jquery_dl/jquery-2.0.3.js">
</script>
<script type="text/JavaScript" src="/home/hazel/bin/jqueryUI_dl/jquery-ui-1.10.3/ui/jquery-ui.js" ></script>
<script type="text/JavaScript"></script>
</head>
<body id="app_creator-files">

<header>
  <h1>Program Creator</h1>
  <h2>Files</h2>
</header>

<form id="" method="post" action="">
  <fieldset id="file-types" >
    <table><thead>
        <th><h3>General Type</h3></th>
        <th><h3>Opens...</h3></th>
        <th><h3>Saves...</h3></th>
      </thead>
    <tr>
      <td><input type="radio" name="files" id="text" value="text" /><label for="text">Text</label></td>
      <td>Plain text files, any line ending or encoding.</td>
      <td>Plain text, capable of storing characters in languages other than English, like <strong>&#218;</strong>. </td>
    </tr>
    <tr>
      <td><input type="radio" name="files" id="words" value="words" /><label for="words">Formatted Text</label> </td>
      <td>Microsoft Word files, ODT files, web pages and plain text. </td>
      <td>Microsoft Word files, ODT files, web pages and unformatted text.</td>
    </tr>
    <tr>
      <td><input type="radio" name="files" id="accounting" value="accounting" /><label for="accounting">Accounting</label></td>
      <td>QIF files from online banking.</td>
      <td>QIF files from online banking, GnuCash XML files</td>
    </tr>
    <tr>
      <td><input type="radio" name="files" id="mail" value="mail" /><label for="mail">EMail</label></td>
      <td>Individual emails, text, IMAP or POP mailboxes.</td>
      <td>Zip archives (for a bunch of emails), text, web pages or saves to mailboxes set up.</td>
    </tr>
    <tr>
      <td><input type="radio" name="files" id="project" value="project" /><label for="project">Project Management</label></td>
      <td>Planner, Plan XML files. </td>
      <td>Plan XML files, ICS calendar file. </td>
    </tr>
    </table>
  </table>
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