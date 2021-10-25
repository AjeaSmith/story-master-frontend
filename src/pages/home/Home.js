import React from 'react';
import Banner from '../../components/banner/Banner';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
	StyledSection,
	StyledContent,
	StyledContainer,
	StyledStory,
	StyledUser,
	StyledDetails,
	StyledImg,
	StyledAuthor,
	StyledTime,
	StyledName,
	StyledHeading2,
	StyledPara,
} from './HomeStyle';
const Home = () => {
	return (
		<>
			<Banner>
				<div
					style={{
						maxWidth: '600px',
						margin: '0 auto',
						padding: '3em 0',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						color: '#00004d',
					}}
				>
					<Typography
						align="center"
						variant="h3"
						sx={{ fontWeight: '600' }}
					>
						Share your story around the world!
					</Typography>
					<Typography
						variant="subtitle1"
						sx={{ fontWeight: '500', margin: '12px 0' }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Expedita saepe eos error harum quos praesentium odio
						voluptatum quas reprehenderit. Explicabo!
					</Typography>
					<Button
						variant="contained"
						sx={{ backgroundColor: '#18A999', margin: '12px 0' }}
					>
						Ready to share your story?
					</Button>
				</div>
			</Banner>
			<StyledSection>
				<StyledContainer>
					<StyledContent>
						<h2 style={{ textAlign: 'center' }}>
							Awesome stories made by you!
						</h2>
						<hr />
						<StyledStory>
							<StyledUser>
								<StyledName>
									<StyledImg
										src="https://via.placeholder.com/50"
										alt="placeholder"
									/>
									<StyledAuthor>
										James -{' '}
										<span style={{ fontSize: '14px', color: 'gray' }}>
											Michigan
										</span>
									</StyledAuthor>
								</StyledName>
								<StyledTime>
									<small>5m ago</small>
								</StyledTime>
							</StyledUser>
							<StyledDetails>
								<StyledHeading2>My great story</StyledHeading2>
								<StyledPara>
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Minima sed ducimus facere!
								</StyledPara>
								<hr />
							</StyledDetails>
						</StyledStory>

						<StyledStory>
							<StyledUser>
								<StyledName>
									<StyledImg
										src="https://via.placeholder.com/50"
										alt="placeholder"
									/>
									<StyledAuthor>
										James -{' '}
										<span style={{ fontSize: '14px', color: 'gray' }}>
											Michigan
										</span>
									</StyledAuthor>
								</StyledName>
								<StyledTime>
									<small>5m ago</small>
								</StyledTime>
							</StyledUser>
							<StyledDetails>
								<StyledHeading2>My great story</StyledHeading2>
								<StyledPara>
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Minima sed ducimus facere!
								</StyledPara>
								<hr />
							</StyledDetails>
						</StyledStory>
					</StyledContent>
				</StyledContainer>
			</StyledSection>
		</>
	);
};

export default Home;
