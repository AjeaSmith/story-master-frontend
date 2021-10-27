import axios from 'axios';
export const getStories = () => (dispatch) => {
	dispatch({ type: 'STORY_PENDING' });
	return axios
		.get('http://localhost:8080/api/story/')
		.then(({ data }) => {
			dispatch({ type: 'STORY_SUCCESS', payload: data.stories });
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getStoryById = (id) => (dispatch) => {
	dispatch({ type: 'STORY_PENDING' });
	return axios
		.get(`http://localhost:8080/api/story/${id}`)
		.then(({ data }) => {
			dispatch({ type: 'ONE_STORY_SUCCESS', payload: data.story });
		})
		.catch((err) => {
			console.log(err);
		});
};
