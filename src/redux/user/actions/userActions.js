import axios from 'axios';

export const register = (email, username, password) => async (dispatch) => {
	await axios
		.post(
			'http://localhost:8080/api/user/register',
			{
				email: email,
				username: username,
				password: password,
			},
			{ headers: { 'Content-Type': 'application/json' } }
		)
		.then((data) => {
			console.log('success', data.data);
			dispatch({ type: 'REGISTER_SUCCESS', payload: true });
		})
		.catch(({ response }) => {
			console.log('error', response.data.error);
			dispatch({ type: 'REGISTER_FAIL', payload: response.data.error });
		});
};
export const login = async (username, password) => {
	await axios
		.post(
			'http://localhost:8080/api/user/login',
			{
				username: username,
				password: password,
			},
			{ headers: { 'Content-Type': 'application/json' } }
		)
		.then((data) => {
			console.log('success', data.data);
		})
		.catch(({ response }) => {
			console.log('error', response.data.error);
		});
};
