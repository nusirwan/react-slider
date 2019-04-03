import styled from 'styled-components';

import { theme } from "../../base-styles";

const { breakpoints } = theme;

export const Wrap = styled.div`
	position: relative;
	height: 100%;
`;
Wrap.displayName = "Wrap";

export const Meta = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 100%;
	top: 50%;
	left: 50%;
	transform: translate( -50%, -50% );

	@media ( ${ breakpoints.tablet } ) {
		width: unset;
		top: 50%;
		left: 10%;
		transform: translate( -10%, -50% );
	}
`;
Meta.displayName = "Meta";

const Link = styled.a`
	text-decoration: none;
	transition: color 0.2s ease;
`;
Link.displayName = "Link";

export default Link;

export const Title = styled.h3`
	padding: 0.625em;
`
Title.displayName = "Title";
