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
from web_address import Web_address

class WebAddressTestCase(unittest.TestCase):

  def setUp(self):
    self.webaddy = Web_address.mend_address("")

  def test_vbad(self):
    self.webaddy = Web_address.mend_address("x y Z .@COm")
    correct_addy = "http://www.xyz.com"
    self.assertEqual( correct_addy, self.webaddy)

  def test_bad(self):
    self.webaddy = Web_address.mend_address("364 .?")
    correct_addy = ""
    self.assertEqual( correct_addy, self.webaddy)

  def test_middle(self):
    self.webaddy = Web_address.mend_address("something.com")
    correct_addy = "http://www.something.com"
    self.assertEqual( correct_addy, self.webaddy)

  def test_empty(self):
    self.webaddy = Web_address.mend_address("")
    correct_addy = ""
    self.assertEqual( correct_addy, self.webaddy)

  def test_goodish(self):
    self.webaddy = Web_address.mend_address("htp://ww.google.cum")
    correct_addy = "http://www.google.com"
    self.assertEqual( correct_addy, self.webaddy)

  def test_good(self):
    self.webaddy = Web_address.mend_address("www.monster.co.uk")
    correct_addy = "http://www.monster.co.uk"
    self.assertEqual( correct_addy, self.webaddy)

  def test_vgood(self):
    self.webaddy = Web_address.mend_address("http://www.monster.co.uk")
    correct_addy = "http://www.monster.co.uk"
    self.assertEqual( correct_addy, self.webaddy)

  def tearDown(self):
    webaddy = ""
    correct_addy = ""

if __name__ == '__main__':
  unittest.main()

