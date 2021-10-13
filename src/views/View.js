import React from 'react';
import styled from 'styled-components';
import Main from '../components/organisms/Main/Main';
import Details from '../components/organisms/Details/Details';
import Forecast from '../components/organisms/Forecast/Forecast';
import Navigation from '../components/molecules/Navigation/Navigation';

const Wrapper = styled.main`
	margin-top: 20vh;
	display: flex;
	height: 80vh;
	scroll-behavior: smooth;
	scroll-snap-type: x mandatory;
	overflow-x: scroll;
	background-color: ${({ theme }) => theme.colors.white};
	transition: background-color 0.4s ease, color 0.4s ease;

	@media (min-width: ${({ theme }) => theme.media.desktop}) {
		width: 100vw;
		flex-direction: column;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		overflow-x: auto;
	}
`;

const StyledSection = styled.section`
	flex: none;
	width: 100vw;
	scroll-snap-align: start;
	padding: 0 1.6em;

	@media (min-width: ${({ theme }) => theme.media.desktop}) {
		width: 100%;
		max-width: 60em;
		height: 80vh;
		min-height: 30em;
		margin: 0 auto;
		padding: 0;
	}
`;

const View = () => {
	return (
		<Wrapper>
			<Navigation />
			<StyledSection>
				<Main />
			</StyledSection>
			<StyledSection>
				<Details />
			</StyledSection>
			<StyledSection>
				<Forecast />
			</StyledSection>
		</Wrapper>
	);
};

export default View;
