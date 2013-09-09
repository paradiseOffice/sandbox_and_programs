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
from uk_mobile_num import UKMobileNum

class UKMobileTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = UKMobileNum.check_uk_mobile("")

  # A gibberish string
  def test_vbad0(self):
    self.num = UKMobileNum.check_uk_mobile("hgioe%%$hejg")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # number that's less than 11
  def test_bad1(self):
    self.num = UKMobileNum.check_uk_mobile("7970175061")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Number 11 digits not starting with 0
  def test_bad2(self):
    self.num = UKMobileNum.check_uk_mobile("87792734912")
    correct_num = "07792 734912"
    self.assertEqual( correct_num, self.num)

  # Phone no all scrunched up
  def test_middle3(self):
    self.num = UKMobileNum.check_uk_mobile("07792734912")
    correct_num = "07792 734912"
    self.assertEqual( correct_num, self.num)

  # With -'s
  def test_good4(self):
    self.num = UKMobileNum.check_uk_mobile("07792-734912")
    correct_num = "07792 734912"
    self.assertEqual( correct_num, self.num)

  # With too much whitespace
  def test_good5(self):
    self.num = UKMobileNum.check_uk_mobile("077 92  734912 ")
    correct_num = "07792 734912"
    self.assertEqual( correct_num, self.num)

  # Perfect phone num
  def test_vgood6(self):
    self.num = UKMobileNum.check_uk_mobile("07792 734912")
    correct_num = "07792 734912"
    self.assertEqual( correct_num, self.num)

  # With international code on                                                      
  def test_int(self):                                                               
    self.num = UKMobileNum.check_uk_mobile("4407792734912")                         
    correct_num = "+44 07792 734912"                                             
    self.assertEqual( correct_num, self.num)   


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
