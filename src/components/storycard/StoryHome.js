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
const StoryHome = ({ story, id }) => {
	return (
		<>
			<ListItem alignItems="flex-start" key={id}>
				<ListItemAvatar>
					<Avatar
						sx={{ width: 40, height: 40 }}
						alt={`${story.author.username}`}
						src="https://picsum.photos/50/50?grayscale"
					/>
				</ListItemAvatar>
				<ListItemText
					sx={{ fontSize: '12px' }}
					primary={`${story.author.username} - ${moment(
						story.createdAt
					).format('MM/DD')}`}
					secondary={
						<React.Fragment>
							<h3>{story.title}</h3>
							<Typography
								sx={{ display: 'inline' }}
								component="div"
								variant="body2"
								color="text.primary"
							>
								{
									<div
										dangerouslySetInnerHTML={{
											__html: `${
												story.text.length > 100
													? `${story.text.slice(0, 100)}...`
													: `${story.text}`
											}`,
										}}
									/>
								}
							</Typography>
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

export default StoryHome;
