import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../../components/banner/Banner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { StyledSection, StyledContent, StyledContainer } from './HomeStyle';

const Home = () => {
	const authState = useSelector((state) => state.authState);
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
					{authState.authenticated ? (
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
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar
										sx={{ width: 40, height: 40 }}
										alt="Remy Sharp"
										src="https://picsum.photos/50/50?grayscale"
									/>
								</ListItemAvatar>
								<ListItemText
									sx={{ fontSize: '12px' }}
									primary={`@James Blake - Oct 26`}
									secondary={
										<React.Fragment>
											<h3>sit amet consectetur</h3>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Pariatur dolores tempore
												aliquid perspiciatis sapiente sequi aperiam
												ex provident neque repellendus!
											</Typography>
										</React.Fragment>
									}
								/>
								<Button>View</Button>
							</ListItem>
							<Divider variant="inset" component="li" />
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar
										sx={{ width: 40, height: 40 }}
										alt="Remy Sharp"
										src="https://picsum.photos/50/50?grayscale"
									/>
								</ListItemAvatar>
								<ListItemText
									sx={{ fontSize: '12px' }}
									primary={`@Admin - Oct 28`}
									secondary={
										<React.Fragment>
											<h3>The long project home</h3>
											<Typography
												sx={{ display: 'inline' }}
												component="span"
												variant="body2"
												color="text.primary"
											>
												Lorem ipsum dolor sit amet consectetur
												adipisicing elit. Pariatur dolores tempore
												aliquid perspiciatis sapiente sequi aperiam
												ex provident neque repellendus!
											</Typography>
										</React.Fragment>
									}
								/>
								<Button>
									<Link to="/view/story" style={{ color: '#18A999' }}>
										View
									</Link>
								</Button>
							</ListItem>
						</List>
					</StyledContent>
				</StyledContainer>
			</StyledSection>
		</>
	);
};

export default Home;
