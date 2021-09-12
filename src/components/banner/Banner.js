import React from 'react';
import { StyledBanner, StyledContainer } from './BannerStyle';
import artImg from '../../images/faceart.jpg';
const Banner = ({ children }) => {
	return (
		<StyledBanner
			style={{
				background: `linear-gradient(45deg, rgba(118, 37, 182, .9), rgba(57,37,182, .9)), url(${artImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<StyledContainer>{children}</StyledContainer>
		</StyledBanner>
	);
};

export default Banner;
