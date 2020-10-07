import React, {useState, useEffect} from 'react';
import IpSection from '../Ips/IpSection';
import LargeIpInfo from '../Ips/LargeIpInfo';

const Main = () => {
  useEffect(() => {
    try {

    } catch (err){
      console.error(err);
    }
  })



  
  const [currentIp, setCurrentIp] = useState({
    ip: {}
  })
  const {ip} = currentIp;
  const ipList = [
    {
      geoname_id: 6252001,
      addr: "12321",
      location: {
        accuracy_radius: 1000,
        latitude: 37.751,
        longitude: -97.822,
        time_zone: 'America/Chicago'
      },
    },
    {
      geoname_id: 62524001,
      addr: "12321",
      location: {
        accuracy_radius: 1000,
        latitude: 37.751,
        longitude: -97.822,
        time_zone: 'America/Chicago'
      },
    },
    {
      geoname_id: 62352001,
      addr: "12321",
      location: {
        accuracy_radius: 1000,
        latitude: 37.751,
        longitude: -97.822,
        time_zone: 'America/Chicago'
      },
    },
    {
      geoname_id: 36252001,
      addr: "12321",
      location: {
        accuracy_radius: 1000,
        latitude: 37.751,
        longitude: -97.822,
        time_zone: 'America/Chicago'
      },
    }
  ]

  const ipClickHandler = (e, index) => {
    e.preventDefault();
    console.log(index); 
    console.log("Inside Handler: ", ipList[index])
    setCurrentIp({...currentIp, ip: ipList[index]});
    console.log("After: ");
    console.log(ip)
  }


  return (
    <div className="main" >
      <div className="ip-section">
      <IpSection ipList={ipList} ipClickHandler={ipClickHandler} />
      </div>
      <div className="single-section">
        <LargeIpInfo ip={currentIp} setCurrent={setCurrentIp}/>
      </div>
     </div>
  )
};

export default Main; 