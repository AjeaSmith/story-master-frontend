import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography, Box, Grid, Button } from '@mui/material';
import StoryCard from '../../components/storycard/StoryCard';
import ProfileBanner from '../../components/banner/ProfileBanner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
	const authState = useSelector((state) => state.authState);
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<ProfileBanner>
				{authState.authenticated ? (
					<Button
						size="small"
						color="primary"
						sx={{
							textAlign: 'center',
							backgroundColor: '#18A999',
							px: 2,
						}}
					>
						<Link to="/edit/profile/1" style={{ color: 'white' }}>
							Edit Profile
						</Link>
					</Button>
				) : null}
			</ProfileBanner>
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
