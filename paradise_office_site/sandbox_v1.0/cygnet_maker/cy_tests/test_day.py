#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from day import Day

class DayTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.day = Day.check_day("")

  # Gibberish string
  def test_vbad0(self):
    self.day = Day.check_day("^%$6bhgwju5rk7!")
    correct_day = 0
    self.assertEqual( correct_day, self.day)

  # Badly mispelt day with Tue in it as a substring
  def test_bad1(self):
    self.day = Day.check_day("yestuenonlj;")
    correct_day = 2
    self.assertEqual( correct_day, self.day)

  # The word Saturn
  def test_bad2(self):
    self.day = Day.check_day("saturn")
    correct_day = 6
    self.assertEqual( correct_day, self.day)

  # Number 10
  def test_middle3(self):
    self.day = Day.check_day("10")
    correct_day = 7
    self.assertEqual( correct_day, self.day)

  # 0
  def test_good4(self):
    self.day = Day.check_day("0")
    correct_day = 0
    self.assertEqual( correct_day, self.day)

  # 4
  def test_good5(self):
    self.day = Day.check_day("4")
    correct_day = 4
    self.assertEqual( correct_day, self.day)

  # Friday
  def test_vgood6(self):
    self.day = Day.check_day("Friday")
    correct_day = 5
    self.assertEqual( correct_day, self.day)


  def tearDown(self):
    self.day = ""
    correct_day = 0

if __name__ == '__main__':
  unittest.main()
