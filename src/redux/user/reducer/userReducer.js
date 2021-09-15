const initalState = {
	user: null,
	message: null,
	error: null,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER':
			return { ...state, user: action.payload };
		case 'REGISTER_SUCCESS':
			return { ...state, message: action.payload };
		case 'REGISTER_ERROR':
			return { ...state, error: action.payload };
		case 'LOGIN':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
export default userReducer;
