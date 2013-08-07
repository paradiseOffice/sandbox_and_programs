#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from long_text import Long_text

class LongTextTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.text = Long_text.check_long_text("")

  def test_vbad(self):
    self.text = Long_text.check_long_text("^%gjsifepyn geyjekfslgfe7uuhoi768qsxbecbovbjh")
    correct_text = ""
    self.assertEqual( correct_text, self.text)

  def test_bad(self):
    self.text = Long_text.check_long_text("; SELECT * FRom users where name LIKE '%admin%';")
    correct_text = "Select users admin. "
    self.assertEqual( correct_text, self.text)

  def test_middle(self):
    self.text = Long_text.check_long_text("I liked the look of the KDE office suite Calligra, so I \"modelled\" that for desktop PC's. mobiles")
    correct_text = "I liked the look of the KDE office suite Calligra, so I 'modelled' that for desktop PC's. Mobiles. "
    self.assertEqual( correct_text, self.text)

  def test_good(self):
    self.text = Long_text.check_long_text("A lot of  documentation should exist to attract developers,")
    correct_text = "A lot of documentation should exist to attract developers. "
    self.assertEqual( correct_text, self.text)

  def test_none(self):
    self.text = Long_text.check_long_text("")
    correct_text = ""
    self.assertEqual( correct_text, self.text)

  def tearDown(self):
    self.text = ""
    correct_text = ""

if __name__ == '__main__':
  unittest.main()
