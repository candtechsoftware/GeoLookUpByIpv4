import React from 'react';

const IpInfo = ({ip}) => {

  return (
    <li>
      <div className="card ip-card" >
  <div className="card-body">
    <h5 className="card-title">IPv4 Address: {ip.addr}</h5>
    <h6 className="card-subtitle mb-2 text-muted">ID: {ip.geoname_id}</h6>
    <p className="card-text">Location:<br></br>
      <span>Longitude: {ip.location.longitude}</span>
      <br></br>
      <span className="card-text">Latitude: {ip.location.latitude}</span>
    </p>

  </div>
</div>
    </li>
  )

};


export default IpInfo;