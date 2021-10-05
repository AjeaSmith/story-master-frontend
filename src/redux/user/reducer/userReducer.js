const initalState = {
	error: '',
	loading: false,
	success: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER_SUCCESS': {
			return { ...state, success: action.payload };
		}
		case 'REGISTER_FAIL': {
			return { ...state, success: false, error: action.payload };
		}
		case 'GET_USER': {
			return { ...state, user: action.payload };
		}
		default:
			return state;
	}
};
export default userReducer;
