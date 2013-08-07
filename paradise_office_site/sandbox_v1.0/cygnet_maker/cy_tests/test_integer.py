#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from integer import Integer

class IntegerTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.int = Integer.check_integer("")

  def test_vbad0(self):
    self.int = Integer.check_integer("teoirfhjnhd .")
    correct_int = 0
    self.assertEqual( correct_int, self.int)

  def test_bad1(self):
    self.int = Integer.check_integer("3.4e+14")
    correct_int = 3
    self.assertEqual( correct_int, self.int)

  def test_bad2(self):
    self.int = Integer.check_integer("  543hui.340235")
    correct_int = 543
    self.assertEqual( correct_int, self.int)

  def test_middle3(self):
    self.int = Integer.check_integer("43254.34981")
    correct_int = 43254
    self.assertEqual( correct_int, self.int)

  def test_good4(self):
    self.int = Integer.check_integer("56.4792")
    correct_int = 57
    self.assertEqual( correct_int, self.int)

  def test_good5(self):
    self.int = Integer.check_integer("43.201947")
    correct_int = 43
    self.assertEqual( correct_int, self.int)

  def test_good6(self):
    self.int = Integer.check_integer("00.5493840")
    correct_int = 1
    self.assertEqual( correct_int, self.int)

  def test_good7(self):
    self.int = Integer.check_integer("0.14837")
    correct_int = 0
    self.assertEqual( correct_int, self.int)

  def test_vgood8(self):
    self.int = Integer.check_integer("1897000")
    correct_int = 1897000
    self.assertEqual( correct_int, self.int)

  def tearDown(self):
    self.int = ""
    correct_int = 0

if __name__ == '__main__':
  unittest.main()
