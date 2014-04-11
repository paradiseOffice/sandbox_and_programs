<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Program Creator - Appearance</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
    <link rel="stylesheet" type="text/css" href="main.css" />
<script type="text/JavaScript"
src="/home/hazel/bin/jquery_dl/jquery-2.0.3.js">
</script>
<script type="text/JavaScript" src="/home/hazel/bin/jqueryUI_dl/jquery-ui-1.10.3/ui/jquery-ui.js" ></script>
<script type="text/JavaScript"></script>
</head>
<body id="app_creator-appearance">

<header>
  <h1>Program Creator</h1>
  <h2>Appearance</h2>
</header>

<form id="appearance-theme" method="post" action="01_appearance.php">
  <fieldset id="theme">
    <table><thead>
      <th colspan="3">
        <h3>Pick a Theme</h3>
      </th></thead>
    <tr class="images">
      <td>
        <img src="images/theme1.jpg" alt="theme1" />
      </td>
      <td colspan="2">
        <img src="images/theme2.jpg" alt="theme2" />
      </td>
      <!--<td>
        <img id="theme3" src="images/theme3.jpg" alt="theme3" />
      </td>-->
    </tr>
    <tr>
      <td>
        <input type="radio" name="theme" id="default-pro" value="default-pro" checked="checked" /><label for="default-pro">Default Pro</label>
      </td>
      <td colspan="2">
        <input type="radio" name="theme" id="access" value="accessibility" /><label for="access">Accessibility</label><br />
      </td>
      <!--<div id="3" class="cell">
        <input type="radio" id="sunshine" name="theme" value="sunshine" /><label for="sunshine">Sunshine</label>
        </div>-->
    </tr>
    </table>
  </fieldset>
  <fieldset id="size">
    <table><thead><th colspan="3">
        <h3>Size of Graphical Elements and Text</h3>
      </th></thead>
    <tr>
      <td colspan="3">
        <input type="radio" name="size" id="medium" value="medium" checked="checked" /><label for="medium">Medium </label>
      </td>
    </tr>
    <tr>
      <td>
        <input type="radio" name="size" id="large" value="large" /><label for="large">Large </label>
      </td>
      <td colspan="2">
        <p>The large size is also suitable for big monitors, above 19" (1600x900 resolution). Larger icons will also be used. </p>
      </td>
    </tr>
    </table>
  </fieldset>
  <fieldset id="devices" >
    <table><thead>
      <th colspan="3">
        <h3>Target Device for Program</h3>
      </th>
    </thead>
    <tr>
      <td>
        <input type="checkbox" name="devices" id="smartphone" value="smartphone" multiple="multiple"  /><label for="smartphone">Smartphone </label>
      </td>
      <td colspan="2">
        <p>This can be a Windows 7 or 8 phone, IPhone or Android. It may be slower on 'phones that are more than 1-2 years old. </p>
      </td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="devices" id="tablet" value="tablet" multiple="multiple"  /><label for="tablet">Tablet </label>
      </td>
      <td colspan="2">
       <p>Any size, either 7&quot; or 10&quot; </p>
      </td>
    </tr>
    <tr>
      <td>
        <input type="checkbox" name="devices" id="PC" value="PC" multiple="multiple"  /><label for="PC">PC (Desktop or Laptop) </label>
      </td>
      <td>
        <p>Any PC that was built in the past 5 years. Supported browsers include: </p>
      </td>
      <td>
        <ul>
          <li>Firefox 6+</li>
          <li>Internet Explorer 9+</li>
          <li>Safari 4+</li>
          <li>Chrome or Chromium</li>
          <li>Opera 10+</li>
        </ul>
      </td>
    </tr></table>
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