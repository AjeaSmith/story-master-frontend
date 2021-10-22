import React, { useEffect, useState } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { createBrowserHistory } from 'history';
import axios from 'axios';
import Header from './components/header/Header';

const customHistory = createBrowserHistory();

function App() {
	const StyledPage = styled.section`
		height: 100vh;
	`;
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	useEffect(() => {
		console.log('render app');
		return axios
			.get('http://localhost:8080/api/user/authenticated', {
				withCredentials: true,
			})
			.then(({ data }) => {
				setIsLoggedIn(data.authenticated);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [isLoggedIn]);
	return (
		<StyledPage>
			<Router history={customHistory}>
				<Header history={customHistory} isLoggedIn={isLoggedIn} />
				<Switch>
					<Route
						exact
						path="/"
						render={() => <Home isLoggedIn={isLoggedIn} />}
					/>
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route
						path="/profile"
						render={() => <Profile isLoggedIn={isLoggedIn} />}
					/>
				</Switch>
			</Router>
		</StyledPage>
	);
}
export default App;
