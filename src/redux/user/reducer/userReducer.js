const initalState = {
	loading: false,
	error: '',
	authenticated: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER_PENDING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'REGISTER_SUCCESS': {
			return {
				...state,
				register_message: action.payload.message,
				loading: false,
			};
		}
		case 'REGISTER_FAIL': {
			return {
				...state,
				loading: false,
				register_error: action.payload.error,
			};
		}
		case 'LOGIN_PENDING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'LOGIN_SUCCESS': {
			return {
				...state,
				loading: false,
				login_message: action.payload.msg,
			};
		}
		case 'LOGIN_FAIL': {
			return {
				...state,
				loading: false,
				login_error: action.payload.error,
			};
		}
		case 'IS_AUTHENTICATED': {
			return {
				...state,
				authenticated: action.payload,
			};
		}

		case 'DELETE_PENDING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'DELETE_SUCCESS': {
			return {
				...state,
				message: action.payload,
				loading: false,
			};
		}
		case 'DELETE_FAIL': {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}

		default:
			return state;
	}
};
export default userReducer;
