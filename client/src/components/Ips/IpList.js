import React from "react";
import IpInfo from "./IpInfo";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrent, clearIpInfo } from "../../redux/actions/ipinfo";

const IpList = ({ ipList, setCurrent, clearIpInfo }) => {
	return (
		<div className='ip-list'>
			{ipList.length > 0 && (
				<button className='btn btn-danger clear-btn' onClick={clearIpInfo}>
					Clear
				</button>
			)}
			<ul>
				{ipList.map((ip, index) => (
					<a
						key={index}
						onClick={(e) => {
							e.preventDefault();
							setCurrent(ip);
						}}
						href='/'>
						<IpInfo key={index} ip={ip} />
					</a>
				))}
			</ul>
		</div>
	);
};

IpList.propTypes = {
	ipList: PropTypes.array.isRequired,
	setCurrent: PropTypes.func.isRequired,
	clearIpInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	ipList: state.ip.ipList,
});
export default connect(mapStateToProps, { setCurrent, clearIpInfo })(IpList);
