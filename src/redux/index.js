import { combineReducers } from 'redux';

import userReducer from './user/reducer/userReducer';
import authReducer from './auth/authReducer';
import storyReducer from './story/reducer/storyReducer';

const allReducers = combineReducers({
	userState: userReducer,
	authState: authReducer,
	storyState: storyReducer,
});

export default allReducers;
