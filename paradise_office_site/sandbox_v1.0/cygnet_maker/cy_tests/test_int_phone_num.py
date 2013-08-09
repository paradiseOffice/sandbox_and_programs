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
from uk_phone_num import UKPhoneNum

class UKPhoneNumTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = UKPhoneNum.check_landline("")

  # Gibberish
  def test_vbad0(self):
    self.num = UKPhoneNum.check_landline("%&5joyqehgn")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Not enough numbers
  def test_bad1(self):
    self.num = UKPhoneNum.check_landline("0115904456")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Area code wrong
  def test_bad2(self):
    self.num = UKPhoneNum.check_landline("41159134284")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # - in between bits
  def test_middle3(self):
    self.num = UKPhoneNum.check_landline("0115-913-4284")
    correct_num = "(0115) 913 4284"
    self.assertEqual( correct_num, self.num)

  # Too many spaces in between bits
  def test_good4(self):
    self.num = UKPhoneNum.check_landline("0115   913  4284")
    correct_num = "(0115) 913 4284"
    self.assertEqual( correct_num, self.num)

  # All the numbers together
  def test_good5(self):
    self.num = UKPhoneNum.check_landline("01159134284")
    correct_num = "(0115) 913 4284"
    self.assertEqual( correct_num, self.num)

  # Done correct way
  def test_vgood6(self):
    self.num = UKPhoneNum.check_landline("0115 913 4284")
    correct_num = "(0115) 913 4284"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
