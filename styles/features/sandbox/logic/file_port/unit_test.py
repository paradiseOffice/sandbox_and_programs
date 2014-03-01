#!/usr/bin/python3.3
"""
 run "manage.py test", set up test_paradise db first.

There are some manual tests, more to do with Libreoffice than this code.
"""
import os, sys, mimetypes
from django.test import TestCase
from open.createNewTab import CreateNewTab
from dataHandling.data import FileChanges
from xml_html.rewriteOdf import RewriteOdf
from save.saves import Saves

# have included mimetype handler for magic number reading/checking.

class CreateNew(TestCase):
    def test_new_file(self):
        """
        Tests CreateNewTab.newFile, for returning an html file.
        
        """
        testfile = CreateNewTab.newFile("testfile")
        if not os.path.exists(testfile): print("File doesn't exist")
        contenttype, encoding = mimetypes.guess_type(testfile)
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        maintype, subtype = contenttype.split('/', 1)
        if maintype == 'text' and subtype == 'html':
            return
        else:
            raise WrongFileError("That's not an HTML file!" )
    def test_css_file(self):
        """
        Tests that a css file was also created along with the html file
        from CreateNewTab.newFile.
        
        """
        cssfile = open('file1.css', 'r')
        if not os.path.exists(cssfile): print("File doesn't exist")
        contenttype, encoding = mimetypes.guess_type(cssfile)
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        maintype, subtype = contenttype.split('/', 1)
        if maintype == 'text' and subtype == 'css':
            return
        else:
            raise WrongFileError("That's not a css file.")
          
class LoadUploadedDoc(TestCase):
    def test_file_openable(self):
        """
        Tests that CreateNewTab.fileUploaded can open a file
        
        """
        testfile = CreateNewTab.fileUploaded("loaded_file.odt", "append")
        # check loaded_file.ods, .odp too
        # check that html file loaded_file.html is there
        if not os.path.exists('loaded_file.html'): print('HTML file not created') 
        contenttype, encoding = mimetypes.guess_type('loaded_file.html')
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        maintype, subtype = contenttype.split('/', 1)
        if maintype == 'text' and subtype == 'html':
            return
        else:
            raise WrongFileError("That's not an HTML file!" )
        cssfile = open('file1.css', 'r')
        contenttype, encoding = mimetypes.guess_type(cssfile)
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        maintype, subtype = contenttype.split('/', 1)
        if maintype == 'text' and subtype == 'css':
            return
        else:
            raise WrongFileError("That's not a css file.")
          
# RewriteOdf.convertWeirdFile(file) - see manual tests dir.
# Test for conversion of doc, pdf, docx, xls, xlt, dot, xlsx, ppt, pptx, rtf, and make sure an odf type is returned.
# mimetypes: in conversion/mime_list.txt
#

class Chomper(TestCase):
    def fileParts(self):
        partList = RewriteOdf.universalFileChomper('largeHtml.html')
        # check for the head - with meta info and css/js links
        if not os.path.exists('header1.html'):
            raise NoFileError('There\'s no header1.html file ...')
        if not os.path.exists('part1-file1.html')
            raise NoFileError('No part1 to HTML file')
        if not os.path.exists('part2-file1.html')
            raise NoFileError('No part2 to HTML file')
        # convert a stupidly long Odf file to test this... + 4000 lines.
        testList = ['header1.html','part1-file1.html', 'part2-file1.html']
        assertEquals(partList, self.testList)
        return testList
     
    def testPort(self, testList):
        RewriteOdf.sendHtmlToTab(testList)
        # Check that the html file is viewable in the test document.

class DataInOut(TestCase):
    def dataIn(self, someData):
        """
        The data comes from the client browser to the server, and Python scripts.
        """
        dataDict = FileChanges.dataReader('<p>Some paragraph</p><h1>A heading</h1><h3 id="prices">Prices</h3>')
        correctDict = { '<p></p>': 'Some paragraph',
                       '<h1></h1>': 'A heading',
                       '<h3 id="prices"></h3>': 'Prices'
                       }
        assertEquals(dataDict, correctDict)
        
    def dataOut(self):
        """
        Data from a python script on server to the client.
        """
        dataJson = FileChanges.dataWriter({ '<p></p>': 'Some paragraph',                  '<h1></h1>': 'A heading', '<h3 id="prices"></h3>': 'Prices' })
        testJson = '{ <p>: "Some paragraph",
                    </p>\n<h1>: "A heading",
                    </h1>\n<h3 id="prices">: "Prices",
                     </h3>\n: "" }' # check this in browser ajax call. 
        assertEquals(dataJson, testJson)
        
class Saves(TestCase):
    def toHtml(self):
        fileOrig = open('largeHtml.html', 'r')
        copyofFile = open('largeHtml_test.html', 'r')
        fileUploaded('largeHtml.html') # should be ran through the chomper
        Save.saveHtml('largeHtml.html') # puts bits back together again
        assertEquals(fileOrig, copyofFile)
        
