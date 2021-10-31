import axios from 'axios';

export const getStories = () => (dispatch) => {
	dispatch({ type: 'ALL_STORIES_LOADING' });
	return axios
		.get('http://localhost:8080/api/story/')
		.then(({ data }) => {
			dispatch({ type: 'ALL_STORIES_SUCCESS', payload: data.stories });
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getStoryById = (id) => (dispatch) => {
	dispatch({ type: 'GET_STORY_LOADING' });
	return axios
		.get(`http://localhost:8080/api/story/${id}`)
		.then(({ data }) => {
			dispatch({ type: 'GET_STORY_SUCCESS', payload: data.story });
		})
		.catch((err) => {
			console.log(err);
		});
};
export const addStory = ({ title, text }) => (dispatch) => {
	dispatch({ type: 'CREATE_STORY_LOADING' });
	return axios
		.post(
			`http://localhost:8080/api/story/add/`,
			{
				title,
				text,
			},
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true,
			}
		)
		.then(({ data }) => {
			console.log(data);
			dispatch({ type: 'CREATE_STORY_SUCCESS', payload: data.message });

			setTimeout(() => {
				window.location = '/';
				dispatch({ type: 'RESET' });
			}, 2000);
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: 'CREATE_STORY_FAIL', payload: err });
		});
};
export const deleteStory = (storyId) => (dispatch) => {
	// dispatch({ type: 'LOADING' });
	return axios
		.delete(`http://localhost:8080/api/story/mine/${storyId}`, {
			withCredentials: true,
		})
		.then(({ data }) => {
			dispatch({ type: 'DELETE_STORY_SUCCESS', payload: data.message });

			setTimeout(() => {
				window.location = '/';
			}, 2000);
		})
		.catch((err) => {
			console.log(err);
		});
};
