const initalState = {
	profile: null,
	loading: false,
};
const profileReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'LOADING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'PROFILE_SUCCESS': {
			return {
				...state,
				loading: false,
				profile: action.payload,
			};
		}
		case 'PROFILE_FAIL': {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		case 'EDIT_PROFILE_SUCCESS': {
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		}
		case 'EDIT_PROFILE_FAIL': {
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
export default profileReducer;
