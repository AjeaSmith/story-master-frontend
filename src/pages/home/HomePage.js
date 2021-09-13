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
} from './HomeStyle';
const HomePage = () => {
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
						<StyledStory>
							<StyledUser>
								<img
									src="https://via.placeholder.com/50"
									alt="placeholder"
								/>
								<small>James</small>
								<div>
									<small>5mins</small>
								</div>
							</StyledUser>
							<StyledDetails>
								<h2>My great story</h2>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Laudantium, facilis.
								</p>
							</StyledDetails>
							<hr />
						</StyledStory>
					</StyledContent>
				</StyledContainer>
			</StyledSection>
		</>
	);
};

export default HomePage;
