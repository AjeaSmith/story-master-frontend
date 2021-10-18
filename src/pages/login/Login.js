// import { useEffect } from 'react';
import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import { StyledContainer } from './LoginStyle';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import * as UserActionCreators from '../../redux/user/actions/userActions';

const Login = ({ history }) => {
	// state
	const userState = useSelector((state) => state.userState);

	// actions
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const submit = (data) => {
		dispatch(UserActionCreators.login(data.username, data.password, history));
	};

	return (
		<>
			<Header />
			<StyledContainer>
				<h2
					style={{
						marginBottom: '20px',
						textAlign: 'center',
					}}
				>
					Login
				</h2>
				{userState.login_error && (
					<Alert variant="danger">{userState.login_error}</Alert>
				)}
				{userState.login_message && (
					<Alert variant="success">{userState.login_message}</Alert>
				)}
				<Form onSubmit={handleSubmit(submit)}>
					<Form.Group className="mb-3" controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Username"
							{...register('username', {
								required: { value: true, message: 'Field is required' },
							})}
						/>
						<Form.Text style={{ color: 'red' }}>
							{errors?.username?.message}
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							type="password"
							placeholder="Password"
							{...register('password', {
								required: { value: true, message: 'Field is required' },
								minLength: {
									value: 6,
									message: 'Minimum length is 6 characters',
								},
							})}
						/>
						<Form.Text style={{ color: 'red' }}>
							{errors?.password?.message}
						</Form.Text>
					</Form.Group>

					<Button
						type="submit"
						style={{ background: '#6d28d9' }}
						disabled={userState.loading}
					>
						{userState.loading ? 'Loading…' : 'Submit'}
					</Button>
				</Form>
			</StyledContainer>
		</>
	);
};

export default Login;
