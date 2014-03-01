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
  // humanTest.php - Tests whether the user is human or a bot. Broken at the moment ... fix it up into a separate form or use Captcha's.


  $pics[0] = "humanTest/unicorn.jpg";
  $pics[1] = "humanTest/dolphin.jpg";
  $pics[2] = "humanTest/cow.jpg";
  $pics[3] = "humanTest/duck.jpg";
  $pics[4] = "humanTest/spider.jpg";
  $pics[5] = "humanTest/dog.jpg";
  $pics[6] = "humanTest/snail.jpg";
  $pics[7] = "humanTest/dragon.jpg";
  $pics[8] = "humanTest/rabbit.jpg";

  $numbers[0] = "zero"; 
  $numbers[1] = "one";
  $numbers[2] = "two";
  $numbers[3] = "three";
  $numbers[4] = "four";
  $numbers[5] = "five";
  $numbers[6] = "six";
  $numbers[7] = "seven";
  $numbers[8] = "eight";
  $numbers[9] = "nine";
  $numbers[10] = "ten";

  
  
  if (isset($_POST['register']))
  {
    $randAnimal = array_rand($pics); // Let's collect a random creature.
    $firstNum = array_rand($numbers); // And two random numbers.
    $secondNum = array_rand($numbers);
    
    $animal = trim(strtolower($_POST['animal']));
    $creatureShown = $pics[$randAnimal];
    $correctAnimal = strstr($creatureShown, $animal);
    print("creatureShown: $creatureShown, $animal correct: $correctAnimal ");
    $userMaths = hash('md5', hash('sha512', $_POST['userMaths']));
    if (($correctAnimal > 0) && ($userMaths === $_POST['mathsAnswer']))
    {
      $human = true;
      print("human: $human");
    }
    else
    {
      $human = false;
      print("human: $human");
    }
  }
print("<fieldset id='human'>");
print("<div class='creature'><h4>What creature is this? </h4><img width='250' height='150' src='$pics[$randAnimal]' /></div>");
print("<input type='text' name='animal' id='animal' maxlength='15' placeholder='animal' />");
print("<p class='math'>What is $numbers[$firstNum] plus $numbers[$secondNum]?</p>");
print("<input type='number' name='userMaths' id='userMaths' placeholder='0' />");
print("<input type='hidden' name='mathsAnswer' id='mathsAnswer' value='hash(\'md5\', hash(\'sha512\', ($firstNum + $secondNum)))' />");
print("</fieldset>"); 

?>
  
