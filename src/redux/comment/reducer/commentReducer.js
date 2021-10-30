const initalState = {
	loading: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'LOADING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'COMMENT_SUCCESS': {
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		}
		case 'COMMENT_FAIL': {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		case 'COMMENT_DELETE_SUCCESS': {
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		}
		default:
			return state;
	}
};
export default userReducer;
