FROM nginx:1.21.1
COPY build/ /usr/share/nginx/html/frontend
# change port to 8080 and config for frontend context path
COPY ./nginx/default /etc/nginx/conf.d/default.conf