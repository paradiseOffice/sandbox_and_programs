#!/usr/bin/python3.3

import os, sys, mimetypes

def file_tester():
    i = 1
    testfile = sys.argv[1]
    print(testfile)
    if not os.path.exists(testfile): print("File doesn't exist")
    contenttype, encoding = mimetypes.guess_type(testfile)
    if contenttype == None or encoding is not None:
        contenttype = '?/?'

    fileinfo = open('file' + str(i), 'w')
    fileinfo.write(testfile + "\n")
    fileinfo.write(contenttype)
    fileinfo.close()


if __name__ == '__main__': file_tester()
