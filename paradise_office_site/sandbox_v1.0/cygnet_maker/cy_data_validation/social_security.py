#!/usr/bin/python3.3
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
