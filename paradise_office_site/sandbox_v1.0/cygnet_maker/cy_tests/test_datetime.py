#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from datetime import datetime
from date_time import DateTime

class DateTimeTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.stamp = DateTime.check_timestamp("")

  # A string
  def test_vbad0(self):
    self.stamp = DateTime.check_timestamp("iutoeht")
    correct_stamp = datetime(1111, 1, 1, 00, 00)
    self.assertEqual( correct_stamp, self.stamp)

  # random stuff
  def test_bad1(self):
    self.stamp = DateTime.check_timestamp("$£%^H2ivoy0")
    correct_stamp = datetime(1111, 1, 1, 00, 00)
    self.assertEqual( correct_stamp, self.stamp)

  # A year, then random stuff
  def test_bad2(self):
    self.stamp = DateTime.check_timestamp("2014wuityhwo")
    correct_stamp = datetime(2014, 1, 1, 00, 00)
    self.assertEqual( correct_stamp, self.stamp)
 
  # An american date format with 0 time
  def test_bad3(self):
    self.stamp = DateTime.check_timestamp("11/23/2008")
    correct_stamp = datetime(2008, 11, 23, 00, 00)
    self.assertEqual( correct_stamp, self.stamp)

  # A short year, with 1 and no minutes indicator
  def test_bad4(self):
    self.stamp = DateTime.check_timestamp("11/23/08")
    correct_stamp = datetime(2008, 11, 23, 1, 00)
    self.assertEqual( correct_stamp, self.stamp)

  # A date that doesn't exist and 61:72
  def test_middle5(self):
    self.stamp = DateTime.check_timestamp("2013/02/30")
    correct_stamp = datetime(2013, 2, 28, 23, 59)
    self.assertEqual( correct_stamp, self.stamp)

  # A correct date with spaces, and 23:60
  def test_good6(self):
    self.stamp = DateTime.check_timestamp("25 12  2013")
    correct_stamp = datetime(2013, 12, 25, 23, 59)
    self.assertEqual( correct_stamp, self.stamp)

  # A correct date with /'s and 23:59
  def test_good7(self):
    self.stamp = DateTime.check_timestamp("25/12/2013")
    correct_stamp = datetime(2013, 12, 25, 23, 59)
    self.assertEqual( correct_stamp, self.stamp)

  # A correct date with -'s and 00:59
  def test_good8(self):
    self.stamp = DateTime.check_timestamp("25-12-2013")
    correct_stamp = datetime(2013, 12, 25, 00, 59)
    self.assertEqual( correct_stamp, self.stamp)

  def tearDown(self):
    self.stamp = ""
    correct_stamp = ""

if __name__ == '__main__':
  unittest.main()
