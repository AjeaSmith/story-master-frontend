import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import axios from 'axios';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const logoutFunc = () => {
		return axios
			.get('http://localhost:8080/api/user/logout', {
				withCredentials: true,
			})
			.then(() => {
				return (window.location = '/login');
			})
			.catch((err) => {
				console.log('logout err', err);
			});
	};
	const authState = useSelector((state) => state.authState);

	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar position="static" sx={{ background: '#00004d' }}>
			<Container>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<LocalLibraryIcon fontSize="large" />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/" style={{ color: 'white' }}>
							Story Master
						</Link>
					</Typography>
					{authState.authenticated ? (
						<div>
							<Button variant="outlined" color="inherit" sx={{ mr: 2 }}>
								<Link to="/story/create" style={{ color: 'white' }}>
									Tell Story
								</Link>
							</Button>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>

							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem>
									<Link to="/profile/5">Profile</Link>
								</MenuItem>
								<MenuItem onClick={logoutFunc}>Logout</MenuItem>
							</Menu>
						</div>
					) : (
						<Toolbar>
							<Button color="inherit">
								<Link to="/login" style={{ color: 'white' }}>
									Login
								</Link>
							</Button>
							<Button color="inherit">
								<Link to="/register" style={{ color: 'white' }}>
									Register
								</Link>
							</Button>
						</Toolbar>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
