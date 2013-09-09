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
from us_phone_num import USPhoneNum

class USPhoneNumTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest. Phone numbers in the US are in the same format for mobiles.  '''

  def setUp(self):
    self.num = USPhoneNum.check_landline("")

  # Gibberish
  def test_vbad0(self):
    self.num = USPhoneNum.check_landline("%&5joyqehgn")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Not enough numbers and area code starts with 0 or 1
  def test_bad1(self):
    self.num = USPhoneNum.check_landline("011590456")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Area code wrong
  def test_bad2(self):
    self.num = USPhoneNum.check_landline("11159134284")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # x11 in the 2nd group of digits (illegal due to 311, 911)
  def test_middle3(self):
    self.num = USPhoneNum.check_landline("234-911-5678")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # /'s or something else in between groups
  def test_good4(self):
    self.num = USPhoneNum.check_landline("234/235/5678")
    correct_num = "234-235-5678"
    self.assertEqual( correct_num, self.num)

  # Too many spaces in between bits
  def test_good5(self):
    self.num = USPhoneNum.check_landline("234   235  5678")
    correct_num = "234-235-5678"
    self.assertEqual( correct_num, self.num)

  # All the numbers together
  def test_good6(self):
    self.num = USPhoneNum.check_landline("2342355678")
    correct_num = "234-235-5678"
    self.assertEqual( correct_num, self.num)

  # Done correct way
  def test_vgood7(self):
    self.num = USPhoneNum.check_landline("234-235-5678")
    correct_num = "234-235-5678"
    self.assertEqual( correct_num, self.num)

  # International dialling digit +1 prefixed
  def test_good8(self):
    self.num = USPhoneNum.check_landline("12342355678")
    correct_num = "+1 234-235-5678"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
