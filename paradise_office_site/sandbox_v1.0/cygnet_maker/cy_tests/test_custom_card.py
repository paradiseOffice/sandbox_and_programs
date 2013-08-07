#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from custom_card import CustomCard

class CustomCardTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = CustomCard.check_custom_card_num("")

  # String gibberish
  def test_vbad0(self):
    self.num = CustomCard.check_custom_card_num("ueothndk")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Numbers all lumped together
  def test_bad1(self):
    self.num = CustomCard.check_custom_card_num("8705706")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Numbers separated in groups
  def test_middle2(self):
    self.num = CustomCard.check_custom_card_num("547  08905 ")
    correct_num = "547-08905"
    self.assertEqual( correct_num, self.num)

  # Numbers separated by -'s
  def test_good3(self):
    self.num = CustomCard.check_custom_card_num("547-08905")
    correct_num = "547-08905"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
