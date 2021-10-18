import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import { StyledContainer } from './RegisterStyle';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

import * as UserActionCreators from '../../redux/user/actions/userActions';

const Register = ({ history }) => {
	console.log(history);
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
		dispatch(
			UserActionCreators.register(
				data.email,
				data.username,
				data.password,
				history
			)
		);
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
					Register
				</h2>
				{userState.register_error && (
					<Alert variant="danger">{userState.register_error}</Alert>
				)}
				{userState.register_message && (
					<Alert variant="success">{userState.register_message}</Alert>
				)}
				<Form onSubmit={handleSubmit(submit)}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type="email"
							placeholder="Enter email"
							{...register('email', {
								required: { value: true, message: 'Field is required' },
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Email invalid',
								},
							})}
						/>
						<Form.Text style={{ color: 'red' }}>
							{errors?.email?.message}
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3" controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter username"
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

					<Button type="submit" style={{ background: '#6d28d9' }}>
						{userState.loading ? (
							<Spinner
								animation="border"
								variant="light"
								role="status"
								size="sm"
							/>
						) : (
							<span>Submit</span>
						)}
					</Button>
				</Form>
			</StyledContainer>
		</>
	);
};

export default Register;
