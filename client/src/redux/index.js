import { combineReducers } from 'redux';
import alert from './reducers/alertReducer';
import ip from './reducers/ipReducer';

export default combineReducers({
  alert,
  ip,  
});