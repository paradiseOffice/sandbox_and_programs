#!/bin/bash

# Unit testing the binary file and odf file conversion utilities
#
#
#
#
#
#
#

./doc_conv_open.py ../msoffice_files/middle/summer_recipes1.doc
file -bi ./summer_recipes1.odt
./doc_conv_open.py ../msoffice_files/middle/summer_recipes.docx
file -bi ./summer_recipes.odt
./doc_conv_open.py ../msoffice_files/middle/summer_recipes1.dot
file -bi ./summer_recipes.ott
./doc_conv_open.py ../msoffice_files/middle/summer_recipes5.dotx
file -bi ./summer_recipes5.ott
# Spreadsheets
./doc_conv_open.py ../msoffice_files/middle/cd_wishlist2.xls
file -bi ./cd_wishlist2.ods
./doc_conv_open.py ../msoffice_files/middle/cd_collection1.xlsx
file -bi ./cd_collection1.ods
./doc_conv_open.py ../msoffice_files/middle/cd_collection.xlt
file -bi ./cd_collection.ots
./doc_conv_open.py ../msoffice_files/middle/cd_collection1.xltx
file -bi ./cd_collection1.ots
# Presentations
./doc_conv_open.py ../msoffice_files/middle/holidays.ppt
file -bi ./holidays.odp
./doc_conv_open.py ../msoffice_files/middle/holidays4.pptx
file -bi ./holidays4.odp
./doc_conv_open.py ../msoffice_files/middle/red_presentation.pot
file -bi ./red_presentation.otp
./doc_conv_open.py ../msoffice_files/middle/red.potx
file -bi ./red.otp

# Odf - binary and standard file formats. For standards it calls other
# Python scripts
./doc_conv_save.py loaded_file.odt doc
file -bi loaded_file.doc
./doc_conv_save.py loaded_file.odt docx
file -bi loaded_file.docx
./doc_conv_save.py loaded_file.odt dot
file -bi loaded_file.dot
./doc_conv_save.py loaded_file.odt dotx
file -bi loaded_file.dotx
./doc_conv_save.py loaded_file.odt ogg # To test wrong ftype error...
file -bi loaded_file.ogg 
# Writer template file...
./doc_conv_save.py loaded_temp.ott doc
file -bi loaded_temp.doc
./doc_conv_save.py loaded_temp.ott docx
file -bi loaded_temp.docx
./doc_conv_save.py loaded_temp.ott dot
file -bi loaded_temp.dot
./doc_conv_save.py loaded_temp.ott dotx
file -bi loaded_temp.dot # For compatibility with older Office versions
./doc_conv_save.py loaded_temp.ott odt
file -bi loaded_temp.odt
# Spreadsheets
./doc_conv_save.py loaded_temp.ots ods
file -bi loaded_temp.ods
./doc_conv_save.py loaded_temp.ots xlt
file -bi loaded_temp.xlt
./doc_conv_save.py loaded_temp.ots xltx
file -bi loaded_temp.xltx
./doc_conv_save.py loaded_file.ods xls
file -bi loaded_file.xls
./doc_conv_save.py loaded_file.ods xlsx
file -bi loaded_file.xlsx
./doc_conv_save.py loaded_file.ods xlt
file -bi loaded_file.xlt
./doc_conv_save.py loaded_file.ods xltx
file -bi loaded_file.xltx
# Presentations
./doc_conv_save.py loaded_file.odp ppt
file -bi loaded_file.ppt
./doc_conv_save.py loaded_file.odp pptx
file -bi loaded_file.pptx
./doc_conv_save.py loaded_file.odp pot
file -bi loaded_file.pot
./doc_conv_save.py loaded_file.odp potx
file -bi loaded_file.potx
./doc_conv_save.py loaded_file.odp otp
file -bi loaded_file.otp
./doc_conv_save.py loaded_temp.otp ppt
file -bi loaded_temp.ppt
./doc_conv_save.py loaded_temp.otp pptx
file -bi loaded_temp.pptx
./doc_conv_save.py loaded_temp.otp pot
file -bi loaded_temp.pot
./doc_conv_save.py loaded_temp.otp potx
file -bi loaded_temp.potx
./doc_conv_save.py loaded_temp.otp odp
file -bi loaded_temp.odp

# Put standards tests down here ( html pdf etc)