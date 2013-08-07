#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from email_address import Email_address

class EmailAddressTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.email = Email_address.mend_email("")

  def test_vbad(self):
    self.email = Email_address.mend_email("")
    correct_email = ""
    self.assertEqual( correct_email, self.email)

  def test_bad1(self):
    self.email = Email_address.mend_email("Abz?  T+./\"")
    correct_email = ""
    self.assertEqual( correct_email, self.email)

  def test_bad2(self):
    self.email = Email_address.mend_email("Th\*@some..")
    correct_email = "th@some.com"
    self.assertEqual( correct_email, self.email)

  def test_middle(self):
    self.email = Email_address.mend_email("name@example")
    correct_email = "name@example.com"
    self.assertEqual( correct_email, self.email)

  def test_good1(self):
    self.email = Email_address.mend_email("name@e._xample.me")
    correct_email = "name@xample.com"
    self.assertEqual( correct_email, self.email)

  def test_good2(self):
    self.email = Email_address.mend_email("3 NINETY-one@goglemail.com")
    correct_email = "3ninety-one@googlemail.com"
    self.assertEqual( correct_email, self.email)

  def test_good3(self):
    self.email = Email_address.mend_email("he-something@example.co.jr")
    correct_email = "he-something@example.co.jr"
    self.assertEqual( correct_email, self.email)

  def test_vgood(self):
    self.email = Email_address.mend_email("some32thing@example.me.ru")
    correct_email = "some32thing@example.me.ru"
    self.assertEqual( correct_email, self.email)

  def tearDown(self):
    self.email = ""
    correct_email = ""

if __name__ == '__main__':
  unittest.main()

