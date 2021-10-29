import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
	Grid,
	TextField,
	Button,
	Paper,
	Typography,
	TextareaAutosize,
	Alert,
} from '@mui/material';
import { editProfile } from '../../redux/profile/actions/profileActions';

const EditProfile = ({ match }) => {
	// const { loading } = useSelector((state) => state.userState);
	const { message, error, loading } = useSelector(
		(state) => state.profileState
	);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const submit = (data) => {
		dispatch(editProfile(match.params.id, data));
	};
	return (
		<section>
			<Paper sx={{ margin: '20px auto', maxWidth: '600px' }} elevation={4}>
				<Typography variant="h5" align="center" sx={{ pb: 0, pt: 3 }}>
					Edit Profile
				</Typography>
				{message && (
					<Alert severity="success" sx={{ my: 3 }}>
						{message}
					</Alert>
				)}
				{error && (
					<Alert severity="error" sx={{ my: 3 }}>
						{error}
					</Alert>
				)}
				<form
					style={{ padding: '15px 30px' }}
					onSubmit={handleSubmit(submit)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								label="User Name"
								variant="standard"
								sx={{ maxWidth: '600px', width: '100%' }}
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
								label="Email"
								variant="standard"
								sx={{ maxWidth: '600px', width: '100%' }}
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
								type="text"
								required
								label="Location"
								variant="standard"
								sx={{ maxWidth: '600px', width: '100%' }}
								{...register('location', {
									required: {
										value: true,
										message: 'Field is required',
									},
								})}
							/>
							<Form.Text style={{ color: '#d32f2f' }}>
								{errors?.location?.message}
							</Form.Text>
						</Grid>
						<Grid item xs={12}>
							<TextareaAutosize
								required
								minRows={5}
								aria-label="Bio"
								placeholder="Your bio..."
								style={{
									maxWidth: '900px',
									width: '100%',
									padding: '10px',
								}}
								{...register('bio', {
									required: {
										value: true,
										message: 'Field is required',
									},
								})}
							/>
							<Form.Text style={{ color: '#d32f2f' }}>
								{errors?.bio?.message}
							</Form.Text>
						</Grid>
						<Grid item xs={12}>
							<Button
								variant="contained"
								color="primary"
								type="submit"
								sx={{
									margin: '0.5em 0',
									backgroundColor: '#18A999',
								}}
							>
								{loading ? 'Loading…' : 'Submit'}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</section>
	);
};

export default EditProfile;
