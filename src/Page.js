import React from 'react';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledPage = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const Page = () => {
	return (
		<StyledPage>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/"></Route>
					<Route path="/about"></Route>
					<Route path="/users"></Route>
				</Switch>
				<Footer />
			</Router>
		</StyledPage>
	);
};

export default Page;
