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
from month import Month

class MonthTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest ''' 

  def setUp(self):
    self.month = Month.check_month("")

  def test_vbad0(self):
    self.month = Month.check_month("eiotyhwrt345")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_bad1(self):
    self.month = Month.check_month("Juneuronfs")
    correct_month = 6
    self.assertEqual( correct_month, self.month)

  def test_bad2(self):
    self.month = Month.check_month("14")
    correct_month = 12
    self.assertEqual( correct_month, self.month)

  def test_bad3(self):
    self.month = Month.check_month("0")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_middle4(self):
    self.month = Month.check_month("Janurarily")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_good5(self):
    self.month = Month.check_month("5")
    correct_month = 5
    self.assertEqual( correct_month, self.month)

  def test_good6(self):
    self.month = Month.check_month("December")
    correct_month = 12
    self.assertEqual( correct_month, self.month)

  def test_vgood7(self):
    self.month = Month.check_month("Fall")
    correct_month = 10
    self.assertEqual( correct_month, self.month)

  def tearDown(self):
    self.month = ""
    correct_month = 0

if __name__ == '__main__':
  unittest.main()
