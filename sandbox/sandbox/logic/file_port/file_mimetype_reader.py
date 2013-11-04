#!/usr/bin/python3.3

import os, sys, mimetypes

def file_tester():
    testfile = sys.argv[1]
    print(testfile)
    if not os.path.exists(testfile): print("File doesn't exist")
    contenttype, encoding = mimetypes.guess_type(testfile)
    if contenttype == None or encoding is not None:
        contenttype = '?/?'
    maintype, subtype = contenttype.split('/', 1)
    print(maintype)
    print('/' + subtype)
    #if maintype == 'text' and subtype == 'html':
    #    return
    #else:
    #    raise WrongFileError("That's not an HTML file!" )

if __name__ == '__main__': file_tester()
