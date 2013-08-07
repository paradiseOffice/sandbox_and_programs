#!/usr/bin/python3.3

import unittest
import sys
sys.path.append("/home/hazel/Documents/new_linux_paradise/paradise_office_site/sandbox_v1.0/cygnet_maker/cy_data_validation")
from short_text import ShortText

class ShortTextTestCase(unittest.TestCase):
  ''' Tests with numbered degrees of bad or good data, on a scale of 0=baddest to 10=goodest '''

  def setUp(self):
    self.text = ShortText.check_text("")

  # No text null
  def test_vbad0(self):
    self.text = ShortText.check_text("")
    correct_text = ""
    self.assertEqual( correct_text, self.text)

  # Numbers and special chars including ;
  def test_bad1(self):
    self.text = ShortText.check_text("|4579^%%)%^&*_;")
    correct_text = "4579^%%)%&*_"
    self.assertEqual( correct_text, self.text)

  # A rouge SQL statement
  def test_bad2(self):
    self.text = ShortText.check_text("; DROP tables ;")
    correct_text = "Drop tables"
    self.assertEqual( correct_text, self.text)

  # Some punctuation like "
  def test_middle3(self):
    self.text = ShortText.check_text("\"thunder\"=")
    correct_text = "'thunder'="
    self.assertEqual( correct_text, self.text)

  # A short number 
  def test_good4(self):
    self.text = ShortText.check_text("43")
    correct_text = "43"
    self.assertEqual( correct_text, self.text)

  # Over 100 characters long
  def test_good5(self):
    self.text = ShortText.check_text("Something, something else Something, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something elseSomething, something else")
    correct_text = "Something, something else Something, something elseSomething, something elseSomething, something els"
    self.assertEqual( correct_text, self.text)

  # An OK text string
  def test_vgood(self):
    self.text = ShortText.check_text("Stop bloody lightning")
    correct_text = "Stop bloody lightning"
    self.assertEqual( correct_text, self.text)


  def tearDown(self):
    self.text = ""
    correct_text = ""

if __name__ == '__main__':
  unittest.main()
