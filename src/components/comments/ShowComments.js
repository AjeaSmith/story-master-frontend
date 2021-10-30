import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Comment from './Comment';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addComment } from '../../redux/comment/actions/commentActions';

const ShowComments = ({ comments, storyId }) => {
	const dispatch = useDispatch();
	const { message: commentMessage, error: commentError } = useSelector(
		(state) => state.commentState
	);
	const { authenticated } = useSelector((state) => state.authState);

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleSubmit = () => {
		if (message === '') {
			setError('Cannot send a empty message.');
			setTimeout(() => {
				setError('');
			}, 2000);
			return;
		} else {
			setError('');
			dispatch(addComment(storyId, message));
			setTimeout(() => {
				setOpen(false);
			}, 2500);
		}
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};
	return (
		<div>
			<Button
				onClick={handleClickOpen}
				variant="outlined"
				size="small"
				sx={{ color: '#18A999', borderColor: '#18A999' }}
			>
				Comments
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				scroll="paper"
				aria-labelledby="scroll-dialog-title"
				aria-describedby="scroll-dialog-description"
			>
				<DialogTitle id="scroll-dialog-title">All Comments</DialogTitle>
				{commentError && <Alert severity="error">{commentError}</Alert>}
				{commentMessage && (
					<Alert severity="success">{commentMessage}</Alert>
				)}
				{error && <Alert severity="error">{error}</Alert>}

				<DialogContent dividers={true}>
					<DialogContentText id="scroll-dialog-description">
						{!comments.length ? (
							<p>No comments</p>
						) : (
							<>
								{comments.map((comment) => {
									return (
										<div key={comment._id}>
											<Comment comment={comment} storyId={storyId} />
										</div>
									);
								})}
							</>
						)}
					</DialogContentText>
				</DialogContent>
				{authenticated && (
					<DialogActions>
						<textarea
							value={message}
							onChange={handleMessageChange}
							minrows={2}
							maxrows={3}
							aria-label="maximum height"
							placeholder="Add Comment"
							style={{
								width: '100%',
								resize: 'none',
								padding: '0.5em 0.5em',
							}}
						/>
						<Button onClick={handleSubmit}>Save</Button>
					</DialogActions>
				)}
			</Dialog>
		</div>
	);
};

export default ShowComments;
