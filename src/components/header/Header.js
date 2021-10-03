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
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
	const { isAuthenticated, logout, loginWithRedirect } = useAuth0();
	return (
		<header>
			<StyledContainer>
				<Link to="/">
					<StyledLogo src={logo} alt="graphic of lady reading book" />
				</Link>
				<StyledMenu>
					<StyledMenuList>
						{isAuthenticated ? (
							<>
								<StyledMenuLi>
									<Link to="/profile">Profile</Link>
								</StyledMenuLi>

								<StyledMenuLi
									style={{
										color: 'white',
										fontSize: '0.9rem',
										fontWeight: 'bold',
										background: '#7625b6',
										borderRadius: '4px',
										padding: '0.7em',
									}}
								>
									Tell Story
								</StyledMenuLi>
								<StyledMenuLi onClick={logout}>Logout</StyledMenuLi>
							</>
						) : (
							<StyledMenuLi
								onClick={loginWithRedirect}
								style={{
									color: 'white',
									fontSize: '0.9rem',
									fontWeight: 'bold',
									background: '#7625b6',
									borderRadius: '4px',
									padding: '0.7em',
								}}
							>
								Login
							</StyledMenuLi>
						)}
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
