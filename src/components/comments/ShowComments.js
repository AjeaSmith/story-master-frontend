import React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Comment from './Comment';

const ShowComments = ({ comments }) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
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
				<DialogContent dividers={true}>
					<DialogContentText id="scroll-dialog-description">
						{!comments.length ? (
							<p>No comments</p>
						) : (
							<Comment comments={comments} />
						)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<TextareaAutosize
						className="textarea_autosize"
						minRows={2}
						maxRows={3}
						aria-label="maximum height"
						placeholder="Add Comment"
						style={{
							width: '100%',
							resize: 'none',
							padding: '0.5em 0.5em',
						}}
					/>
					<Button onClick={handleClose}>Save</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default ShowComments;
