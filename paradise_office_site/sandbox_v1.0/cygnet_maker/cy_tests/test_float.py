#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from float_conv import Float

class FloatTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.real = Float.check_float("")
  # A string
  def test_vbad0(self):
    self.real = Float.check_float("")
    correct_real = 0.0
    self.assertEqual( correct_real, self.real)

  # Mixture of letters and numbers
  def test_bad1(self):
    self.real = Float.check_float("etiuf35073.^^34io")
    correct_real = 35073.34
    self.assertEqual( correct_real, self.real)

  # Just whole numbers
  def test_bad2(self):
    self.real = Float.check_float("57895")
    correct_real = 57895.0
    self.assertEqual( correct_real, self.real)

  # Number that should be with + exponent
  def test_middle3(self):
    self.real = Float.check_float("78000000000000000")
    correct_real = 78.0e+15
    self.assertEqual( correct_real, self.real)

  # Number that should be with - exponent
  def test_good4(self):
    self.real = Float.check_float("-0.09817518569")
    correct_real = -9.817517518569e-2
    self.assertEqual( correct_real, self.real)

  # Regular fp currency like number
  def test_good5(self):
    self.real = Float.check_float("72.86")
    correct_real = 72.86
    self.assertEqual( correct_real, self.real)

  # Number smaller than 1
  def test_good6(self):
    self.real = Float.check_float("0.00057")
    correct_real = 0.00057
    self.assertEqual( correct_real, self.real)

  def tearDown(self):
    self.real = ""
    correct_real = 0.0

if __name__ == '__main__':
  unittest.main()
