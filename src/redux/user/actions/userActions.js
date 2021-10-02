import axios from 'axios';

export const Register = ({ username, email, password }) => async (dispatch) => {
	dispatch({ type: 'REGISTER_PENDING' });

	await axios
		.post(
			'https://story-master-backend.herokuapp.com/api/user/register',
			{
				username,
				email,
				password,
			},
			{ headers: { 'Content-Type': 'application/json' } }
		)
		.then(({ data }) => {
			dispatch({ type: 'REGISTER_SUCCESS', payload: data.msg });
		})
		.catch(({ response }) => {
			dispatch({ type: 'REGISTER_ERROR', payload: response.data.error });
		});
};
export const Login = ({ email, password }) => async (dispatch) => {
	dispatch({ type: 'LOGIN_PENDING' });
	await axios
		.post(
			'http://localhost:8080/api/user/login',
			{
				email,
				password,
			},
			{ headers: { 'Content-Type': 'application/json' } }
		)
		.then((data) => {
			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: { message: data.data.msg, user: data.data.user },
			});
			localStorage.setItem('user', data.data.user);
		})
		.catch(({ response }) => {
			dispatch({ type: 'LOGIN_ERROR', payload: response.data.error });
		});
};
export const Logout = () => async (dispatch) => {
	await axios
		.get('http://localhost:8080/api/user/logout')
		.then((data) => {
			dispatch({ type: 'LOGOUT', payload: data.data.message });
			console.log(data.data);
		})
		.catch((err) => {
			console.log(err);
		});
};
