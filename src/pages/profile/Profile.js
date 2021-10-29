import React, { useEffect } from 'react';
import {
	Typography,
	Box,
	Grid,
	Button,
	CircularProgress,
	Tabs,
	Tab,
} from '@mui/material';
import ProfileBanner from '../../components/banner/ProfileBanner';
import ProfileStoriesComponent from '../../components/story/ProfileStoriesComponent';
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
	const { authenticated, userId } = useSelector((state) => state.authState);
	const { profile, loading } = useSelector((state) => state.profileState);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	useEffect(() => {
		dispatch(getProfile(match.params.id));
	}, [match.params.id, dispatch]);
	return (
		<>
			{loading || profile === null ? (
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
				<>
					<ProfileBanner>
						{authenticated && match.params.id === profile._id ? (
							<Button
								size="small"
								color="primary"
								sx={{
									textAlign: 'center',
									backgroundColor: '#18A999',
									px: 2,
								}}
							>
								<Link
									to={`/edit/profile/${userId}`}
									style={{ color: 'white' }}
								>
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
								<span className="profile__detailheader">
									I'm from:{' '}
								</span>
								{profile.location}
							</Typography>
							<Typography
								variant="body1"
								sx={{ maxWidth: 500, mt: '1em' }}
							>
								<span className="profile__detailheader">Bio: </span>
								{profile.bio}
							</Typography>
						</TabPanel>
						<TabPanel value={value} index={1}>
							<Grid container spacing={2}>
								{profile.publishedStories.map((story) => {
									return (
										<Grid item xs={12} sm={12} md={3} key={story._id}>
											<ProfileStoriesComponent
												isLoggedIn={isLoggedIn}
												story={story}
											/>
										</Grid>
									);
								})}
							</Grid>
						</TabPanel>
					</Box>
				</>
			)}
		</>
	);
};

export default Profile;
