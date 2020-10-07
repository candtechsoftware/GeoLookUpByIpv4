const express = require('express');
const Reader = require('@maxmind/geoip2-node').Reader;
const cors = require('cors');
require('dotenv').config()


const app = express();
app.use(cors());
app.use(express.json());

// Defining routes

// @route GET api/ip/:ip
// @desc  Get Location Data by Ip Address
// @access public
 app.get("/api/ips/:ip", async (req, res) => {
  try {
  const resp = await Reader.open('./GeoLite2-City.mmdb');
  const ipAddr = req.params.ip;
  const ipLocationInfo = resp.city(ipAddr);
      
  console.log();
  const returnObj = {
    ip: ipAddr,
    location: {
      city: ipLocationInfo.city.names.en,
      latitude: ipLocationInfo.location.latitude,
      longitude: ipLocationInfo.location.longitude,
    }
  }
  res.json(returnObj);

  } catch (err) {
    console.log(err);
  }
});


const PORT = process.env.PORT || 9090;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
