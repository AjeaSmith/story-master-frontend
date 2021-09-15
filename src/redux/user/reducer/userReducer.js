const initalState = {
	user: null,
};
const userReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'REGISTER':
			return { ...state, user: action.payload };
		case 'LOGIN':
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
export default userReducer;
