#!/usr/bin/python3.3

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
