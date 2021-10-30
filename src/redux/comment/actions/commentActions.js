import axios from 'axios';

export const addComment = (storyId, message) => async (dispatch) => {
	dispatch({ type: 'LOADING' });

	return axios
		.post(
			`http://localhost:8080/api/comment/${storyId}/add`,
			{
				message: message,
			},
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true,
			}
		)
		.then(({ data }) => {
			dispatch({
				type: 'COMMENT_SUCCESS',
				payload: data.message,
			});
			setTimeout(() => {
				window.location = `/view/story/${storyId}`;
				dispatch({ type: 'RESET' });
			}, 2000);
		})
		.catch((err) => {
			console.log(err);
		});
};
export const deleteComment = (commentId, storyId) => async (dispatch) => {
	dispatch({ type: 'LOADING' });

	return axios
		.delete(`http://localhost:8080/api/comment/${storyId}/${commentId}`, {
			withCredentials: true,
		})
		.then(({ data }) => {
			dispatch({
				type: 'COMMENT_DELETE_SUCCESS',
				payload: data.message,
			});
			setTimeout(() => {
				window.location = `/view/story/${storyId}`;
				dispatch({ type: 'RESET' });
			}, 2000);
		})
		.catch((err) => {
			console.log(err);
		});
};
