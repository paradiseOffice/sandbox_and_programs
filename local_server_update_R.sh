#!/bin/bash

# Hazel Windle
# Puts all the paradise office files in
# The correct local server directories.

cp -R * /var/www/paradise/
cp -R home__web_includes/* /home/web_includes/
chown -R work: /home/web_includes/
chown -R work: /home/uploads
chmod 777 /home/uploads
chmod -R 644 /home/uploads/*
chmod -R 755 /home/web_includes/
chown -R work: /var/www/paradise/
chmod -R 755 /var/www/paradise/ 
