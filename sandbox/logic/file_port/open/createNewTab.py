#!/usr/bin/python3.3

"""
Creates a new tab within the file port. Each new tab on the file port goes before the new tab button, in a horizontal row. A partial name gets written on each tab.

"""

class CreateNewTab(): # returns tabref
  def newFile(name):
    filename = name + '.html'
    
    skelfile = open('skeleton/basedoc.html', 'rb').read()
    open(filename, 'wb').write(skelfile)

    cssfile = open(name + '.css', 'w')
    tablist = []
    tabref = filename
    tablist.append(tabref)
    return tablist, tabref

  def fileUploaded(openname, writetype, convert):
    pass

if __name__ == '__main__':
  debugNewFile = CreateNewTab.newFile("tres")
  print(debugNewFile)