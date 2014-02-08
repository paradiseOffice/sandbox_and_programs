<?php
  
  $errors = '';
  $system = $_POST['system'];
  $os = $_POST['os'];
  $browser = $_POST['browser'];
  $resolution = $_POST['resolution'];
  $problem = $_POST['problem'];
  $program = $_POST['program'];
  $description = trim($_POST['description']);
  $status = trim($_POST['status']);
  $severity = trim($_POST['severity']);

  if(
    empty($_POST['system']) ||
    empty($_POST['os']) ||
    empty($_POST['browser']) ||
     empty($_POST['problem']) ||
     empty($_POST['resolution']) ||
    empty($_POST['description']) ||
    empty($_POST['status']) ||
    empty($_POST['severity']) )
{
    $errors .= "\n Please fill in all fields.";
}
     // require_once('/home/hwindle/Exercises/PHP/variables.inc'); selinux prob
    $db = mysqli_connect('127.0.0.1', 'hazel', '4935ujheo', 'paradise');

 if ($_POST['send-button']) {
    $insert = "INSERT INTO bugs(problem,system,os,browser,resolution,program,description,status,severity) VALUES ('{$problem}', '{$system}', '{$os}', '{$browser}', '{$resolution}', '{$description}', '{$status}', '{$severity}' ) ";
    mysqli_query($db, $insert);
    $errors .= "\n Your bug was successfully saved.";
  } 
  else 
  {
    $errors .= "\n Unable to insert record!" . mysqli_error_list($db);
  }
    
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Paradise Software - Bug Reporter</title>
  <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8">
  <meta name="robots" content="index,follow" />
  <meta name="author" content="Hazel Windle" />
  <meta name="description" content="Series of small programs designed to ease the creation of web apps. Office applications based on this system to come soon." />
  <meta name="keywords" content="open source, web, free software, office suite, toolkit" />
  <link rel="stylesheet" href="styles/global_screen.css" media="screen" />
  <link rel="stylesheet" href="styles/spec.css" media="screen" />
  <link rel="stylesheet" href="styles/forms.css" media="screen" />
</head>

<body class="spec" id="sandbox">

<a href="../index.html"><div class="masthead">
 <h1>Paradise Software</h1>
 <h2>Created with privacy and openess in mind </h2>
 <img src="ui/banner_colour.png" alt="palm trees and a beach" height="150" width="900" />
</div></a>
<div class="toplinks">
  <div id="features_link"><a href="../feature_tracker.html" title="features">Features</a></div>
  <div id="dev_link"><a href="../development.html" title="Development Plans">Development</a></div>
  <div id="doc_link"><a href="../doc_index.html" title="Documentation">Documentation</a></div>
  <div id="contact_link"><a href="../contact.html" title="contact and bug reports">Contact</a></div>
  <a href="https://twitter.com/LinuxParadise" id="twit" title="twitter"><img src="ui/twitter.png" width="80" height="60" alt="Twitter" /></a>
  <a href="https://diasp.org/u/paradiseoffice" id="diasp" title="diaspora"><img src="ui/diaspora.png" width="80" height="60" alt="Diaspora" /></a>
  <a href="https://github.com/paradiseOffice/sandbox_and_programs.git" id="git" title="github"><img src="ui/github.png" width="80" height="60" alt="Github" /></a>

</div>

<div class="content">

  <div class="main-content">
  <div id="main_content">
    <h2>Developer's Bug Reporter</h2>
 <form action="bug_report_process.php" method="POST">
    <fieldset id="details">
      <div class="row" id="1">
    <label for="problem">Bug Title</label>
    <input type="text" name="problem" id="problem" placeholder="Problem..." />
</div>
     <div class="row" id="2">
     <label for="os">operating system</label>
     <select id="os" name="os">
        <option value="Windows XP">Windows XP</option>
        <option value="Windows Vista">Windows Vista</option>
        <option value="Windows 7">Windows 7</option>
        <option value="Windows 8">Windows 8</option>
        <option value="IOS">Mac operating system (Lion etc)</option>
        <option value="Unix">Unix (FreeBSD etc)</option>
        <option value="Linux">Linux</option>
        <option value="Android 2.3">Android 2.3 or 3.x</option>
    <option value="Android 4">Android 4 </option>
    </select></div>
    <div class="row" id="3">
    <label for="browser">web browser</label>
    <select id="browser" name="browser">
      <option value="Internet Explorer 9">Internet Explorer 9</option>
      <option value="Internet Explorer 10">Internet Explorer 10</option>
      <option value="Firefox">Firefox 6+</option>
      <option value="Safari">Safari</option>
      <option value="Opera">Opera on a PC</option>
      <option value="Opera phone">Opera on a smartphone</option>
      <option value="Chrome">Chrome or Chromium</option>
      <option value="Chrome phone">Chrome phone</option>
      <option value="Android browser">Default Android browser</option>
      <option value="other">Other browser</option>
    </select></div>
    <div class="row" id="4">
      <label for="system">Computer type</label>
      <select id="system" name="system">
        <option value="Mac">Mac Desktop PC</option>
        <option value="IPad">IPad</option>
        <option value="IPhone">IPhone</option>
        <option value="Android tablet">Android tablet</option>
        <option value="Android phone">Android smartphone</option>
        <option value="PC">Desktop or laptop PC</option>
      </select>
    </div>
    <div class="row" id="5">
      <label for="resolution">Resolution</label>
    <select id="resolution" name="resolution">
        <option value="430x320">Small phone</option>
        <option value="560x420">Medium phone</option>
        <option value="800x600">800 x 600</option>
        <option value="1024x768">1024 x 768</option>
        <option value="1280x768">1280 x 768</option>
        <option value="1280x1024">1280 x 1024</option>
        <option value="1440x900">1440 x 900</option>
        <option value="1600x1200">1600 x 1200</option>
        <option value="1920x1600">1920 x 1600</option>
        <option value="largest">larger than 1920</option>
     </select>
      <label for="program">Program</label>
      <select id="program" name="program">
        <option value="sandbox 1.0">Sandbox v1.0</option>
        <option value="Pages">Pages</option>
        <option value="Ledger">Ledger</option>
        <option value="Jotter">Jotter</option>
        <option value="Postbox">Postbox</option>
        <option value="Plantt">Plantt</option>
     </select></div></fieldset>
      <label for="description">Description</label>
      <textarea name="description" id="description" placeholder="Type bug details into here"></textarea>
      <div class="row" id="6">
	<label for="status">Status</label>
	<select id="status" name="status">
	  <option value="New">New</option>
	  <option value="In Progress">In Progress</option>
	  <option value="Fixed">Fixed</option>
	</select>
	<label for="severity">Severity</label>
	<select id="severity" name="severity">
	  <option value="Critical">Critical</option>
	  <option value="bad">Bad</option>
	  <option value="back-end">Back-end</option>
	  <option value="cosmetic">Cosmetic</option>
 	</select>
      </div>
      <input type="submit" name="send-button" id="send-button" value="Send" />
    </form>
 
   </div>


</div><!-- content -->
<div class="footer">
  <p>All content made by Hazel Windle &copy;, 2013.</p>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script></script>
</body>
</html>