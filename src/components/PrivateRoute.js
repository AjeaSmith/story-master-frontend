import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	const { authenticated } = useSelector((state) => state.authState);
	return (
		<Route
			{...rest}
			render={() =>
				authenticated ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
