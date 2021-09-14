import React from 'react';
import logo from '../../images/logo.png';
import {
	StyledLogo,
	StyledMenu,
	StyledMenuList,
	StyledContainer,
	StyledMenuLi,
} from './HeaderStyle';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<header>
			<StyledContainer>
				<Link to="/">
					<StyledLogo src={logo} alt="graphic of lady reading book" />
				</Link>
				<StyledMenu>
					<StyledMenuList>
						<StyledMenuLi>
							<Link to="/profile">Profile</Link>
						</StyledMenuLi>
						<StyledMenuLi>Login</StyledMenuLi>
						<StyledMenuLi>
							<Link to="/register">Register</Link>
						</StyledMenuLi>
						<StyledMenuLi>Tell Story</StyledMenuLi>
						<StyledMenuLi>Logout</StyledMenuLi>
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
