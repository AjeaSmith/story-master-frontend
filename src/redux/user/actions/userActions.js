export const Register = async (dispatch, { username, email, password }) => {
	const { token, user, message, error, expires, success } = await fetch(
		'https://story-master-backend.herokuapp.com/api/user/register',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, email, password }),
		}
	);
	dispatch({ type: 'REGISTER', payload: user });

	if (error) {
		dispatch({ type: 'REGISTER_ERROR', payload: error });
	}
	if (success) {
		dispatch({ type: 'REGISTER_SUCCESS', payload: message });
		localStorage.setItem('token', token);
	}
};
