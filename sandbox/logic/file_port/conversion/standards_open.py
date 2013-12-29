#!/usr/bin/python3.3
"""
Opens pdf, html, txt, sql, csv documents or XML. 

"""
import os, sys, mimetypes, subprocess 

def stds_to_html():
    fileinfo = sys.argv[1]
    fileHandler = open(fileinfo, 'w', encoding="utf-8")
    filename = fileHandler.readline()
    contenttype = fileHandler.readline()
    fileHandler.close()
    print(filename)
    print(contenttype)
    
    if contenttype == 'text/xml':
        #subprocess.check_output([xsltproc -o filename'.html' general.xsl filename])
        pass
    elif contenttype == 'text/xhtml' or contenttype == 'text/html':
        openedFile = open(filename, 'w', encoding='utf-8')
        # update file port tab with new file here.
    elif contenttype == 'application/pdf':
        #returned = subprocess.check_output(['pdftohtml -q -s -p', filename])
        # This takes bloody forever pdf - odf (consider a binary file)
    else:
        # For txt, sql, csv...
        openedFile = open(filename, 'w', encoding='utf-8')
        wholefile = openedFile.read()
        wholefile = wholefile.replace('<', '&lt;')
        wholefile = wholefile.replace('>', '&gt;')
        wholefile = wholefile.replace('"', '&quot;')
        wholefile = wholefile.replace('&', '&amp;')
        # update file port tab with new file here.
        
if __name__ == '__main__':
    stds_to_html() # for testing purposes