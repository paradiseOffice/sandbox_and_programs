#!/usr/bin/python3.3

'''
  Paradise Office Cygnet API
Copyright (c) 2013 Hazel Windle

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Email me at: lead-dev@linux-paradise.co.uk if you have any problems or questions.
'''

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from short_text import ShortText

class ShortTextTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.text = ShortText.check_text("")

  # No text null
  def test_vbad0(self):
    self.text = ShortText.check_text("")
    correct_text = ""
    self.assertEqual( correct_text, self.text)

  # Numbers and special chars including ;
  def test_bad1(self):
    self.text = ShortText.check_text("|4579^%%)%^&*_;")
    correct_text = "4579^%%)%&*_"
    self.assertEqual( correct_text, self.text)

  # A rouge SQL statement
  def test_bad2(self):
    self.text = ShortText.check_text("; DROP tables ;")
    correct_text = "Drop tables"
    self.assertEqual( correct_text, self.text)

  # Some punctuation like "
  def test_middle3(self):
    self.text = ShortText.check_text("\"thunder\"=")
    correct_text = "'thunder'="
    self.assertEqual( correct_text, self.text)

  # A short number 
  def test_good4(self):
    self.text = ShortText.check_text("43")
    correct_text = "43"
    self.assertEqual( correct_text, self.text)

  # Over 100 characters long
  def test_good5(self):
    self.text = ShortText.check_text("Something, something else Something, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something else")
    correct_text = "Something, something else Something, something elseSomething, something elseSomething, something els"
    self.assertEqual( correct_text, self.text)

  # An OK text string
  def test_vgood(self):
    self.text = ShortText.check_text("Stop bloody lightning")
    correct_text = "Stop bloody lightning"
    self.assertEqual( correct_text, self.text)


  def tearDown(self):
    self.text = ""
    correct_text = ""

if __name__ == '__main__':
  unittest.main()
