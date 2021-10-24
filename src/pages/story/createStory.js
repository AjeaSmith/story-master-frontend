import React from 'react';
import { Container, Typography, TextField } from '@mui/material';

const createStory = () => {
	return (
		<Container>
			<Typography variant="h4" align="center" sx={{ py: 3 }}>
				Create a Story!
			</Typography>
			<form>
				<TextField
					id="standard-title"
					label="Title"
					variant="standard"
					sx={{ mb: 3, width: '90%' }}
				/>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Necessitatibus dolore voluptatum assumenda magni unde odio
					eveniet, fuga tenetur expedita, sequi deleniti dolores
					reprehenderit velit amet optio dolorum? Ab error, adipisci, quasi
					eius ut omnis, eum quaerat enim earum facere possimus iusto
					maiores natus rerum dolores repudiandae. Laboriosam dolorum id
					quisquam.
				</p>
			</form>
		</Container>
	);
};

export default createStory;
