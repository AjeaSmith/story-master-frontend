import axios from 'axios';
export const authenticatedUser = () => (dispatch) => {
	axios
		.get('http://localhost:8080/api/user/authenticated', {
			withCredentials: true,
		})
		.then(({ data }) => {
			console.log(data);
			dispatch({
				type: 'IS_AUTHENTICATED',
				payload: {
					authenticated: data.authenticated,
					userId: data.userId,
				},
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
export const logout = (history) => (dispatch) => {
	dispatch({ type: 'LOGOUT_PENDING' });
	return axios
		.get('http://localhost:8080/api/user/logout')
		.then(({ data }) => {
			dispatch({ type: 'LOGOUT', payload: data.authenticated });
			window.location = '/login';
		})
		.catch((err) => {
			console.log(err);
		});
};
