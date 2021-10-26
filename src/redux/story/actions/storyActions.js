import axios from 'axios';
export const getStories = () => (dispatch) => {
	dispatch({ type: 'STORY_PENDING' });
	return axios
		.get('http://localhost:8080/api/story/')
		.then(({ data }) => {
			dispatch({ type: 'STORY_SUCCESS', payload: data.stories });
			// window.location = '/login';
		})
		.catch((err) => {
			console.log(err);
		});
};
