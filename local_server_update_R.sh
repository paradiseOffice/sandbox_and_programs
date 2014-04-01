#!/bin/bash

# Hazel Windle
# Puts all the paradise office files in
# The correct local server directories.

cp -R * /var/www/localhost/htdocs/paradise/
cp -R home__web_includes/* /home/web_includes/
chown -R hazel: /home/web_includes/
chown -R hazel: /home/uploads
chmod 777 /home/uploads
chmod -R 644 /home/uploads/*
chmod -R 755 /home/web_includes/
chown -R hazel: /var/www/localhost/htdocs/paradise/
chmod -R 755 /var/www/localhost/htdocs/paradise/ 
