# The first key in the dictionary is the name (attribute), followed by the
# exact name from the XML. Command is the command name. status gets added a# nd is either 'ok' or 'command not here'. URL holds the link to the command when it's processed by a program.

new_file = { 'name': 'New File', 'command': 'new', 'url': '', 'status': '' }
open_file = {'name': 'Open', 'command': 'open_upload', 'url': '', 'status': '' }
save_file = {'name': 'Save', 'command': 'save_download', 'url': '', 'status': '' }
save_as = {'name': 'Save As', 'command': 'save_as_dl', 'url': '', 'status': '' }
convert = {'name': 'Convert File', 'command': 'convert_bfile', 'url': '', 'status': '' }
close_file = {'name': 'Close File', 'command': 'close_file', 'url': '', 'status': '' }
ins_pic = {'name': 'Picture', 'command': 'pic_preview', 'url': '', 'status': '' }
grammar = {'name': 'Grammar', 'command': 'lexigraphic_checker', 'url': '', 'status': '' }

main-app_db = {}
main-app_db['new_file'] = new_file
main-app_db['open_file'] = open_file
main-app_db['save_file'] = save_file
main-app_db['save_as'] = save_as
main-app_db['convert'] = convert
main-app_db['close_file'] = close_file
main-app_db['ins_pic'] = ins_pic
main-app_db['grammar'] = grammar

# One of these per dialog box
add_colours = {'name': 'Add colours', 'command': 'color_picker', 'url': '', 'status': '' }
ok = { 'name': 'OK', 'command': 'ok', 'url': '', 'status': '' }
cancel = { 'name': 'Cancel', 'command': 'cancel', 'url': '', 'status': '' }
d-format-words_db = {}
d-format-words_db['add_colours'] = add_colours
d-format-words_db['ok'] = ok
d-format-words_db['cancel'] = cancel


if __name__ == '__main__':	# When run as a script
  for key in db:
    print(key, '=>\n	', db[key])
