const initalState = {
	stories: [],
	story: null,
	loading: false,
	error: null,
};
const storyReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'STORY_PENDING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'STORY_SUCCESS': {
			return {
				...state,
				loading: false,
				stories: action.payload,
			};
		}
		case 'ONE_STORY_SUCCESS': {
			return {
				...state,
				loading: false,
				story: action.payload,
			};
		}
		case 'STORY_FAIL': {
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
export default storyReducer;
