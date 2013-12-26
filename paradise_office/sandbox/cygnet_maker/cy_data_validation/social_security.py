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


# Stub function

class SocialSecurity:
  ''' 1
See if the digits printed on the Social Security card follow the standard format. The general format of the numbers on the card is a total of 9 digits, divided into three parts.

    The first set of numbers, called the area number, contains 3 digits.
    The second set of numbers, called the group number, is 2 digits.
    And the third set of numbers, called the serial number, is 4 digits.
    Each group of digits is separated by a hyphen.

2
Watch for a series of digits in the Social Security number that is all the same, such as 3333. The odds of having a sequence such as that are relatively slim.

    Zeros for all the digits, in any set, are never used.
    The sequence 666 is not used as an area number.

3
Know that the numbers 987-65-4320 to 987-65-4329 are only used in ads and never on a real Social Security card.
'''
  def check_ss_num(data):
    print("Social security number stub method")
