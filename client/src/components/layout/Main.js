import React from "react";
import IpSection from "../Ips/IpSection";
import LargeIpInfo from "../Ips/LargeIpInfo";

const Main = () => {
	return (
		<div className='main'>
			<div className='ip-section'>
				<IpSection />
			</div>
			<div className='single-section'>
				<LargeIpInfo />
			</div>
		</div>
	);
};

export default Main;
