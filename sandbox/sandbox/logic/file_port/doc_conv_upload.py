#!/usr/bin/python3.3

import os, sys, mimetypes

def doc_to_odt(file):
    filename = file
    # subprocess..
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    #['--headless', '--invisible', '--nologo', '--convert-to odt', '--outdir ./ ' ]
    #commandargs.append(infile)
    #args = tuple(commandargs)
    #print(args[:])
    #os.execl('libreoffice', '--headless --invisible --nologo --convert-to odt --outdir ./ ', str(infile)  ) # buggy, see below.
    # This works on Unix like platforms only, for windows it's spawn

"""
def dot_to_ott(file):
    filename = file # check this is a dot file
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to ott', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odt --outdir ./ ', str(infile)  ) # buggy, see below.


def docx_to_odt(file):
    filename = file # docx ...
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odt', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odt --outdir ./ ', str(infile)  ) # buggy, see below.


def xls_to_ods(file):
    filename = file  # check its xls
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to ods', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to ods --outdir ./ ', str(infile)  ) # buggy, see below.

def xlt_to_ods(file):
    filename = file # check its xlt
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to ots', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to ots --outdir ./ ', str(infile)  ) # buggy, see below.

def xlsx_to_ods(file):
    filename = file # check for xlsx
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to ods', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to ods --outdir ./ ', str(infile)  ) # buggy, see below.

def ppt_to_odp(file):
    filename = file # ppt...
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odp', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odp --outdir ./ ', str(infile)  ) # buggy, see below.

def pot_to_odp(file):
    filename = file # check its pot
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to otp', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to otp --outdir ./ ', str(infile)  ) # buggy, see below.

def potx_to_odp(file):
    filename = file # potx...
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to otp', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to otp --outdir ./ ', str(infile)  ) # buggy, see below.

def pptx_to_odp(file):
    filename = file # pptx
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odp', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odp --outdir ./ ', str(infile)  ) # buggy, see below.

def pdf_to_odt(file):
    filename = file # pdf..
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odt', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odt --outdir ./ ', str(infile)  ) # buggy, see below.

def pdf_to_ods(file):
    filename = file # pdf
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to ods', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to ods --outdir ./ ', str(infile)  ) # buggy, see below.

def pdf_to_odp(file):
    filename = file # pdf
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odp', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odp --outdir ./ ', str(infile)  ) # buggy, see below.

def pdf_to_html(file):
    filename = file # pdf
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to html', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to html --outdir ./ ', str(infile)  ) # buggy, see below.
"""

if __name__ == '__main__':
    doc_to_odt('ecdl1.doc')
