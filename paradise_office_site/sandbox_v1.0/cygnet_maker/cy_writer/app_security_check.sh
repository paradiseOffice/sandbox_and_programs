#!/bin/bash

# Checks the main_app.xml file for integrity against the provided keyfile.

# method md5

md5sum -c check20130816.md5 > enc-check
  if [grep ok end-check]
      echo -e "passes"
  else
      echo -e "failed"
# method gnupg key

# method SSL certificate