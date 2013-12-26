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
from national_insurance import NationalInsurance

class NiNumTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.num = NationalInsurance.check_ni_num("")

  # Gibberish
  def test_vbad0(self):
    self.num = NationalInsurance.check_ni_num("98675^$4hbnjk")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # Wrong first code
  def test_bad1(self):
    self.num = NationalInsurance.check_ni_num("AF 78 99 20 D")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # O as the second char
  def test_bad2(self):
    self.num = NationalInsurance.check_ni_num("AO 45 32 21 A")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # DF as first two chars (wrong along with BG, GB, NK, KN, TN, NT and ZZ)
  def test_bad3(self):
    self.num = NationalInsurance.check_ni_num("DF 35 09 01 C")
    correct_num = ""
    self.assertEqual( correct_num, self.num)

  # H as the end char
  def test_middle4(self):
    self.num = NationalInsurance.check_ni_num("HY 43 90 21 H")
    correct_num = "HY 43 90 21 D"
    self.assertEqual( correct_num, self.num)

  # -'s in between bits
  def test_good5(self):
    self.num = NationalInsurance.check_ni_num("HY-43-90-21-D")
    correct_num = "HY 43 90 21 D"
    self.assertEqual( correct_num, self.num)

  # All ran together
  def test_good6(self):
    self.num = NationalInsurance.check_ni_num("HY439021D")
    correct_num = "HY 43 90 21 D"
    self.assertEqual( correct_num, self.num)

  def test_vgood7(self):
    self.num = NationalInsurance.check_ni_num("HY 43 90 21 D")
    correct_num = "HY 43 90 21 D"
    self.assertEqual( correct_num, self.num)


  def tearDown(self):
    self.num = ""
    correct_num = ""

if __name__ == '__main__':
  unittest.main()
