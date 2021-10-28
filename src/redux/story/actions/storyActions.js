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
export const addStory = (title, text) => (dispatch) => {
	dispatch({ type: 'STORY_PENDING' });
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
			dispatch({ type: 'CREATE_STORY_SUCCESS', payload: data });

			setTimeout(() => {
				window.location('/');
			}, 2000);
		})
		.catch((err) => {
			console.log(err);
			dispatch({ type: 'CREATE_STORY_FAIL', payload: err });
		});
};
