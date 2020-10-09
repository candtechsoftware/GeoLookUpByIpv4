import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const LargeIpInfo = ({ currentIp, loading }) => {
	return loading || currentIp === null ? (
		<div className='conatainer'>
			<h2 className='large-info-header search-ip-header'>Search Ip:</h2>
		</div>
	) : (
		<div className='Info'>
			<div className='conatainer'>
				<h2 className='large-info-header'>IPv4 Address: {currentIp.ip}</h2>
			</div>
			<div className='card ip-card'>
				<div className='card-body'>
					<h5 className='card-title'>City: {currentIp.city}</h5>
					<p className='card-text'>
						Location:<br></br>
						<span>Latitude: {currentIp.latitude}</span>
						<br></br>
						<span className='card-text'>Longitude: {currentIp.longitude}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

LargeIpInfo.propTypes = {
	currentIp: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	currentIp: state.ip.currentIp,
	loading: state.ip.loading,
});

export default connect(mapStateToProps)(LargeIpInfo);
