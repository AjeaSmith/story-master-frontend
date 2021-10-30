import React from 'react';
import {
	Stack,
	Avatar,
	Typography,
	Box,
	CircularProgress,
} from '@mui/material';
import { useSelector } from 'react-redux';
import moment from 'moment';

const ProfileBanner = ({ children }) => {
	const { profile, loading } = useSelector((state) => state.profileState);
	return (
		<>
			{loading || profile == null ? (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						height: '80vh',
					}}
				>
					<CircularProgress />
				</Box>
			) : (
				<Box
					component="section"
					sx={{
						width: '100%',
						background: '#F3F4F6',
						height: 250,
						py: '25px',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Stack
						sx={{
							maxWidth: 500,
							mx: 'auto',
							display: 'flex',
							alignItems: 'center',
						}}
						spacing={2}
					>
						<Avatar
							sx={{
								bgcolor: '#18A999',
								width: 60,
								height: 60,
							}}
						>
							{profile.username.charAt(0).toUpperCase()}
						</Avatar>
						<Typography variant="h5">@{profile.username}</Typography>
						<Typography variant="subtitle1">
							<span className="profile__detailheader">
								Active Since:{' '}
							</span>
							{moment(profile.createdAt).format('ll')}
						</Typography>
						{children}
					</Stack>
				</Box>
			)}
		</>
	);
};

export default ProfileBanner;
