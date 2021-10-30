import { combineReducers } from 'redux';

import userReducer from './user/reducer/userReducer';
import authReducer from './auth/authReducer';
import storyReducer from './story/reducer/storyReducer';
import profileReducer from './profile/reducer/profileReducer';
import commentReducer from './comment/reducer/commentReducer';

const allReducers = combineReducers({
	userState: userReducer,
	authState: authReducer,
	storyState: storyReducer,
	profileState: profileReducer,
	commentState: commentReducer,
});

export default allReducers;
