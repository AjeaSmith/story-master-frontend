import React from 'react';
import {
	ListItem,
	Typography,
	Button,
	Divider,
	ListItemText,
	ListItemAvatar,
	Avatar,
} from '@mui/material/';
import { Link } from 'react-router-dom';
import moment from 'moment';
const AllStoriesComponent = ({ story }) => {
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar
						sx={{ width: 40, height: 40 }}
						alt={`${story.author.username}`}
						src="https://picsum.photos/50/50?grayscale"
					/>
				</ListItemAvatar>
				<ListItemText
					primary={`${story.author.username} - ${moment(
						story.createdAt
					).format('MMM DD')}`}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="h5"
								color="text.primary"
							>
								{story.title}
							</Typography>
							<br />
							{
								<span
									dangerouslySetInnerHTML={{
										__html: `${
											story.text.length > 100
												? `${story.text.slice(0, 100)}...`
												: `${story.text}`
										}`,
									}}
								/>
							}
						</React.Fragment>
					}
				/>
				<Button>
					<Link
						to={`/view/story/${story._id}`}
						style={{ color: '#18A999' }}
					>
						View
					</Link>
				</Button>
			</ListItem>
			<Divider variant="inset" component="li" />
		</>
	);
};

export default AllStoriesComponent;
