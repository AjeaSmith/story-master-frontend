const initalState = {
	authenticated: false,
	user: null,
	loading: false,
};
const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'IS_AUTHENTICATED': {
			return {
				...state,
				authenticated: action.payload.authenticated,
				user: action.payload.user,
			};
		}
		case 'LOGOUT_PENDING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'LOGOUT': {
			return {
				...state,
				loading: false,
				authenticated: action.payload,
			};
		}
		default:
			return state;
	}
};
export default authReducer;
