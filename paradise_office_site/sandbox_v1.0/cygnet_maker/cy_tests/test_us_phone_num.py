#!/usr/bin/python3.3

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
