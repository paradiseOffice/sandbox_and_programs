#!/usr/bin/python3.3

import os

def doc_to_odt(file):
    filename = file
    pid = os.fork()
    folder = "msoffice_files/"
    infile = folder + filename # os.path.join
    # if not dir os.path.exists : mkdir
    commandargs = ['--headless', '--invisible', '--nologo', '--convert-to odt', '--outdir ./ ' ]
    commandargs.append(infile)
    args = tuple(commandargs)
    print(args[:])
    os.execl('libreoffice', '--headless --invisible --nologo --convert-to odt --outdir ./ ', str(infile)  ) # buggy, see below.
    # This works on Unix like platforms only, for windows it's spawn

"""
"starts programs until you type 'q'"
import os
parm = 0
while True:
  parm += 1
  pid = os.fork()
  if pid == 0:
  # copy process
    os.execl('ython', 'python', 'child.py', str(parm)) # overlay program
    assert False, 'error starting program'
  # shouldn't return
  else:
    print('Child is', pid)
    if input() == 'q': break


os.execv(program, commandlinesequence)
The basic “v” exec form is passed an executable program’s name, along with a list
or tuple of command-line argument strings used to run the executable (that is, the
words you would normally type in a shell to start a program).
os.execl(program, cmdarg1, cmdarg2,... cmdargN)
The basic “l” exec form is passed an executable’s name, followed by one or more
command-line arguments passed as individual function arguments. This is the
same as os.execv(program, (cmdarg1, cmdarg2,...)).
os.execlp
os.execvp
Adding the letter p to the execv and execl names means that Python will locate the
executable’s directory using your system search-path setting (i.e., PATH).
os.execle
os.execve
Adding a letter e to the execv and execl names means an extra, last argument is a
dictionary containing shell environment variables to send to the program.
os.execvpe
os.execlpe
Adding the letters p and e to the basic exec names means to use the search path
and to accept a shell environment settings dictionary.

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

if __name__ == '__main__':
    doc_to_odt('ecdl1.doc')
