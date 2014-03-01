<?php

  /*******************************************************************
 * 
 * Paradise Office 
 * Copyright (c) 2013 Hazel Windle
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 *  Email me at: lead-dev@linux-paradise.co.uk if you have any problems or questions.
 *
************************************************************************/

  require_once '/home/web_includes/db_connect.php';
  require_once '/home/web_includes/functions.php';
  include_once '/home/web_includes/login.php';
  
  sec_session_start(); // starting secure session.
  
  if (isset($_POST['user'], $_POST['passCipher']))
  {
    $enteredUser = trim($_POST['user']);
    $enteredPass = trim($_POST['passCipher']);
    
    if (login($enteredUser, $enteredPass, $mysqli) == true)
    {
      // Login success
      header('Location: dashboard.php');
    }
    else
    {
      // Login failed
      header('Location: error.php');
    }
  }
  else
  {
    // The correct POST variables weren't sent
    echo 'Invalid POST variables in the request';
  }

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Login</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />

  <script type="text/JavaScript" src="scripts/login_js.js" ></script>
<style type="text/css">
form, label, input { display: block; }
input[type="submit"] { border: 2px solid blue; border-radius: 7px; }
form a, label { font-size: 200%; color: #1c1c1c; }
</style>
</head>
<body>

<form method="POST" action="<?php echo esc_url($_SERVER['PHP_SELF']); ?>">
<label for="user">User</label>
<input type="text" name="user" id="user" placeholder="username" />
<label for="password">Password</label>
<input type="password" name="password" id="password" />
<input type="submit" value="Log In" id="login" name="login" onclick="return hash_password_client(this.form, this.form.password);" />
<a href="register.html" title="Create an account">Register</a>
</form>

</body>
</html>
