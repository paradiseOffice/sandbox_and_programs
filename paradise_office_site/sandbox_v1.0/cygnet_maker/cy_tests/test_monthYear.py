#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from datetime import date
from month_year import MonthAndYear

class MonthYearTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.date = MonthAndYear.check_monthYear("")

  # A string
  def test_vbad0(self):
    self.date = MonthAndYear.check_monthYear("iutoeht")
    correct_date = date(1111, 1, 1)
    self.assertEqual( correct_date, self.date)

  # random stuff
  def test_bad1(self):
    self.date = MonthAndYear.check_monthYear("$£%^H2ivoy0")
    correct_date = date(1111, 1, 1)
    self.assertEqual( correct_date, self.date)

  # A year, then random stuff
  def test_bad2(self):
    self.date = MonthAndYear.check_monthYear("2014wuityhwo")
    correct_date = date(2014, 1, 1)
    self.assertEqual( correct_date, self.date)
 
  # An american date format
  def test_bad3(self):
    self.date = MonthAndYear.check_monthYear("11/23/2008")
    correct_date = date(2008, 11, 1)
    self.assertEqual( correct_date, self.date)

  def test_bad4(self):
    self.date = MonthAndYear.check_monthYear("11/23/08")
    correct_date = date(2008, 11, 1)
    self.assertEqual( correct_date, self.date)

  # A date that doesn't exist 
  def test_middle5(self):
    self.date = MonthAndYear.check_monthYear("2013/02/30")
    correct_date = date(2013, 2, 1)
    self.assertEqual( correct_date, self.date)

  # A correct date with spaces
  def test_good6(self):
    self.date = MonthAndYear.check_monthYear("25 12  2013")
    correct_date = date(2013, 12, 1)
    self.assertEqual( correct_date, self.date)

  # A correct date with /'s
  def test_good7(self):
    self.date = MonthAndYear.check_monthYear("25/12/2013")
    correct_date = date(2013, 12, 1)
    self.assertEqual( correct_date, self.date)

  # A correct date with -'s
  def test_good8(self):
    self.date = MonthAndYear.check_monthYear("25-12-2013")
    correct_date = date(2013, 12, 1)
    self.assertEqual( correct_date, self.date)

  def tearDown(self):
    self.date = ""
    correct_date = ""

if __name__ == '__main__':
  unittest.main()

