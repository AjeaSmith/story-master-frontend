import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home/HomePage';
import Profile from './pages/profile/ProfilePage';

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
					<Route path="/login"></Route>
					<Route path="/register"></Route>
				</Switch>
			</Router>
		</StyledPage>
	);
}
export default App;
