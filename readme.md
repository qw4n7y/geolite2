GEOLITE2PATH=../GeoLite2-City.mmdb PORT=8080 pm2 start ecosystem.config.js
docker build -t qw4n7y/geolite2:latest -f docker/Dockerfile .
docker push qw4n7y/geolite2:latest
