import React from 'react';
import logo from '../../logo.png';
const Header = () => {
	return (
		<header>
			<img src={logo} alt="graphic of lady reading book" />
			<nav>
				<ul>
					<li>Profile</li>
					<li>Login</li>
					<li>Register</li>
					<li>Logout</li>
					<li>Tell Story</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
