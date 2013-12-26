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
# tuple of built in commands (eg. save_as_dl)

def get_pics_available(files):
  '''
    Function get_pics_available()

    Input:  Cygnet XML files
    Output: List of picture URI's from pic attributes in XML
    Errors: If no pics are present, it passes an empty list/tuple
    For wrong picture links it takes out that URI (if it isn't jpg,png,svg)

    Program: Gathers the picture links, checks the file ending only.
  '''
  pass
  return

def get_plugins_available(files):
  '''
    Function get_plugins_available()

    Input: Cygnet XMl files
    Output: List of plugin URI's from plugin attributes in XML and their options.
    Errors: If no plugins are present, returns empty list. 
    For wrong file ending, (not .py) it drops that URI.

    Program: Gathers the plugin links, checks the file ending.
  '''
  pass
  return

def check_pics(dirty_pics_data):
  '''
    Function check_pics()

    Input: The data structure from get_pics_available (called like data = f    unction(input) ).
    Output: A list of correct picture URI's to go in links when the writer is called.
    Errors: prints out a list of pictures that have the wrong links. Could ask for right one in Cygnet builder.

    Program: Opens each picture, checks the mime type.
  '''
  pass
  return

def check_plugins(dirty_plugins_data):
  '''
    Function check_plugins()

    Only plugin arguments that pass this test get passed to the py_linker.

    Input: Output from get_plugins_available
    Output: All the plugin names with .py added, that will work.
    Errors: A plugin doesn't exist error, asks user for another file/link.

    Program: Checks for Python3  (could convert from 2.7) & file exists.
  '''
  pass
  return

def check_commands(files):
  '''
    Function check_commands()

    Input: The XML files for the app.
    Output: The correct URI's to the py scripts that are the wrappers
    for each command.
    Errors: A command doesn't exist error, for each command spelt wrong.
    A fatal error (eg. because saving won't work )

    Program: Reads each command attribute, and replaces (looks up) 
    the correct wrapper program. Adds to a data structure. 
  '''
  pass
  return
