#!/usr/bin/python3.3

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

  # With international code on
  def test_int(self):
    self.num = UKPhoneNum.check_landline("4401159134284")
    correct_num = "+44 (0115) 913 4284"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
