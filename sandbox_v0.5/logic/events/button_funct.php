<?php 

  if (isset($_POST['text']) )
  {
    $text = htmlentities($_POST['text']);
    return $text;
  }
?>
