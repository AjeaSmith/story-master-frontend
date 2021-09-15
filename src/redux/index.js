import { combineReducers } from 'redux';

import userReducer from './user/reducer/userReducer';

const allReducers = combineReducers({ userState: userReducer });

export default allReducers;
