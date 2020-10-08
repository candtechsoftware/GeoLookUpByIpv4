import React from "react";

const IpInfo = ({ ip }) => {
	return (
		<li>
			<div className='card ip-card'>
				<div className='card-body'>
					<h5 className='card-title'>IPv4 Address: {ip.ip}</h5>
					<p className='card-text'>
						Location:<br></br>
						<span>Longitude: {ip.longitude}</span>
						<br></br>
						<span className='card-text'>Latitude: {ip.latitude}</span>
					</p>
				</div>
			</div>
		</li>
	);
};

export default IpInfo;
