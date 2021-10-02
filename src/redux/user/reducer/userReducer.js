const initalState = {
	error: '',
	message: '',
	loading: false,
	username: null,
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
		case 'LOGIN_PENDING': {
			return { ...state, loading: true };
		}
		case 'LOGIN_SUCCESS': {
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				message: action.payload.message,
				username: action.payload.user,
			};
		}
		case 'LOGIN_ERROR': {
			return {
				...state,
				error: action.payload,
				loading: false,
				isAuthenticated: false,
			};
		}
		case 'LOGOUT': {
			return {
				...state,
				loading: false,
				isAuthenticated: false,
				message: action.payload,
			};
		}
		default:
			return state;
	}
};
export default userReducer;
