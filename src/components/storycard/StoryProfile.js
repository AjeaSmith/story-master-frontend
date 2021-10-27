import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	Grid,
} from '@mui/material';
import { Link } from 'react-router-dom';

const StoryProfile = ({ isLoggedIn, story }) => {
	return (
		<Grid item xs={12} sm={12} md={3} key={story._id}>
			<Card sx={{ maxWidth: 345, background: '#F3F4F6' }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{story.title}{' '}
						<small style={{ fontSize: '13px', fontStyle: 'italic' }}>
							by: admin
						</small>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{story.text.length > 100
							? `${story.text.slice(0, 50)}...`
							: `${story.text}`}
					</Typography>
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
					{isLoggedIn ? <Button size="small">Delete Story</Button> : null}
				</CardActions>
			</Card>
		</Grid>
	);
};

export default StoryProfile;
