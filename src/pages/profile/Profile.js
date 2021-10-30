import React, { useEffect, useState } from 'react';
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
import DisableAccountComponent from '../../components/dialog/DisableAccountComponent';
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
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const dispatch = useDispatch();
	const { authenticated, user } = useSelector((state) => state.authState);
	const { profile, loading } = useSelector((state) => state.profileState);

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
						{authenticated && match.params.id === user.id ? (
							<div style={{ display: 'flex' }}>
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
										to={`/edit/profile/${user.id}`}
										style={{ color: 'white' }}
									>
										Edit Profile
									</Link>
								</Button>
								<Button
									onClick={handleClickOpen}
									size="small"
									sx={{
										color: 'white',
										textAlign: 'center',
										backgroundColor: 'red',
										px: 2,
										mx: 2,
									}}
								>
									Disable Account
								</Button>
								<DisableAccountComponent
									open={open}
									setOpen={setOpen}
								/>
							</div>
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
									I'm from: 
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
