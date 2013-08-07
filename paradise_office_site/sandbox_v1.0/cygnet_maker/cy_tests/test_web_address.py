#!/usr/bin/python3.3

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

