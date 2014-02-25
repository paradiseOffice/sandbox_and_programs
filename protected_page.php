<?php
  require_once ('../../web_includes/db_connect.php');
  require_once ('../../web_includes/functions.php');
  require_once ('../../web_includes/encrypt_string.php');
  
  sec_session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Dashboard - Paradise Office</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
  <script type="text/JavaScript" src="scripts/login_js.js" >  </script>
</head>
<body>
<?php if (login_check($mysqli) == true) : ?>
  <p>Welcome <?php echo htmlentities($_SESSION['username']); ?>. </p>

  
<?php else : ?>
<p class="error">You can't access this page! </p>  
<?php endif; ?>
</body>
</html>