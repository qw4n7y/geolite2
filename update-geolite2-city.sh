#!/bin/bash

mkdir -p /usr/share/maxmind
curl http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz > /usr/share/maxmind/GeoLite2-City.mmdb.gz
gunzip /usr/share/maxmind/GeoLite2-City.mmdb.gz
