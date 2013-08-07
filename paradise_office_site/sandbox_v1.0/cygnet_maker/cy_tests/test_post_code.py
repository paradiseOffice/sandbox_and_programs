#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from post_code import PostCode

class PostCodeTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.code = PostCode.check_code("")
  
  # Gibberish
  def test_vbad0(self):
    self.code = PostCode.check_code("oty46£")
    correct_code = ""
    self.assertEqual( correct_code, self.code)

  # All numbers ran together
  def test_bad1(self):
    self.code = PostCode.check_code("23590165")
    correct_code = ""
    self.assertEqual( correct_code, self.code)

  # Two letters, 1-2 numbers, no space 1 num, 2 letters, any case
  def test_bad2(self):
    self.code = PostCode.check_code("te326up")
    correct_code = "TE32 6UP"
    self.assertEqual( correct_code, self.code)

  # Upper case format without spaces
  def test_middle3(self):
    self.code = PostCode.check_code("TE326UP")
    correct_code = "TE32 6UP"
    self.assertEqual( correct_code, self.code)

  # ... Right format with a space
  def test_good4(self):
    self.code = PostCode.check_code("TE32 6UP")
    correct_code = "TE32 6UP"
    self.assertEqual( correct_code, self.code)

  # London area post code
  def test_good5(self):
    self.code = PostCode.check_code("EC1A 1BB")
    correct_code = "EC1A 1BB"
    self.assertEqual( correct_code, self.code)

  # Other London post code
  def test_vgood6(self):
    self.code = PostCode.check_code("W1A 1HQ")
    correct_code = "W1A 1HQ"
    self.assertEqual( correct_code, self.code)

  # 5 char postcode
  def test_good7(self):
    self.code = PostCode.check_code("M1 1AA")
    correct_code = "M1 1AA"
    self.assertEqual( correct_code, self.code)

  # Other weird postcode type
  def test_good8(self):
    self.code = PostCode.check_code("B33 8TH")
    correct_code = "B33 8TH"
    self.assertEqual( correct_code, self.code)


  def tearDown(self):
    self.code = ""
    correct_code = ""

if __name__ == '__main__':
  unittest.main()
