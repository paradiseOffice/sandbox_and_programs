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
from year import Year

class YearTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''  

  def setUp(self):
    self.year = Year.check_year("")

  # Gibberish string with nums special chars
  def test_vbad0(self):
    self.year = Year.check_year("468976t%$&;2S$£")
    correct_year = 0
    self.assertEqual( correct_year, self.year)

  # 32bc
  def test_bad1(self):
    self.year = Year.check_year("32bc")
    correct_year = -32
    self.assertEqual( correct_year, self.year)

  # 142 BC
  def test_bad2(self):
    self.year = Year.check_year("142 BC")
    correct_year = -142
    self.assertEqual( correct_year, self.year)

  # 142 B.C.
  def test_bad3(self):
    self.year = Year.check_year("142 B.C.")
    correct_year = -142
    self.assertEqual( correct_year, self.year)

  # 1 AD
  def test_middle4(self):
    self.year = Year.check_year("1 AD")
    correct_year = 1
    self.assertEqual( correct_year, self.year)

  # 1901 ad
  def test_good5(self):
    self.year = Year.check_year("1901 ad")
    correct_year = 1901
    self.assertEqual( correct_year, self.year)

  # 2012
  def test_good6(self):
    self.year = Year.check_year("2012")
    correct_year = 2012
    self.assertEqual( correct_year, self.year)

  # 32080
  def test_good7(self):
    self.year = Year.check_year("32080")
    correct_year = 32080
    self.assertEqual( correct_year, self.year)

  # 0
  def test_vgood8(self):
    self.year = Year.check_year("0")
    correct_year = 0
    self.assertEqual( correct_year, self.year)


  def tearDown(self):
    self.year = ""
    correct_year = 0

if __name__ == '__main__':
  unittest.main()
