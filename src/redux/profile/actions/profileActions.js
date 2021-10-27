import axios from 'axios';
export const getProfile = (id) => (dispatch) => {
	dispatch({ type: 'PROFILE_PENDING' });
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
