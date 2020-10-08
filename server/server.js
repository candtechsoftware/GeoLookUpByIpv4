const express = require("express");
const Reader = require("@maxmind/geoip2-node").Reader;
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Defining routes
app.get('/', (req, res)=> {
	res.json({
		messge: "Hello There! If you want to see your location info try querying /api/ips/<your ip address>",
		status: 200 ,
		})
})
// @route GET api/ip/:ip
// @desc  Get Location Data by Ip Address
// @access public
app.get("/api/ips/:ip", async (req, res) => {
	try {
		const resp = await Reader.open("./GeoLite2-City.mmdb");
		const ipAddr = req.params.ip; // Grabing the url paremeter
		const ipLocationInfo = resp.city(ipAddr); // Looiking up the ip and getting the info from the db file

		console.log();

		// Made a nice and clean format of the data as the db returns alot more data than this
		const returnObj = {
			ip: ipAddr,
			city: ipLocationInfo.city.names.en,
			latitude: ipLocationInfo.location.latitude,
			longitude: ipLocationInfo.location.longitude,
		};
		res.json(returnObj);
	} catch (err) {
		res.status(400).send(`Server Error ${err.message}`);
	}
});

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
