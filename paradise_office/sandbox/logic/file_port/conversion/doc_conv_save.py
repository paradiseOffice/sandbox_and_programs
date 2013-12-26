#!/usr/bin/python3.3
"""
Takes an odf formatted file as saved from the html in the file_port and converts it to a different file type. The user specifies the file type. It's checked for legality here. This is only called when an open document file isn't wanted when a user saves.

"""
import os, sys, mimetypes, subprocess
   
def odf_to_binary(file, conv):
    filename = file # global
    conv_type = conv # global
    def file_tester(i):

        allowedFileTypes = [ 'doc', 'docx', 'dot', 'dotx', 'xls', 'xltx', 'xlsx', 'xlt', 'ppt', 'pptx', 'pot', 'potx']
        stdFileTypes = ['html', 'pdf', 'xml', 'xhtml', 'csv', 'sql', 'txt']

        testfile = filename
        if not os.path.exists(testfile): print("File doesn't exist")       
        contenttype, encoding = mimetypes.guess_type(testfile)
        if contenttype == None or encoding is not None:
            contenttype = '?/?'
        # if is to be  odf, pdf, html, txt,csv go to standards_save.py
        mimeInfo = 'fileSave' + str(i)
        fileinfo = open(mimeInfo, 'w', encoding="utf-8")
        fileinfo.write(testfile + "\n")
        fileinfo.write(contenttype + "\n")
        fileinfo.close()
        return conv_type, mimeInfo
    # subprocess..
    
    conv_type, fileInfo = file_tester(1) 
    fileInfo = str(fileInfo)
    returned = subprocess.check_output(['./odf_to_binary.sh', fileInfo, conv_type])

    print(returned)

if __name__ == '__main__':
    odf_to_binary(sys.argv[1], sys.argv[2]) # pass an argument first with the rel. filepath, then the type of file you want eg. doc, docx
