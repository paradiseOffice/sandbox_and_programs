#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from zip_code import ZipCode

class ZipCodeTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.code = ZipCode.check_zipcode("")

  # Zips are 5 nums, with optional - and 4 nums. No letters

  def test_vbad(self):
    self.code = ZipCode.check_zipcode("oyhgegs")
    correct_code = ""
    self.assertEqual( correct_code, self.code)

  def test_bad(self):
    self.code = ZipCode.check_zipcode("^89623y8o")
    correct_code = ""
    self.assertEqual( correct_code, self.code)

  def test_middle(self):
    self.code = ZipCode.check_zipcode("9-8  201")
    correct_code = "98201"
    self.assertEqual( correct_code, self.code)

  def test_good(self):
    self.code = ZipCode.check_zipcode("90231-9023")
    correct_code = "90231-9023"
    self.assertEqual( correct_code, self.code)


  def tearDown(self):
    self.code = ""
    correct_code = 0.0


  def tearDown(self):
    self.real = ""
    correct_real = 0.0


if __name__ == '__main__':
  unittest.main()
