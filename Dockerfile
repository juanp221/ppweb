#FROM php:7.0-apache
FROM nginx:alpine
#COPY src/ /var/www/html
COPY src /usr/share/nginx/html

