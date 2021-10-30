import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Banner from '../../components/banner/Banner';
import { StyledSection, StyledContent, StyledContainer } from './HomeStyle';
import { getStories } from '../../redux/story/actions/storyActions';
import AllStoriesComponent from '../../components/story/AllStoriesComponent';

const Home = () => {
	const { authenticated } = useSelector((state) => state.authState);
	const { stories, loading } = useSelector((state) => state.storyState);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStories());
	}, [dispatch]);
	return (
		<>
			<Banner>
				<div
					style={{
						maxWidth: '600px',
						margin: '0 auto',
						padding: '6em 0.5em',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						color: '#00004d',
					}}
				>
					<Typography
						align="center"
						variant="h3"
						sx={{ fontWeight: '600' }}
					>
						Share your story around the world!
					</Typography>
					<Typography
						align="center"
						variant="subtitle1"
						sx={{ fontWeight: '500', margin: '12px 0' }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Expedita saepe eos error harum quos praesentium odio
						voluptatum quas reprehenderit. Explicabo!
					</Typography>
					{authenticated ? (
						<Button
							variant="contained"
							sx={{ backgroundColor: '#18A999', margin: '12px 0' }}
						>
							<Link to="/story/create" style={{ color: 'white' }}>
								Ready to share your story?
							</Link>
						</Button>
					) : (
						<Button
							variant="contained"
							sx={{ backgroundColor: '#18A999', margin: '12px 0' }}
						>
							<Link to="/login" style={{ color: 'white' }}>
								Log in to share your story!
							</Link>
						</Button>
					)}
				</div>
			</Banner>
			<StyledSection>
				<StyledContainer>
					<StyledContent>
						<h2 style={{ textAlign: 'center', margin: '0.3em 0' }}>
							Awesome stories made by you!
						</h2>
						<Divider />
						<List
							sx={{
								width: '100%',
								bgcolor: 'background.paper',
								margin: '0 auto',
							}}
						>
							{loading ? (
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
									{stories.map((story) => {
										return (
											<div key={story._id}>
												<AllStoriesComponent story={story} />
											</div>
										);
									})}
								</>
							)}
							{stories.length <= 0 && (
								<Typography>No stories to show!</Typography>
							)}
						</List>
					</StyledContent>
				</StyledContainer>
			</StyledSection>
		</>
	);
};

export default Home;
