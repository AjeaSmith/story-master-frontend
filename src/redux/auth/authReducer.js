const initalState = {
	authenticated: false,
	loading: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'IS_AUTHENTICATED': {
			return {
				...state,
				authenticated: action.payload,
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
export default userReducer;
