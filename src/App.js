import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';

function App() {
	const StyledPage = styled.section`
		height: 100vh;
	`;
	return (
		<StyledPage>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/profile" component={Profile} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login}/>
				</Switch>
			</Router>
		</StyledPage>
	);
}
export default App;
