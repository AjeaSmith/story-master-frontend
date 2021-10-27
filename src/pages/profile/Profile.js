import React, { useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography, Box, Grid, Button } from '@mui/material';
import StoryProfile from '../../components/storycard/StoryProfile';
import ProfileBanner from '../../components/banner/ProfileBanner';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../redux/profile/actions/profileActions';

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

	const dispatch = useDispatch();
	const { authenticated } = useSelector((state) => state.authState);
	const { profile, loading } = useSelector((state) => state.profileState);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		dispatch(getProfile(match.params.id));
	}, [match.params.id, dispatch]);

	return (
		<>
			<ProfileBanner>
				{authenticated ? (
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
			{loading || profile == null ? (
				<p>loading</p>
			) : (
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
							{profile.location}
						</Typography>
						<Typography variant="body1" sx={{ maxWidth: 500, mt: '1em' }}>
							<span className="profile__detailheader">Bio:</span>{' '}
							{profile.bio}
						</Typography>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<Grid container spacing={2}>
							{profile.publishedStories.map((story) => {
								return (
									<StoryProfile
										isLoggedIn={isLoggedIn}
										story={story}
									/>
								);
							})}
						</Grid>
					</TabPanel>
				</Box>
			)}
		</>
	);
};

export default Profile;
