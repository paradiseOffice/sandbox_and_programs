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
from currency import Currency

class CurrencyTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''
  # vbad0 thirte string
  def setUp(self):
    self.money = Currency.check_currency("")

  def test_vbad0(self):
    self.money = Currency.check_currency("thirte")
    correct_money = 0.0
    self.assertEqual( correct_money, self.money)

  # bad1 09534.2343490578245
  def test_bad1(self):
    self.money = Currency.check_currency("09534.2343490578245")
    correct_money = 9534.23
    self.assertEqual( correct_money, self.money)

  # bad2 %£353
  def test_bad2(self):
    self.money = Currency.check_currency("%£353")
    correct_money = 353.00
    self.assertEqual( correct_money, self.money)

  # middle3 460.085634
  def test_middle3(self):
    self.money = Currency.check_currency("460.085634")
    correct_money = 460.09
    self.assertEqual( correct_money, self.money)

  # good4 5362907888969
  def test_good4(self):
    self.money = Currency.check_currency("5362907888969")
    correct_money = 5.362907888969e+12
    self.assertEqual( correct_money, self.money)

  # good5 35532
  def test_good5(self):
    self.money = Currency.check_currency("35532")
    correct_money = 35532.00
    self.assertEqual( correct_money, self.money)

  # vgood6 352.46
  def test_good6(self):
    self.money = Currency.check_currency("352.46")
    correct_money = 352.46
    self.assertEqual( correct_money, self.money)

  def tearDown(self):
    self.money = ""
    correct_money = 0.0

if __name__ == '__main__':
  unittest.main()
