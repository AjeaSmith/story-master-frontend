import axios from 'axios';
export const getProfile = (id) => (dispatch) => {
	dispatch({ type: 'LOADING' });
	return axios
		.get(`http://localhost:8080/api/user/${id}`)
		.then(({ data }) => {
			dispatch({ type: 'PROFILE_SUCCESS', payload: data });
		})
		.catch((err) => {
			dispatch({ type: 'PROFILE_FAIL', payload: err });
			console.log(err);
		});
};
export const editProfile = (id, data) => (dispatch) => {
	dispatch({ type: 'LOADING' });
	console.log(data);
	return axios
		.put(`http://localhost:8080/api/user/${id}/edit`, data, {
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true,
		})
		.then(({ data }) => {
			dispatch({ type: 'EDIT_PROFILE_SUCCESS', payload: data.message });
			setTimeout(() => {
				dispatch({ type: 'RESET' })
				window.location = `/profile/${id}`
			}, 2000);
		})
		.catch((err) => {
			// dispatch({ type: 'EDIT_PROFILE_FAIL', payload: err });
			console.log(err);
		});
};
