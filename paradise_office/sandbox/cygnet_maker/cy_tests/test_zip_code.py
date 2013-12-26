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
