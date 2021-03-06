import React, { useEffect } from 'react';
import {
	Stack,
	Typography,
	Box,
	Container,
	CircularProgress,
} from '@mui/material';
import ShowComments from '../../components/comments/ShowComments';
import { useDispatch, useSelector } from 'react-redux';
import { getStoryById } from '../../redux/story/actions/storyActions';
import { Link } from 'react-router-dom';

const ViewStory = ({ match }) => {
	const { story, loading } = useSelector((state) => state.storyState);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getStoryById(match.params.id));
	}, [match.params.id, dispatch]);
	return (
		<>
			{loading || story === null ? (
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
					<Box
						component="section"
						sx={{
							width: '100%',
							background: '#F3F4F6',
							height: 250,
							py: '25px',
							display: 'flex',
							alignItems: 'center',
							mb: 3,
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
							<Typography variant="h4" align="center">
								{story.title}
								<span>
									<Typography
										variant="body1"
										align="center"
										sx={{
											mt: 2,
										}}
									>
										by:{' '}
										<Link
											to={`/profile/${story.author._id}`}
											style={{ color: '#7A7AA2' }}
										>
											@{story.author.username}
										</Link>
									</Typography>
								</span>
							</Typography>
							<ShowComments
								comments={story.comments}
								storyId={match.params.id}
							/>
						</Stack>
					</Box>
					<Container>
						<div>
							{
								<div
									dangerouslySetInnerHTML={{
										__html: `${story.text}`,
									}}
								/>
							}
						</div>
					</Container>
				</>
			)}
		</>
	);
};

export default ViewStory;
