import styled from 'styled-components';
import _Slider from 'react-slick';

export const Slider = styled( _Slider )`
	.slick-slide {
		float: left;
	}

	.slick-list {
		overflow: hidden;
	}
`;
Slider.displayName = 'Slider';

export const Wrap = styled.div`
	position: relative;
	height: 100%;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;
Wrap.displayName = 'Wrap';
