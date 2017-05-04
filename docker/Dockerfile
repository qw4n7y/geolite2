FROM phusion/baseimage:latest

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get install -y nodejs build-essential

RUN npm install pm2 -g

RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:max_size 10G
RUN pm2 set pm2-logrotate:retain 1

RUN mkdir -p /var/www

ADD docker/services/app.runit /etc/service/app/run
RUN chmod +x /etc/service/app/run

COPY update-geolite2-city.sh /etc/cron.weekly/update-geolite2-city
RUN /etc/cron.weekly/update-geolite2-city

WORKDIR /var/www

COPY package.json /var/www
RUN npm install

ADD . /var/www
RUN mkdir -p /var/www/logs
RUN mkdir -p /var/www/tmp

ENV NPM_CONFIG_LOGLEVEL trace
ENV NODE_ENV production

EXPOSE 80
