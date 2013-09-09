# The first key in the dictionary is the name (attribute), followed by the
# exact name from the XML. pic is the picture URI. status gets added 
# and is either 'ok' or 'picture not here'

print = { 'name': 'Print', 'pic': 'icons/common/document-print.png', 'status': '' }
time = {'name': 'Time', 'pic': 'icons/common/time.png', 'status': '' }
wiki = { 'name': 'Wikipedia', 'pic': 'icons/text/book.png', 'status': '' }
look_up = {'name': 'Look Up', 'pic': 'icons/internet/search.png', 'status': '' }
grammar = {'name': 'Grammar', 'pic': 'icons/text/grammar.png', 'status': '' }
bold = {'name': 'bold', 'pic': 'icons/text/format-text-bold.png', 'status': '' }
underline = {'name': 'underline', 'pic': 'icons/text/format-text-underline.png', 'status': '' }
italic = {'name': 'italic', 'pic': 'icons/text/format-text-italic.png', 'status': '' }
all_caps = {'name': 'all caps', 'pic': 'icons/text/pencil.png',  'status': '' }
sup_script = {'name': 'super script', 'pic': 'icons/text/superscript.png', 'status': '' }
sub_script = {'name': 'sub script', 'pic': 'icons/text/subscript.png', 'status': '' }
add_style = { 'name': 'add style', 'pic': 'icons/text/styles.png', 'status': '' }
left_just = { 'name': 'Left', 'pic': 'icons/text/format-justify-left.png', 'status': '' }
centre_just = { 'name': 'Centre', 'pic': 'icons/text/format-justify-center.png', 'status': '' }
right_just = {'name': 'Right', 'pic': 'icons/text/format-justify-right.png', 'status': '' }
justify_just = {'name': 'Justify', 'pic': 'icons/text/format-justify-fill.png', 'status': '' }
first_line = { 'name': 'first line indent', 'pic': 'icons/text/sticky-notes.png', 'status': '' }
drop_cap = { 'name': 'Drop cap', 'pic': 'icons/text/drop_cap.png', 'status': '' }
inc_indent = { 'name': 'Increase Indent', 'pic': 'icons/text/format-indent-more.png', 'status': '' }
dec_indent = { 'name': 'Decrease Indent', 'pic': 'icons/text/format-indent-less.png', 'status': '' }

main-app_db = {}
main-app_db['print'] = print
main-app_db['time'] = time
main-app_db['wiki'] = wiki
main-app_db['look_up'] = look_up
main-app_db['grammar'] = grammar
main-app_db['bold'] = bold
main-app_db['underline'] = underline
main-app_db['italic'] = italic
main-app_db['all_caps'] = all_caps
main-app_db['sup_script'] = sup_script
main-app_db['sub_script'] = sub_script
main-app_db['add_style'] = add_style
main-app_db['left_just'] = left_just
main-app_db['centre_just'] = centre_just
main-app_db['right_just'] = right_just
main-app_db['justify_just'] = justify_just
main-app_db['first_line'] = first_line
main-app_db['drop_cap'] = drop_cap
main-app_db['inc_indent'] = inc_indent
main-app_db['dec_indent'] = dec_indent

d-bold = {'name': 'bold', 'pic': 'icons/text/format-text-bold.png', 'status': '' }
d-underline = {'name': 'underline', 'pic': 'icons/text/format-text-underline.png', 'status': '' }
d-italic = {'name': 'italic', 'pic': 'icons/text/format-text-italic.png', 'status': '' }

d-format-words_db = {} 
d-format-words_db['d-bold'] = d-bold
d-format-words_db['d-underline'] = d-underline
d-format-words_db['d-italic'] = d-italic

if __name__ == '__main__':	# When run as a script
  for key in db:
    print(key, '=>\n	', db[key])
