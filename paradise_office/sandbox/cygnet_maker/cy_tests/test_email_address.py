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

