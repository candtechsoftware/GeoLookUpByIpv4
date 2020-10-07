import React from 'react';
import IpInfo from './IpInfo';

const IpList = ({ipList , ipClickHandler}) => {
  return (
    <div className="ip-list">
    <ul>
      {ipList.map((ip, index) => (
        <a key={ip.geoname_id} onClick={e => ipClickHandler(e, index)} href='/'>
        <IpInfo key={index} ip={ip} />
        </a>
      ))}
    </ul>
    </div>
  )
};

export default IpList;