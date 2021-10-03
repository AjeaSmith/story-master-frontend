import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Auth0Provider
				domain="storymasterauth.us.auth0.com"
				clientId="MURQzTMyYFbgJg4lfeP1gyr05ahQKdOf"
				redirectUri={window.location.origin}
			>
				<App />
			</Auth0Provider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
