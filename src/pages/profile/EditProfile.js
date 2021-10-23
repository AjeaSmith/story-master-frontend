import React from 'react';
import ProfileBanner from '../../components/banner/ProfileBanner';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
	Grid,
	TextField,
	Button,
	Paper,
	Typography,
	TextareaAutosize,
} from '@mui/material';

const EditProfile = ({ isLoggedIn }) => {
	const userState = useSelector((state) => state.userState);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const submit = (data) => {
		// update profile URL endpoint
	};
	return (
		<section>
			<ProfileBanner isLoggedIn={isLoggedIn} />
			<Paper sx={{ margin: '20px auto', maxWidth: '600px' }} elevation={4}>
				<Typography variant="h5" align="center" sx={{ pb: 0, pt: 3 }}>
					Edit Profile
				</Typography>
				<form
					style={{ padding: '15px 30px' }}
					onSubmit={handleSubmit(submit)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								error={!errors.username ? false : true}
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
								error={!errors.email ? false : true}
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
								error={!errors.location ? false : true}
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
								error={!errors.bio ? false : true}
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
								{userState.loading ? 'Loading…' : 'Submit'}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</section>
	);
};

export default EditProfile;
