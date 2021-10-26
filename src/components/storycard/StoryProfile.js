import React from 'react';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	Grid,
} from '@mui/material';

const StoryProfile = ({ isLoggedIn }) => {
	return (
		<Grid item xs={12} sm={12} md={3}>
			<Card sx={{ maxWidth: 345, background: '#F3F4F6' }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Lizard{' '}
						<small style={{ fontSize: '13px', fontStyle: 'italic' }}>
							by: admin
						</small>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Lizards are a widespread group of squamate reptiles, with over
						6,000 species, ranging across all continents except Antarctica
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="small" sx={{ color: '#18A999' }}>
						View
					</Button>
					{isLoggedIn ? <Button size="small">Delete Story</Button> : null}
				</CardActions>
			</Card>
		</Grid>
	);
};

export default StoryProfile;
