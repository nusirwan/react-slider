import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	height: 100%;
`;
Wrap.displayName = 'Wrap';

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	vertical-align: middle;
`;
Image.displayName = 'Image';
