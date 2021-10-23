import React from 'react';
import { Stack, Avatar, Typography, Box } from '@mui/material';

const ProfileBanner = ({ children }) => {
	return (
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
					OP
				</Avatar>
				<Typography variant="h5">@admin</Typography>
				<Typography variant="subtitle1">
					<span className="profile__detailheader">Active Since: </span>
					Oct 20, 2021
				</Typography>
				{children}
			</Stack>
		</Box>
	);
};

export default ProfileBanner;
