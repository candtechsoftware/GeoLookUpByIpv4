import { GET_IPINFO, CLEAR_IPINFO, SET_CURRENT, ERROR } from "../type";

const initialState = {
	ipList: [],
	currentIp: {},
	loading: true,
	error: {},
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_IPINFO:
				return {
					...state,
					ipList: [...state.ipList, payload],
					currentIp: payload,
					loading: false,
				};
		case CLEAR_IPINFO:
			return {
				ipList: initialState.ipList,
				currentIp: initialState.currentIp,
				loading: true,
			};
		case SET_CURRENT:
			return {
				...state,
				currentIp: payload,
			};
		case ERROR:
			return {
				...state,
				error: payload,
			};

		default:
			return state;
	}
}
