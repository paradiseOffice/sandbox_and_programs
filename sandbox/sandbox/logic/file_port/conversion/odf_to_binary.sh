#!/bin/bash

# Checking the file passed as the 1st argument exists...
if [ -z $1 ]
then 
  echo "No fileinfo string given on the command line"
else
  fileinfo=$1
fi
if [ -z $2 ]
then 
  echo "No file type to convert to..."
  return 1
fi
conv=$2
echo "$conv"
filename=`head -n 1 $fileinfo`
filetype=`tail -n 1 $fileinfo`
#baseName=`tail -n 1 $fileinfo`

fileending=${filename##*.} # '##*.' gets everything after the dot
echo "init mimetype: $filetype"
#echo "init baseName: $baseName"
echo "File ending: $fileending"

#if # rewrite as giant case [["$conv"="doc"||"$conv"="docx"&&"$filetype"="application/vnd.oasis.opendocument.text"||"$filetype"="application/vnd.oasis.opendocument.text-template"]]
#then
#    conv_type="$conv"
#elif [ "$conv" = "dot" || "$conv" = "dotx" && "$filetype" = "application/vnd.oasis.opendocument.text" || "$filetype" = "application/vnd.oasis.opendocument.text-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "ott" && "$filetype" = "application/vnd.oasis.opendocument.text" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "xls" || "$conv" = "xlsx" && "$filetype" = "application/vnd.oasis.opendocument.spreadsheet" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "xlt" || "$conv" = "xltx" || "$conv" = "ots" && "$filetype" = "application/vnd.oasis.opendocument.spreadsheet" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "ppt" || "$conv" = "pptx" && "$filetype" = "application/vnd.oasis.opendocument.presentation" || "$filetype" = "application/vnd.oasis.opendocument.presentation-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "otp" || "$conv" = "potx" || "$conv" = "pot" && "$filetype" = "application/vnd.oasis.opendocument.presentation" || "$filetype" = "application/vnd.oasis.opendocument.presentation-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "pdf" && "$filetype" = "application/vnd.oasis.opendocument.text" || "$filetype" = "application/vnd.oasis.opendocument.text-template" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet-template" || "$filetype" = "application/vnd.oasis.opendocument.presentation" || "$filetype" = "application/vnd.oasis.opendocument.presentation-template" ]
#then
#    conv_type="$conv"
#elif [ "$conv" = "txt" || "$conv" = "csv" && "$filetype" = "application/vnd.oasis.opendocument.text" || "$filetype" = "application/vnd.oasis.opendocument.text-template" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet" || "$filetype" = "application/vnd.oasis.opendocument.spreadsheet-template" || "$filetype" = "application/vnd.oasis.opendocument.presentation" || "$filetype" = "application/vnd.oasis.opendocument.presentation-template" ]
#then
    #`./txt_to_html.py $filename`
#    echo "Convert text to html"
#    conv_type="$conv"
#elif [ "$conv" = "sql" ]
#then
#    echo "Not implemented yet"
#    conv_type="$conv"
#elif [ "$conv" = "html" || "$conv" = "xhtml" ]
#then
    #`./saveHtml.py $filename`
#    echo "Copying html..."
#    conv_type="$conv"
#elif [ "$conv" = "xml" ]
#then 
    #`./saveXml.py $filename`
#    echo "Converting html to xml via XSLT..."
#    conv_type="$conv"
#else:
#    echo "Wrong document type to convert to!"
#    return 2
#fi

#libreoffice --headless --nologo --invisible --convert-to $conv_type $filename
