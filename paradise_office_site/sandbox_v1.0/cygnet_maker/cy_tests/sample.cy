/* Sample cygnet file 
*
*	Made on the 24/7/13 by Hazel Windle
*
*/

{ Author: Hazel Windle, 
  Program_Name: simple_word_processor, 
  Organisation: Paradise Software, 
  Revision: 0.1,
  Date_Made: today
}
/* end of meta information */
/* Format information first */
#write_open_document_word_files#
#read_open_document_word_files#
#write_text_files[unix]#
#read_text_files[unix]#
#write_web_pages[legacy]#
#read_web_pages[legacy]#
#write_ms_doc_files[1997]#
#read_ms_doc_files[1997]#

/* The program containers */
#tablet_layout_with_animation#
#menu_bar[5 menus]#
  #menu[File]#
    #menu_item[New File](new)#
    #menu_item[Open](open_file)#
    #menu_item[Save](save_file)#
    #menu_item[Save As](save_as_dl)#
    #menu_item[Convert File](convert_file)#
    #menu_item[Close File](close_file)#
  #menu[View]#
    #sub_menu[Zoom >]#
      #menu_item[10%](.zoom_page[10])#
      /* the . before zoom_page means this is a Python script not in the Sandbox, and can possibly be third party */
      #menu_item[25%](.zoom_page[25])#
      #menu_item[50%](.zoom_page[50])#
      #menu_item[fit width](.zoom_page[fit width])#
      #menu_item[100%](.zoom_page[100])#
  #menu[Insert]#
  #menu[Language]#
  #menu[Help]#