#!/bin/bash

# Checking the file passed as the 1st argument exists...
if [ -z $1 ]
then 
  echo "No fileinfo string given on the command line"
else
  fileinfo=$1
fi
#echo "$fileinfo"
filename=`tail -n 2 $fileinfo | head -n 1 `
filetype=`tail -n 1 $fileinfo`
#baseName=`tail -n 1 $fileinfo`
fileending=${filename##*.} # '##*.' gets everything after the dot

#echo "init mimetype: $filetype"
#echo "init baseName: $baseName"
#echo "File ending: $fileending"
#conv_type=""
case $filetype in
  application/vnd.ms-word.document.macroEnabled.12 | application/vnd.openxmlformats-officedocument.wordprocessingml.document | application/vnd.oasis.opendocument.text-template) 
    conv_type="odt" ;;
   application/msword) 
    if [ $fileending = "doc" ]
    then
      conv_type="odt"
    elif [ $fileending = "dot" ]
    then
      conv_type="ott"
    fi
  ;;
  application/vnd.openxmlformats-officedocument.wordprocessingml.template | application/vnd.oasis.opendocument.text) 
    conv_type="ott" ;;
  # Now for spreadsheets...
  application/vnd.ms-excel)
    if [ $fileending = "xls" ]
    then
      conv_type="ods"
    elif [ $fileending = "xlt" ]
    then
      conv_type="ots"
    else
      conv_type="ods" # for xlsm
    fi
  ;;
  application/vnd.openxmlformats-officedocument.spreadsheetml.template | application/vnd.oasis.opendocument.spreadsheet) 
    conv_type="ots" ;;
  application/vnd.openxmlformats-officedocument.spreadsheetml.sheet | application/vnd.oasis.opendocument.spreadsheet-template)
    conv_type="ods" ;;
  # Now for presentations ...
  application/vnd.ms-powerpoint.template | text/plain | application/vnd.ms-powerpoint.template.macroEnabled.12 | application/vnd.openxmlformats-officedocument.presentationml.template | application/vnd.oasis.opendocument.presentation) 
    conv_type="otp" ;;
  application/vnd.ms-powerpoint | application/vnd.openxmlformats-officedocument.presentationml.presentation | application/vnd.oasis.opendocument.presentation-template)
    conv_type="odp" ;;
  # other file endings to be in standards.py /sh bits
  *) echo "File type not recognised" ;;
  esac

#echo "Filename: " $filename
#echo "Converts to: " $conv_type
libreoffice --headless --nologo --invisible --convert-to $conv_type $filename