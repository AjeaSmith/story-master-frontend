import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
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
	const { authenticated, user } = useSelector((state) => state.authState);

	const [anchorEl, setAnchorEl] = useState(null);
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
					{authenticated ? (
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
								<Avatar sx={{ width: 32, height: 32 }}>
									{user.username.charAt(0).toUpperCase()}
								</Avatar>
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
									<Link to={`/profile/${user.id}`}>Profile</Link>
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
