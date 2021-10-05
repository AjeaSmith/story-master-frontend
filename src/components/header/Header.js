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
							<Link to={`/profile`}>Profile</Link>
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
						<StyledMenuLi>Logout</StyledMenuLi>
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
							Login
						</StyledMenuLi>
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
