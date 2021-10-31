import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStory } from '../../redux/story/actions/storyActions';

const ProfileStoriesComponent = ({ story }) => {
	const dispatch = useDispatch();

	const { authenticated, user } = useSelector((state) => state.authState);
	const { loading } = useSelector((state) => state.storyState);
	const deleteAStory = () => {
		dispatch(deleteStory(story._id));
	};
	return (
		<Card sx={{ maxWidth: 345, background: '#F3F4F6' }} key={story._id}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{story.title}{' '}
					<small style={{ fontSize: '13px', fontStyle: 'italic' }}>
						by: {story.author.username}
					</small>
				</Typography>

				{
					<p
						style={{
							marginBottom: 0,
							fontWeight: 400,
							fontSize: '0.875rem',
							lineHeight: '1.43',
							letterSpacing: '0.01071em',
							color: 'rgba(0, 0, 0, 0.6)',
						}}
						dangerouslySetInnerHTML={{
							__html: `${
								story.text.length > 100
									? `${story.text.slice(0, 80)}...`
									: `${story.text}`
							}`,
						}}
					/>
				}
			</CardContent>
			<CardActions>
				<Button size="small">
					<Link
						to={`/view/story/${story._id}`}
						style={{ color: '#18A999' }}
					>
						View
					</Link>
				</Button>
				{authenticated && story.author._id === user.id ? (
					<Button
						size="small"
						sx={{ color: '#a50000' }}
						onClick={deleteAStory}
					>
						{loading ? 'Loading...' : 'Delete Story'}
					</Button>
				) : null}
			</CardActions>
		</Card>
	);
};

export default ProfileStoriesComponent;
