import { Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

function App() {
	const StyledPage = styled.section`
		height: 100vh;
	`;
	return (
		<StyledPage>
			<Router history={customHistory}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		</StyledPage>
	);
}
export default App;
