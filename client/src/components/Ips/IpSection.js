import React from 'react';
import IpForm from './IpForm';
import IpList from './IpList';

const IpSection = ({ipList, ipClickHandler}) => (
  <div className="support panel panel-primary">
    <div className="panel-heading ip-form-header">
       <h4><strong>Look Up Ip</strong></h4>
     </div>
    <div className="panel-body ip-form">
      <IpForm />
      <IpList ipList={ipList} ipClickHandler={ipClickHandler} />
    </div>
  </div>
);

export default IpSection;