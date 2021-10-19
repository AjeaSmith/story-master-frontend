import Header from '../../components/header/Header';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import {
	Typography,
	Paper,
	Grid,
	Alert,
	Button,
	TextField,
} from '@mui/material';

import * as UserActionCreators from '../../redux/user/actions/userActions';

const Register = ({ history }) => {
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
			<form
				noValidate
				style={{
					maxWidth: '400px',
					margin: '5em auto',
					padding: '0 2em',
				}}
				onSubmit={handleSubmit(submit)}
				autoComplete="off"
			>
				<Typography variant="h4" sx={{ fontWeight: '500', margin: '0' }}>
					Register
				</Typography>
				{userState.register_error && (
					<Alert severity="error" sx={{marginTop: "1em"}}>{userState.register_error}</Alert>
				)}
				{userState.register_message && (
					<Alert severity="success">{userState.register_message}</Alert>
				)}
				<Paper
					style={{ padding: 20 }}
					elevation={3}
					sx={{ margin: '2em auto' }}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								error={!errors.username ? false : true}
								label="User Name"
								variant="standard"
								sx={{ width: '100%' }}
								{...register('username', {
									required: {
										value: true,
										message: 'Field is required',
									},
								})}
							/>
							<Form.Text style={{ color: '#d32f2f' }}>
								{errors?.username?.message}
							</Form.Text>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="email"
								required
								error={!errors.email ? false : true}
								label="Email"
								variant="standard"
								sx={{ width: '100%' }}
								{...register('email', {
									required: {
										value: true,
										message: 'Field is required',
									},
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
										message: 'Email invalid',
									},
								})}
							/>
							<Form.Text style={{ color: '#d32f2f' }}>
								{errors?.email?.message}
							</Form.Text>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="password"
								required
								error={!errors.password ? false : true}
								label="Password"
								variant="standard"
								sx={{ width: '100%' }}
								{...register('password', {
									required: {
										value: true,
										message: 'Field is required',
									},
									minLength: {
										value: 6,
										message: 'Minimum length is 6 characters',
									},
								})}
							/>
							<Form.Text style={{ color: '#d32f2f' }}>
								{errors?.password?.message}
							</Form.Text>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								sx={{
									width: '100%',
									margin: '0.5em 0',
									backgroundColor: '#18A999',
								}}
							>
								{userState.loading ? 'Loading…' : 'Submit'}
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</form>
		</>
	);
};

export default Register;
