import { Form, Button } from 'react-bootstrap';
import Header from '../../components/header/Header';
import { StyledContainer } from './RegisterStyle';
const RegisterPage = () => {
	return (
		<>
			<Header />
			<StyledContainer>
				<h2
					style={{
						marginBottom: '20px',
						textAlign: 'center',
					}}
				>
					Register
				</h2>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicUsername">
						<Form.Label>Username</Form.Label>
						<Form.Control type="text" placeholder="Enter username" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>

					<Button type="submit" style={{ background: '#6d28d9' }}>
						Submit
					</Button>
				</Form>
			</StyledContainer>
		</>
	);
};

export default RegisterPage;
