import { combineReducers } from 'redux';

import userReducer from './user/reducer/userReducer';
import authReducer from './auth/authReducer';

const allReducers = combineReducers({
	userState: userReducer,
	authState: authReducer,
});

export default allReducers;
