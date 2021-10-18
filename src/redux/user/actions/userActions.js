import axios from 'axios';

export const register = (email, username, password, history) => async (
	dispatch
) => {
	dispatch({ type: 'REGISTER_PENDING' });

	return axios
		.post(
			'http://localhost:8080/api/user/register',
			{
				email,
				username,
				password,
			},
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true,
			}
		)
		.then(({ data }) => {
			dispatch({
				type: 'REGISTER_SUCCESS',
				payload: { message: data.msg, error: '' },
			});
			setTimeout(() => {
				history.push('/login');
				dispatch({ type: 'RESET' });
			}, 2000);
		})
		.catch((err) => {
			dispatch({
				type: 'REGISTER_FAIL',
				payload: {
					success: false,
					message: '',
					error: err.response.data.error,
				},
			});
		});
};

export const login = (username, password, history) => (dispatch) => {
	dispatch({
		type: 'LOGIN_PENDING',
	});
	return axios
		.post(
			'http://localhost:8080/api/user/login',
			{
				username: username,
				password: password,
			},
			{
				headers: { 'Content-Type': 'application/json' },
				withCredentials: true,
			}
		)
		.then(({ data }) => {
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: { msg: data.msg },
			});
			setTimeout(() => {
				history.push('/');
				dispatch({ type: 'RESET' });
			}, 2000);
		})
		.catch((err) => {
			dispatch({
				type: 'LOGIN_FAIL',
				payload: {
					error: 'incorrect username or password',
				},
			});
			setTimeout(() => {
				dispatch({ type: 'RESET' });
			}, 2000);
		});
};
