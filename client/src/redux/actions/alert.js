import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from '../type';

// Universal Alert Action 
export const setAlert = (msg) => dispatch =>{
  const id = uuidv4();

  dispatch({ 
    type: SET_ALERT,
    payload: {msg, id}
  });

  setTimeout(() => dispatch({type: REMOVE_ALERT , payload: id}));
}