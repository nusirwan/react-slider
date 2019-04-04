import styled from 'styled-components';

import theme from '../../base-styles/theme';

const { breakpoints, contentWidth } = theme;

export default styled.section`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
	margin-right: 1rem;
	margin-left: 1rem;

	@media ( ${ breakpoints.tablet } ) {
		margin-right: 2rem;
		margin-left: 2rem;
	}

	@media ( ${ breakpoints.laptop } ) {
		max-width: ${ contentWidth.laptop };
		margin-right: auto;
		margin-left: auto;
	}
`;
