#!/usr/bin/python3.3

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
