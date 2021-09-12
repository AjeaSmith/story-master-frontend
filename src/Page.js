import React from 'react';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Page = () => {
	return (
		<section>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/"></Route>
					<Route path="/about"></Route>
					<Route path="/users"></Route>
				</Switch>
				<Footer />
			</Router>
		</section>
	);
};

export default Page;
