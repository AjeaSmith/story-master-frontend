import axios from 'axios';
export const authenticatedUser = () => (dispatch) => {
	axios
		.get(
			'https://story-master-backend.herokuapp.com/api/user/authenticated',
			{
				withCredentials: true,
			}
		)
		.then(({ data }) => {
			dispatch({
				type: 'IS_AUTHENTICATED',
				payload: {
					authenticated: data.authenticated,
					user: data.user,
				},
			});
		})
		.catch((err) => {
			console.log(err);
		});
};
export const logout = () => (dispatch) => {
	dispatch({ type: 'LOGOUT_PENDING' });
	return axios
		.get('https://story-master-backend.herokuapp.com/api/user/logout')
		.then(({ data }) => {
			dispatch({ type: 'LOGOUT', payload: data.authenticated });
			window.location = '/login';
		})
		.catch((err) => {
			console.log(err);
		});
};
