import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Page = () => {
	return (
		<section>
			<Header />
			<Router>
				<Switch>
					<Route exact path="/"></Route>
					<Route path="/about"></Route>
					<Route path="/users"></Route>
				</Switch>
			</Router>
			<Footer />
		</section>
	);
};

export default Page;
