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
  /* encrypt_string.php 
  * : contains the functions encrypt_string($string).
  * 
  */

function encrypt_string($string)
{
  $salt = "40_gvcTUcow*_$";
  $pepper = "4690e4fu�S";
  $string = trim($string);
  $string = $salt . $string . $pepper;
  $ciphertext = hash('sha512', hash('whirlpool', $string));  
  // debug
  // $length = strlen($ciphertext);
  // debug
  return $ciphertext;
} // end of function encrypt_string($string)