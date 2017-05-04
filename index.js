const port = process.env.PORT || 3000
const geolite2path = process.env.GEOLITE2PATH || '/usr/share/maxmind/GeoLite2-City.mmdb'

var express = require('express');
var app = express();

var maxmind = require('maxmind');
var geolite2 = maxmind.openSync(geolite2path, {
  cache: {
    max: 100000, // max items in cache
    maxAge: 1000 * 60 * 60 // life time in milliseconds, 1 hour
  },
  watchForUpdates: true // Supports reloading the reader when changes occur to the database that is loaded
});

app.get('/', function (req, res) {
  let ip = req.query.ip;
  let result =  geolite2.get(ip);

  if (result !== null) {
    res.json({
      ip: ip,
      lat: result.location.latitude,
      lng: result.location.longitude
    })
  } else {
    res.status(404).end();
  }
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
