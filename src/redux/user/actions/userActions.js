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
					message: '',
					error: err.response.data.error,
				},
			});
			setTimeout(() => {
				dispatch({ type: 'RESET' });
			}, 3000);
		});
};

export const login = (username, password) => (dispatch) => {
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
				window.location = '/';
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
export const disableAccount = (userId) => (dispatch) => {
	dispatch({
		type: 'DELETE_PENDING',
	});
	return axios
		.delete(`http://localhost:8080/api/user/${userId}`, {
			withCredentials: true,
		})
		.then(({ data }) => {
			console.log(data);
			dispatch({
				type: 'DELETE_SUCCESS',
				payload: data.message,
			});
			setTimeout(() => {
				window.location = '/';
			}, 2000);
		})
		.catch((err) => {
			dispatch({
				type: 'DELETE_FAIL',
				payload: err.response.data.message,
			});
		});
};
