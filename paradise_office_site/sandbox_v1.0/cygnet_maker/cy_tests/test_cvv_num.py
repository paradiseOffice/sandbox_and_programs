#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from cvv_credit_card import CreditCardCVV

class CVVnumTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = CreditCardCVV.check_cvv_num("")

  # Gibberish string
  def test_vbad0(self):
    self.num = CreditCardCVV.check_cvv_num("oiuerewh")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Too few numbers
  def test_bad1(self):
    self.num = CreditCardCVV.check_cvv_num("90")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Too many numbers
  def test_middle2(self):
    self.num = CreditCardCVV.check_cvv_num("8905")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # A correct number
  def test_good3(self):
    self.num = CreditCardCVV.check_cvv_num("756")
    correct_num = "756"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
