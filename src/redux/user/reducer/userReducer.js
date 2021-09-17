const initalState = {
	error: '',
	message: '',
	loading: false,
	isAuthenticated: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER_PENDING': {
			return { ...state, loading: true };
		}
		case 'REGISTER_SUCCESS': {
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				message: action.payload,
			};
		}
		case 'REGISTER_ERROR': {
			return {
				...state,
				error: action.payload,
				loading: false,
				isAuthenticated: false,
			};
		}
		default:
			return state;
	}
};
export default userReducer;
