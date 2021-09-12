import React from 'react';
import Banner from '../../components/banner/Banner';
import Header from '../../components/header/Header';
import { Heading, Subheading } from './HomeStyle';
const HomePage = () => {
	return (
		<>
			<Header />
			<Banner>
				<Heading>Share your story around the world!</Heading>
				<Subheading>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					debitis, itaque mollitia minima tempora odio.
				</Subheading>
			</Banner>
		</>
	);
};

export default HomePage;
