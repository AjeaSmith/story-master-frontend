import React from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { disableAccount } from '../../redux/user/actions/userActions';

const DisableAccountComponent = ({ open, setOpen }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.authState);
	const { message, error } = useSelector((state) => state.userState);

	const handleClose = () => {
		setOpen(false);
	};
	const removeAccount = () => {
		dispatch(disableAccount(user.id));
		setTimeout(() => {
			setOpen(false);
		}, 2000);
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">{'Delete Account?'}</DialogTitle>
			{message && <Alert severity="success">{message}</Alert>}
			{error && <Alert severity="error">{error}</Alert>}
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					Are you sure you want to delete this account? All data associated
					with this account will be lost.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>No</Button>
				<Button onClick={removeAccount} autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DisableAccountComponent;
