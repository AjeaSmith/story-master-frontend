import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../redux/comment/actions/commentActions';

const Comment = ({ comment, storyId }) => {
	const dispatch = useDispatch()
	const { user } = useSelector((state) => state.authState);
	const removeComment = () => {
		dispatch(deleteComment(comment._id, storyId))
	};
	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 600,
				bgcolor: 'background.paper',
			}}
		>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar
						alt={comment.author.username}
						src="https://picsum.photos/seed/picsum/200/300"
					/>
				</ListItemAvatar>
				<ListItemText
					primary={`${comment.author.username} (${moment(
						comment.createdAt
					).format('MMM DD')})`}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{comment.message}
							</Typography>
						</React.Fragment>
					}
				/>
				{comment.author._id === user.id && (
					<ListItemText
						sx={{ textAlign: 'right' }}
						primary={
							<IconButton edge="end" aria-label="delete">
								<CloseIcon
									fontSize="small"
									sx={{ color: 'red' }}
									onClick={removeComment}
								/>
							</IconButton>
						}
					/>
				)}
			</ListItem>
			<Divider variant="inset" component="li" />
		</List>
	);
};

export default Comment;
