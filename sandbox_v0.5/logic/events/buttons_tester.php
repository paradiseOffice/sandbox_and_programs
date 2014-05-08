<?php
    print_r($_POST);
    $selection = $_POST['selection'];
    $reverse = strrev($selection);
    $num = 3 + 4;

    print("<table border='20'><tr><td>" . $reverse . "</td><td>Something else" . $num . "</td></tr></table>");
       
?>
