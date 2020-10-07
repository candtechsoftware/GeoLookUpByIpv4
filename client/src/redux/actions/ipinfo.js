import { GET_IPINFO, SET_CURRENT, CLEAR_IPINFO, ERROR } from '../type.js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// Normally I would like to abstract the database connection in to a 
// service So if we needed to change the db set up we could easily 


export const getIpInfo = (ipaddr) => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:9090/api/ips/${ipaddr}`)
  
    console.log(response);
    dispatch({
       type: GET_IPINFO,
       payload: response.data
    })

  } catch (err) {
    dispatch({
      type: ERROR,
      payload: {msg: err} 
    })
  }
}

export const setCurrent = (ipaddr) => async dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: ipaddr
  });
};

export const clearIpInfo = () => async dispatch => {
  dispatch({
    type: CLEAR_IPINFO,
    payload: {}
  })
}