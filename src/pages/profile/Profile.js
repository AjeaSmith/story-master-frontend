import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Stack, Avatar, Typography, Box, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import StoryCard from '../../components/storycard/StoryCard';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<section>{children}</section>
				</Box>
			)}
		</div>
	);
}

function tabProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
const Profile = ({ match, isLoggedIn }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
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
							width: 65,
							height: 65,
						}}
					>
						OP
					</Avatar>
					<Typography variant="h5">@admin</Typography>
					<Typography variant="subtitle1">
						<span className="profile__detailheader">Active Since: </span>
						Oct 20, 2021
					</Typography>
					{isLoggedIn ? (
						<Button
							color="primary"
							sx={{
								textAlign: 'center',
								backgroundColor: '#18A999',
							}}
						>
							<Link to="/edit" style={{ color: 'white' }}>
								Edit Profile
							</Link>
						</Button>
					) : null}
				</Stack>
			</Box>
			<Box sx={{ width: '100%' }}>
				<Box
					sx={{
						borderBottom: 1,
						borderColor: 'divider',
						padding: '0 14px',
					}}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="About" {...tabProps(0)} />
						<Tab label="Stories" {...tabProps(1)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<Typography variant="body1">
						<span className="profile__detailheader">I'm from: </span>
						ypsilanti MI
					</Typography>
					<Typography variant="body1" sx={{ maxWidth: 500, mt: '1em' }}>
						<span className="profile__detailheader">Bio:</span> Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Qui vero,
						rerum neque explicabo eos veniam amet distinctio accusamus
						minima nostrum corrupti quisquam veritatis porro provident
						tenetur, iste possimus expedita facilis?
					</Typography>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<Grid container spacing={2}>
						<StoryCard isLoggedIn={isLoggedIn} />

						<StoryCard isLoggedIn={isLoggedIn} />

						<StoryCard isLoggedIn={isLoggedIn} />

						<StoryCard isLoggedIn={isLoggedIn} />
					</Grid>
				</TabPanel>
			</Box>
		</>
	);
};

export default Profile;
