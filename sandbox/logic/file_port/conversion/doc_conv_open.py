#!/usr/bin/python3.3
"""


Opens a variety of documents, binary files and calls the standards parts too. Limited to whatever documents Libreoffice supports in headless mode. Remember to support qif and eml files too, or Project / plan files. 

"""
import os, sys, mimetypes, subprocess

def binary_to_odf(file):
    filename = file
    def file_tester(i):
        testfile = filename                        
        if not os.path.exists(testfile): print("File " + testfile + " doesn't exist")
        contenttype, encoding = mimetypes.guess_type(testfile)
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        # if is pdf, html, odf, txt - go to standards_open.py
        odflist = [ 'vnd.oasis.opendocument.spreadsheet',
                    'vnd.oasis.opendocument.spreadsheet-template',
                    'vnd.oasis.opendocument.text',
                    'vnd.oasis.opendocument.text-template', 
                    'vnd.oasis.opendocument.presentation',
                    'vnd.oasis.opendocument.presentation-template',
                    'vnd.oasis.opendocument.database' ]
        standardslist = ['pdf', 'xml', 'html', 'xhtml', 'csv', 'plain', 'x-sql' ]
        if encoding in odflist or encoding in standardslist:
            standards = True
        else:
            standards = False
        testfile = str(testfile)
        contenttype = str(contenttype)
        mimeInfo = 'fileOpen' + str(i)
        fileinfo = open(mimeInfo, 'w', encoding="utf-8")
        fileinfo.write(testfile + "\n")
        fileinfo.write(contenttype + "/" + encoding + "\n")
        fileinfo.close()
        
        return contenttype, mimeInfo, standards
    # subprocess..    
    """
    The number passed as a parameter to file_tester is the tabref number
    contenttype isn't used currently, but could be.
    """
    contenttype, fileinfo, standards = file_tester(1)
    if standards == False:
        returned = subprocess.check_output(['./binary_to_odf.sh', fileinfo ])
    elif standards == True:
        returned = subprocess.check_output(['./standards_open.py', fileinfo])
    print(returned)

if __name__ == '__main__':
    binary_to_odf(sys.argv[1]) # for testing purposes


