import React, { useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import EditProfile from './pages/profile/EditProfile';
import CreateStory from './pages/story/CreateStory';
import ViewStory from './pages/story/ViewStory';
import { createBrowserHistory } from 'history';
import { useDispatch } from 'react-redux';
import { authenticatedUser } from './redux/auth/authActions';
import PrivateRoute from './components/PrivateRoute';

const customHistory = createBrowserHistory();

const StyledPage = styled.section`
	height: 100vh;
`;

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authenticatedUser());
	}, [dispatch]);

	return (
		<StyledPage>
			<Router history={customHistory}>
				<Header history={customHistory} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/profile/:id" component={Profile} />
					{/* <PrivateRoute path="/edit/profile/:id">
						<EditProfile />
					</PrivateRoute>
					<PrivateRoute path="/story/create">
						<CreateStory />
					</PrivateRoute> */}
					<Route path="/view/story/:id" component={ViewStory} />
				</Switch>
			</Router>
		</StyledPage>
	);
}
export default App;
