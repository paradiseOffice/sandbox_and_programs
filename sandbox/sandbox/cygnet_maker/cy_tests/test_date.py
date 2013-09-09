#!/usr/bin/python3.3

'''
  Paradise Office Cygnet API
Copyright (c) 2013 Hazel Windle

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along
    with this program; if not, write to the Free Software Foundation, Inc.,
    51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

Email me at: lead-dev@linux-paradise.co.uk if you have any problems or questions.
'''

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from datetime import date
from date_conv import Date

class DateTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.date = Date.check_date("")

  # A string
  def test_vbad0(self):
    self.date = Date.check_date("iutoeht")
    correct_date = date(1111, 1, 1)
    self.assertEqual( correct_date, self.date)

  # random stuff
  def test_bad1(self):
    self.date = Date.check_date("$£%^H2ivoy0")
    correct_date = date(1111, 1, 1)
    self.assertEqual( correct_date, self.date)

  # A year, then random stuff
  def test_bad2(self):
    self.date = Date.check_date("2014wuityhwo")
    correct_date = date(2014, 1, 1)
    self.assertEqual( correct_date, self.date)
 
  # An american date format
  def test_bad3(self):
    self.date = Date.check_date("11/23/2008")
    correct_date = date(2008, 11, 23)
    self.assertEqual( correct_date, self.date)

  def test_bad4(self):
    self.date = Date.check_date("11/23/08")
    correct_date = date(2008, 11, 23)
    self.assertEqual( correct_date, self.date)

  # A date that doesn't exist 
  def test_middle5(self):
    self.date = Date.check_date("2013/02/30")
    correct_date = date(2013, 2, 28)
    self.assertEqual( correct_date, self.date)

  # A correct date with spaces
  def test_good6(self):
    self.date = Date.check_date("25 12  2013")
    correct_date = date(2013, 12, 25)
    self.assertEqual( correct_date, self.date)

  # A correct date with /'s
  def test_good7(self):
    self.date = Date.check_date("25/12/2013")
    correct_date = date(2013, 12, 25)
    self.assertEqual( correct_date, self.date)

  # A correct date with -'s
  def test_good8(self):
    self.date = Date.check_date("25-12-2013")
    correct_date = date(2013, 12, 25)
    self.assertEqual( correct_date, self.date)

  def tearDown(self):
    self.date = ""
    correct_date = ""

if __name__ == '__main__':
  unittest.main()
