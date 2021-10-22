import React from 'react';
import artImg from '../../images/faceart.jpg';
import Box from '@mui/material/Box';
const Banner = ({ children }) => {
	return (
		<Box
			component="section"
			sx={{
				width: '100%',
				height: 380,
				background: `linear-gradient(45deg, rgba(255, 255, 255, .7), rgba(255,255,255,.7)), url(${artImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			{children}
		</Box>
	);
};

export default Banner;
