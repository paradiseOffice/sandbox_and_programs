#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from credit_card_num import CreditCard

class CreditCardTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = CreditCard.check_credit_card_num("")

  # String 
  def test_vbad0(self):
    self.num = CreditCard.check_credit_card_num("UTOEDgnjs")
    correct_num = ""
    self.assertEqual( correct_num, self.num )

  # Too few nums
  def test_bad1(self):
    self.num = CreditCard.check_credit_card_num("75019")
    correct_num = ""
    self.assertEqual( correct_num, self.num )

  # All zeros
  def test_bad2(self):
    self.num = CreditCard.check_credit_card_num("0000000000000000")
    correct_num = ""
    self.assertEqual( correct_num, self.num )

  # All ran together numbers
  def test_middle3(self):
    self.num = CreditCard.check_credit_card_num("1024904822335471")
    correct_num = "1024-9048-2233-5471"
    self.assertEqual( correct_num, self.num )

  # -'s 
  def test_good4(self):
    self.num = CreditCard.check_credit_card_num("1024-9048-2233-5471")
    correct_num = "1024-9048-2233-5471"
    self.assertEqual( correct_num, self.num )

  # Spaces (too many) in between each group of 4
  def test_good5(self):
    self.num = CreditCard.check_credit_card_num("1024  9048  2233 5471")
    correct_num = "1024-9048-2233-5471"
    self.assertEqual( correct_num, self.num )

  # Perfect way
  def test_vgood6(self):
    self.num = CreditCard.check_credit_card_num("1024-9048-2233-5471")
    correct_num = "1024-9048-2233-5471"
    self.assertEqual( correct_num, self.num )


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
