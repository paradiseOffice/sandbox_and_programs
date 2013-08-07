#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from month import Month

class MonthTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest ''' 

  def setUp(self):
    self.month = Month.check_month("")

  def test_vbad0(self):
    self.month = Month.check_month("eiotyhwrt345")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_bad1(self):
    self.month = Month.check_month("Juneuronfs")
    correct_month = 6
    self.assertEqual( correct_month, self.month)

  def test_bad2(self):
    self.month = Month.check_month("14")
    correct_month = 12
    self.assertEqual( correct_month, self.month)

  def test_bad3(self):
    self.month = Month.check_month("0")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_middle4(self):
    self.month = Month.check_month("Janurarily")
    correct_month = 1
    self.assertEqual( correct_month, self.month)

  def test_good5(self):
    self.month = Month.check_month("5")
    correct_month = 5
    self.assertEqual( correct_month, self.month)

  def test_good6(self):
    self.month = Month.check_month("December")
    correct_month = 12
    self.assertEqual( correct_month, self.month)

  def test_vgood7(self):
    self.month = Month.check_month("Fall")
    correct_month = 10
    self.assertEqual( correct_month, self.month)

  def tearDown(self):
    self.month = ""
    correct_month = 0

if __name__ == '__main__':
  unittest.main()
