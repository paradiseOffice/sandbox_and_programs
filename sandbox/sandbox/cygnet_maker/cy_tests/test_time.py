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
from datetime import time
from time_conv import Time

class TimeTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.time = Time.check_time("")

  # A string
  def test_vbad0(self):
    self.time = Time.check_time("iutoeht")
    correct_time = time(00, 00, 00)
    self.assertEqual( correct_time, self.time)

  # An out of range whole number
  def test_bad1(self):
    self.time = Time.check_time("52304")
    correct_time = time(00, 00, 00)
    self.assertEqual( correct_time, self.time)

  # Two out of range whole numbers
  def test_bad2(self):
    self.time = Time.check_time("70 80")
    correct_time = time(23, 59, 00)
    self.assertEqual( correct_time, self.time)

  # hours, minutes and seconds formatted crap
  def test_middle3(self):
    self.time = Time.check_time("03 - 32/74")
    correct_time = time(3, 32, 59)
    self.assertEqual( correct_time, self.time)

  # : in between hours and minutes
  def test_good4(self):
    self.time = Time.check_time("03:32:50")
    correct_time = time(3, 32, 50)
    self.assertEqual( correct_time, self.time)

  # removing am or pm
  def test_vgood5(self):
    self.time = Time.check_time("3:35pm")
    correct_time = time(15, 35, 00)
    self.assertEqual( correct_time, self.time)


  def tearDown(self):
    self.time = ""
    correct_time = ""

if __name__ == '__main__':
  unittest.main()
