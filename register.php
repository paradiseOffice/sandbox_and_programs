<?php
  require_once ('../../web_includes/db_connect.php');
  require_once ('../../web_includes/functions.php');
  require_once ('../../web_includes/encrypt_string.php');

  // Plonk these files two dirs out of web root somewhere - in a folder called web_includes.

  // register.php - for creating a new user.
if (isset($_POST['register']))
{
  if (( preg_match('/[a-zA-Z]+/', trim($_POST['fName']))) && ( strlen(trim($_POST['fName'])) <= 20 ))
  {
    $fName = trim($_POST['fName']);
  }
  else
  {
    $errors = "<p>First name isn't using the letters a-z. </p>";
    $fName = "";
  } // First name check
  
  if (( preg_match('/[a-zA-Z\- +/', trim($_POST['lName']))) && (strlen(trim($_POST['lName'])) <= 25 ))
  {
    $lName = trim($_POST['lName']);
  }
  else
  {
    $errors .= "<p>Last name isn't using the letters a-z or - / spaces. </p>";
    $lName = "";
  }  // last name check
  
  if (( preg_match('/[a-zA-Z0-9\- +/', trim($_POST['company']))) && ( strlen(trim($_POST['company'])) <= 50 ))
  {
    $company = trim($_POST['company']);
  }
  else
  {
    $errors .= "<p>Company has weird special characters in the name. Use A-z, digits, or spaces and -'s only please. </p>";
    $company = "";
  } // company checking
  $email = strtolower(trim($_POST['email'])); // For people who put capitals in emails.
  
  if ((preg_match('/[^a-z0-9\-_]+@[a-z0-9\-_]+.[a-z.]*/', $email )) && (strlen($email) <= 100 ) )
  {
    /* spotted a bug in the above reg expression - . should have been optional for the top level domain co.uk/com part.  */
    $email_correct = $email;
  }
  else
  {
    $errors .= "<p>This email address is in the wrong format. </p>\n";
    $email_correct = "";
  } // email check
  
  if ( (preg_match('/[a-zA-Z0-9\-_]+/', trim($_POST['user']))) && (strlen(trim($_POST['user'])) <= 25 ) )
  {
    $uName = trim($_POST['user']);
  }
  else
  {
    $errors .= "<p>This username contains non alphanumeric characters, or spaces. </p>";
    $uName = "";
  } // username check
  if (trim($_POST['password1']) == trim($_POST['password2']))
  {
    if (preg_match('/[a-zA-Z0-9\-_*^!$]......+', trim($_POST['password1'])))
    {
      $password = trim($_POST['password1']);
      $cipher_pass = encrypt_string($password);
      /* encrypt_string uses two different hash algorithms, so the password can't be decrypted into plaintext. The hash algorithms used aren't md5 or sha1 as those can be cracked */
    }
    else
    {
      $errors .= "<p>Password is under 7 characters or has a weird punctuation character in it or a space. A-Z, numbers, '- _ * ^ ! $' are allowed. </p>";
      $password = "";
    }
  } 
  else
  {
    $errors .= "<p>These passwords must match. </p>";
  } // password check and encrypt.
  $dupUser = "SELECT uName, email FROM users WHERE uName = '{$uName}' OR email = '{$email}' ";
  $testResults = $mysqli->query($dupUser);
  $dupValue = $mysqli->affected_rows;
  if (($uName != "") && ($password != "") && ($fName != "") && ($lName != "") && ($email != ""))
  {

    if ($dupValue > 0)
    {
      $errors .= "<p>A user already exists using that user name or email address. </p>";
    }
    else
    {
      if ( humanOrNot())
      {
        // humanOrNot asks a simple text based math question and is like a captcha
        insertUser($fName, $lName, $email, $company, $uName, $password);
        header("Location: login.php");
      }
      else
      {
        $errors .= "<p>Please don't take this the wrong way, but are you a 'spam bot'? <br />Please try signing up again. </p>";
      }
    }
    $errors .= "Oops, one or more of the required boxes are empty. ";
  } // checking whether things are empty

} // end of register  'if'

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
    <title>Register - Paradise Office</title>
    <meta name="" content="" />
    <link rel="stylesheet" type="text/css" href="lib-jqueryui/css/pink/jquery-ui-1.10.3.custom.css" />
  <script type="text/JavaScript" src="scripts/login_js.js" > </script>
</head>
<body>

<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
<label for="fName">First Name</label>
<input type="text" name="fName" id="fName" placeholder="First name" /><br />
<label for="lName">Last Name</label>
<input type="text" name="lName" id="lName" placeholder="Last name" /><br />
<label for="company">Company</label>
<input type="text" name="company" id="company" placeholder="company" /><br />
<label for="email">Email</label>
<input type="email" name="email" id="email" placeholder="name@webaddress.com" /><br />
<label for="user">User Name</label>
<input type="text" name="user" id="user" placeholder="username" /><br />
<label for="password1">Enter Password</label>
<input type="password" name="password1" id="password1" /><br />
<!-- this gets encrypted in Javascript, sha512 before getting sent to the server's PHP file -->
<label for="password2">Same Password Again</label>
<input type="password" name="password2" id="password2" /><br />
<input type="submit" value="Register" id="register" name="register" />
</form>

</body>
</html>
