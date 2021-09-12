import React from 'react';
import logo from '../../logo.png';
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
				<StyledLogo src={logo} alt="graphic of lady reading book" />
				<StyledMenu>
					<StyledMenuList>
						<StyledMenuLi>
							<Link to="/profile">Profile</Link>
						</StyledMenuLi>
						<StyledMenuLi>Login</StyledMenuLi>
						<StyledMenuLi>Register</StyledMenuLi>
						<StyledMenuLi>Tell Story</StyledMenuLi>
						<StyledMenuLi>Logout</StyledMenuLi>
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
