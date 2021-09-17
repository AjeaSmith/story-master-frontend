import axios from 'axios';

export const Register = ({ username, email, password }) => async (dispatch) => {
	dispatch({ type: 'REGISTER_PENDING' });

	await axios
		.post('https://story-master-backend.herokuapp.com/api/user/register', {
			username,
			email,
			password,
		})
		.then(({ data }) => {
			dispatch({ type: 'REGISTER_SUCCESS', payload: data.msg });
		})
		.catch(({ response }) => {
			dispatch({ type: 'REGISTER_ERROR', payload: response.data.error });
		});
};
