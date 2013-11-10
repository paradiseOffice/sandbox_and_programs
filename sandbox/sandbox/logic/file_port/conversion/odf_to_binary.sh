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
  exit 1
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

case $filetype in
  application/vnd.oasis.opendocument.text)
    if [ $conv = "doc" ]
    then
      conv_type="doc"
    elif [ $conv = "docx" ]
    then
      conv_type="docx"
    elif [[ $conv = "dot" || $conv = "dotx" ]]
    then
      conv_type="$conv"
    # Standards if-elif starts here
    elif [ $conv = "pdf" ]
    then
      conv_type="pdf"
    elif [ $conv = "html" ]
    then
      conv_type="html"
    elif [ $conv = "txt" ]
    then
      conv_type="txt"
    else
      echo "conv_type=\"None\" "
      exit 1
    fi
    # end of standards bit
    ;;
  application/vnd.oasis.opendocument.text-template)
    if [ $conv = "doc" ]
    then
      conv_type="doc"
    elif [ $conv = "docx" ]
    then
      conv_type="docx"
    elif [[ $conv = "dot" || $conv = "dotx" ]]
    then
      conv_type="dot"
    elif [ $conv = "odt" ]
    then
      conv_type="odt"
    # Standards if-elif starts here
    elif [ $conv = "pdf" ]
    then
      conv_type="pdf"
    elif [ $conv = "html" ]
    then
      conv_type="html"
    elif [ $conv = "txt" ]
    then
      conv_type="txt"
    else
      echo "conv_type=\"None\" "
      exit 1
    fi
    # end of standards bit
    ;;
  application/vnd.oasis.opendocument.spreadsheet)
    if [ $conv = "xls" ]
    then
      conv_type="xls"
    elif [ $conv = "xlsx" ]
    then
      conv_type="xlsx"
    elif [ $conv = "xlt" ]
    then
      conv_type="xlt"
    elif [ $conv = "xltx" ]
    then
      conv_type="xltx"
    elif [ $conv = "ots" ]
    then
      conv_type="ots"
    # Standards if-elif starts here
    elif [ $conv = "pdf" ]
    then
      conv_type="pdf"
    elif [ $conv = "html" ]
    then
      conv_type="html"
    elif [ $conv = "csv" ]
    then
      conv_type="csv"
    else
      echo "conv_type=\"None\" "
      exit 1
    fi
    # end of standards bit
    ;;    
  application/vnd.oasis.opendocument.spreadsheet-template)
    if [ $conv = "xlt" ]
    then
      conv_type="xlt"
    elif [ $conv = "xltx" ]
    then
      conv_type="xltx"
    elif [ $conv = "ods" ]
    then
      conv_type="ods"
    # Standards if-elif starts here
    elif [ $conv = "pdf" ]
    then
      conv_type="pdf"
    elif [ $conv = "html" ]
    then
      conv_type="html"
    elif [ $conv = "csv" ]
    then
      conv_type="csv"
    else
      echo "conv_type=\"None\" "
      exit 1
    fi
    # end of standards bit
    ;;    
  application/vnd.oasis.opendocument.presentation | application/vnd.oasis.opendocument.presentation-template)
    if [ $conv = "ppt" ]
    then
      conv_type="ppt"
    elif [ $conv = "pptx" ]
    then
      conv_type="pptx"
    elif [ $conv = "pot" ]
    then
      conv_type="pot"
    elif [ $conv = "potx" ]
    then
      conv_type="potx"
    elif [ $conv = "otp" ]
    then
      conv_type="otp"
    elif [ $conv = "odp" ]
    then
      conv_type="odp"
    # Standards if-elif starts here
    elif [ $conv = "pdf" ]
    then
      conv_type="pdf"
    elif [ $conv = "html" ]
    then
      conv_type="html"
    elif [ $conv = "html-js" ]
    then
      conv_type="html-js"
    else
      echo "conv_type=\"None\" "
      exit 1
    fi
    # end of standards bit
    ;;
  *) echo "Wrong file type inputted" ;;
esac

if [[ $conv = "html" || $conv = "html-js" || $conv = "xml" ]]
then
  `./sgml_save.py $filename $conv_type`
elif [ $conv = "pdf" ]
then
  pdftohtml pdf"$filename.pdf" "$filename"
elif [[ $conv = "txt" || $conv = "csv" || $conv = "sql" ]]
then
  `./text_save.py $filename $conv_type`
else
  libreoffice --headless --nologo --invisible --convert-to $conv_type $filename
fi