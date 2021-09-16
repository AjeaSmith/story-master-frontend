export const Register = ({ username, email, password }) => async (dispatch) => {
	dispatch({ type: 'REGISTER_PENDING' });
	const response = await fetch(
		'https://story-master-backend.herokuapp.com/api/user/register',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, email, password }),
		}
	);
	const { token, error, success } = await response.json();

	if (error) {
		dispatch({ type: 'REGISTER_ERROR', payload: error });
	}
	if (success) {
		localStorage.setItem('token', token);
		dispatch({
			type: 'REGISTER_SUCCESS',
		});
	}
};
