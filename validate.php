<?php

if (isset($_POST["login"]))
{

}

if (isset($_POST["register"]))
{
  // regex user alphanumeric 4-20 chars with - or _
  // receive error for incorrect formatting.
  
  // pass: 8-64 chars any chars except ; or spaces. check password strength w/ js.
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>First jQuery UI example</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
<script type="text/JavaScript"
src="/home/hazel/bin/jquery_dl/jquery-2.0.3.js">
</script>
<script type="text/JavaScript" src="/home/hazel/bin/jqueryUI_dl/jquery-ui-1.10.3/ui/jquery-ui.js" ></script>
<script type="text/JavaScript">
</script>
</head>
<body>

<form method="POST" action="validate.php">
<label for="user"><input type="text" name="user" id="user" placeholder="username" />
<label for="password"><input type="password" name="password" id="password" />
<input type="submit" value="Log In" id="login" name="login" />
<a href="register.html" title="Create an account">Register</a>
</form>

</body>
</html>
