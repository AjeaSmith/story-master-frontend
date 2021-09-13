import React from 'react';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import {
	StyledHeading,
	StyledSubheading,
	StyledSection,
	StyledImg,
	StyledContent,
	StyledContainer,
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
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
						quae earum tenetur aperiam dolorem ipsam quidem excepturi
						quaerat?
					</StyledContent>
				</StyledContainer>
			</StyledSection>
		</>
	);
};

export default HomePage;
