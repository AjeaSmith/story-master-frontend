const initalState = {
	error: '',
	loading: false,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER_PENDING':
			return { ...state, loading: true };
		case 'REGISTER_SUCCESS':
			return {
				...state,
				loading: false,
			};
		case 'REGISTER_ERROR':
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		case 'LOGIN':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
export default userReducer;
