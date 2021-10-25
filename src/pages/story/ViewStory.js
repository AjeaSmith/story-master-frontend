import React from 'react';
import { Stack, Typography, Box, Container, Button } from '@mui/material';
import ShowComments from '../../components/comments/ShowComments';

const ViewStory = () => {
	return (
		<>
			<Box
				component="section"
				sx={{
					width: '100%',
					background: '#F3F4F6',
					height: 200,
					py: '25px',
					display: 'flex',
					alignItems: 'center',
					mb: 3,
				}}
			>
				<Stack
					sx={{
						maxWidth: 500,
						mx: 'auto',
						display: 'flex',
						alignItems: 'center',
					}}
					spacing={2}
				>
					<Typography variant="h3">
						The long project home{' '}
						<span>
							<Typography
								variant="body1"
								align="center"
								sx={{
									mt: 2,
								}}
							>
								by: @admin
							</Typography>
						</span>
					</Typography>
					<ShowComments />
				</Stack>
			</Box>
			<Container>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Reiciendis sit nostrum architecto at, amet distinctio tempore.
					Necessitatibus eum at recusandae doloremque fugiat blanditiis,
					debitis veniam odit, beatae obcaecati corrupti natus possimus rem
					laborum magnam, aperiam dolore nisi! Expedita voluptates ipsa
					dolores iste modi, cum, quo et dolorum quaerat numquam laborum!
					<br />
					<br />
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
					tempora numquam itaque facere possimus id odio soluta laborum
					corrupti quam eius, enim, suscipit quod doloribus! Vitae minima
					amet laborum culpa nobis dicta tempore, temporibus facere quis?
					Possimus inventore sit voluptatem eos nemo praesentium vel
					mollitia ipsa cum temporibus, accusantium sapiente.
				</p>
			</Container>
		</>
	);
};

export default ViewStory;
