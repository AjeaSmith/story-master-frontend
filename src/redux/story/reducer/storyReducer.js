const initalState = {
	loading: false,
	stories: [],
	story: null,
	error: null,
};
const storyReducer = (state = initalState, action) => {
	switch (action.type) {
		case 'ALL_STORIES_LOADING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'ALL_STORIES_SUCCESS': {
			return {
				...state,
				loading: false,
				stories: action.payload,
			};
		}
		case 'ALL_STORIES_FAIL': {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}

		case 'GET_STORY_LOADING': {
			return {
				...state,
				loading: false,
			};
		}
		case 'GET_STORY_SUCCESS': {
			return {
				...state,
				loading: false,
				story: action.payload,
			};
		}

		case 'CREATE_STORY_LOADING': {
			return {
				...state,
				loading: true,
			};
		}
		case 'CREATE_STORY_SUCCESS': {
			return {
				...state,
				loading: false,
				message: action.payload,
			};
		}
		case 'CREATE_STORY_FAIL': {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}

		case 'DELETE_STORY_SUCCESS': {
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
export default storyReducer;
