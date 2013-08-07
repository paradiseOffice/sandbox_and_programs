#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from social_security import SocialSecurity

class SSnumTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = SocialSecurity.check_ss_num("")

  # Text string of gibberish
  def test_vbad0(self):
    self.num = SocialSecurity.check_ss_num("jiouo^")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # 000-00-0000 wrong, 
  def test_bad1(self):
    self.num = SocialSecurity.check_ss_num("000-00-0000")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  #666-12-6701 wrong, 
  def test_bad2(self):
    self.num = SocialSecurity.check_ss_num("666-12-6701")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  #987-65-4320 ad,
  def test_bad3(self):
    self.num = SocialSecurity.check_ss_num("987-65-4320")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # 987-65-4329 ad
  def test_middle4(self):
    self.num = SocialSecurity.check_ss_num("987-65-4329")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # normal ss all ran together
  def test_good5(self):
    self.num = SocialSecurity.check_ss_num("908324356")
    correct_num = "908-32-4356"
    self.assertEqual( correct_num, self.num)

  # with -'s
  def test_vgood6(self):
    self.num = SocialSecurity.check_ss_num("908-32-4356")
    correct_num = "908-32-4356"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
