import styled from 'styled-components';

export const StyledContainer = styled.div`
	max-width: 1100px;
	margin: 0 auto;
	display: grid;
	align-items: center;
	grid-template-areas: 'logo menu';
	grid-template-columns: 300px 1fr;
	padding: 10px 2em;

	@media screen and (max-width: 766px) {
		grid-template-areas: 'menu';
		grid-template-columns: 1fr;
		padding: 1em 1em;
	}
`;
export const StyledLogo = styled.img`
	grid-area: logo;

	@media screen and (max-width: 766px) {
		display: none;
	}
`;
export const StyledMenu = styled.nav`
	grid-area: menu;
`;
export const StyledMenuList = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 0;

	@media screen and (max-width: 766px) {
		justify-content: flex-start;
	}
`;
export const StyledMenuLi = styled.li`
	margin-left: 1.5em;

	&:nth-child(4) {
		font-size: 0.9rem;
		color: white;
		font-weight: bold;
		background: #7625b6;
		border-radius: 4px;
		padding: 0.7em;
	}
`;
