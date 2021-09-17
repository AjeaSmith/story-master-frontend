import axios from 'axios';

export const Register = ({ username, email, password }) => async (dispatch) => {
	dispatch({ type: 'REGISTER_PENDING' });

	await axios
		.post('http://localhost:8080/api/user/register', {
			username,
			email,
			password,
		})
		.then(({ data }) => {
			console.log(data);
			dispatch({ type: 'REGISTER_SUCCESS', payload: data.msg });
		})
		.catch(({ response }) => {
			dispatch({ type: 'REGISTER_ERROR', payload: response.data.error });
		});
};
