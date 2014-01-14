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
  <style type="text/css">
    .bug { border: 1px solid black; padding: 0.8em; }
    #descr { margin: 0 auto; background: #ccc; }
    #computer { color: #000080; font-weight: bold; }
    .statuses { border: 1px solid maroon; margin: 0.3em; font-family: arial, sans-serif; }
    #status { padding-right: 1em;  }
    #severity { padding: 0.5em; }
  </style>
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
    <h2>Trouble In Paradise</h2>
    <?php
      require_once('/home/hazel/Exercises/PHP/variables.inc');
      if ($db = pg_connect("$string")) {
        $select = "select * from bugs GROUP BY severity";
        $allrows = pg_query($db, $select);
        if (pg_num_rows($allrows) > 0) {
          print("<div class=\"bug\">\n");
        while ($row = pg_fetch_object($allrows)) {
          print("<h3>$row->id . $row->program - $row->problem</h3>\n");
          print("<div id=\"descr\">$row->description</div>\n");
          print("<div id=\"computer\">$row->os $row->browser $row->system  $row->resolution</div>\n");
          print("<table class=\"statuses\">\n<tr><td id=\"status\">$row->status</td>\n<td id=\"severity\">$row->severity</td>
  </tr>\n</table>\n");
        }
        print("</div>\n");
      } else {
        print("<p class=\"error\">No bugs found.</p>");
      }
    } else {
      print("<p class=\"error\">Connection to the database has failed.</p>");
    }

?>
</div><!-- content -->
<div class="footer">
  <p>All content made by Hazel Windle &copy;, 2013.</p>
</div>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script></script>
</body>
</html>
