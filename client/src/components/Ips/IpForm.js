import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getIpInfo } from "../../redux/actions/ipinfo";

const IpForm = ({ getIpInfo }) => {
	const [formData, setFormData] = useState({
		ip: "",
	});

	const { ip } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: [e.target.value] });
	};

	// Regex validation of ip address. I would like to abstract into 
	const ValidateIPaddress = (ipaddress) => {
		if (
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
				ipaddress
			)
		) {
			return true;
		}
		return false;
	};

	
	const onSubmit = (e) => {
		e.preventDefault();
		if (!ValidateIPaddress(ip)) {
			alert("Invalid Ip ");
		} else {
			getIpInfo("" + ip);
		}
	};
	return (
		<div>
			<form className='form-group' onSubmit={onSubmit}>
				<div className='seach-section'>
					<input
						className='search-input'
						type='text'
						name='ip'
						onChange={onChange}
					/>
					<button className='btn btn-primary search-btn'>search</button>
				</div>
			</form>
		</div>
	);
};

IpForm.propTypes = {
	getIpInfo: PropTypes.func.isRequired,
};

export default connect(null, { getIpInfo })(IpForm);
