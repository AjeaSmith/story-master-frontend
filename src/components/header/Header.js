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
import { useDispatch, useSelector } from 'react-redux';
import * as UserActionCreators from '../../redux/user/actions/userActions';
import { Toast } from 'react-bootstrap';
const Header = () => {
	const userState = useSelector((state) => state.userState);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(UserActionCreators.Logout());
	};

	return (
		<header>
			<StyledContainer>
				{userState.message !== '' ? (
					<Toast>
						<Toast.Body>{userState.message}</Toast.Body>
					</Toast>
				) : null}
				<Link to="/">
					<StyledLogo src={logo} alt="graphic of lady reading book" />
				</Link>
				<StyledMenu>
					<StyledMenuList>
						{!userState.isAuthenticated ? (
							<>
								<StyledMenuLi>
									<Link to="/login">Login</Link>
								</StyledMenuLi>
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
								<StyledMenuLi onClick={logout}>Logout</StyledMenuLi>
							</>
						)}
					</StyledMenuList>
				</StyledMenu>
			</StyledContainer>
		</header>
	);
};

export default Header;
