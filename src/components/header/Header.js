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
	const token = localStorage.getItem('token');
	const logout = () => {
		localStorage.removeItem('token');
	};
	return (
		<header>
			<StyledContainer>
				<Link to="/">
					<StyledLogo src={logo} alt="graphic of lady reading book" />
				</Link>
				<StyledMenu>
					<StyledMenuList>
						{!token ? (
							<>
								<StyledMenuLi>Login</StyledMenuLi>
								<StyledMenuLi>
									<Link to="/register" style={{ color: 'white' }}>
										Register
									</Link>
								</StyledMenuLi>
							</>
						) : (
							<>
								<StyledMenuLi>
									<Link to="/profile">Profile</Link>
								</StyledMenuLi>

								<StyledMenuLi style={{ color: 'white' }}>
									Tell Story
								</StyledMenuLi>
								<StyledMenuLi>Logout</StyledMenuLi>
							</>
						)}
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
