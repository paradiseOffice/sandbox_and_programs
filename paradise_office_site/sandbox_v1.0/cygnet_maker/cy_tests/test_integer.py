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
