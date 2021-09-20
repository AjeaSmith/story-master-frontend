import React from 'react';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import {
	StyledHeading,
	StyledSubheading,
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
			<Header />
			<Banner>
				<StyledHeading>Share your story around the world!</StyledHeading>
				<StyledSubheading>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					debitis, itaque mollitia minima tempora odio.
				</StyledSubheading>
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