import React from 'react';
import PropTypes from 'prop-types';

import ImageFrame from '../ImageFrame';
import { Slider, Wrap } from './styles';

export default function ImageSlider({ items, ...settings }) {

	return (
		<Slider { ...settings }>
			{ items.map( item => (
				<div key={ item.id }>
					<Wrap>
						<ImageFrame alt={ item.image } src={ item.image } />
					</Wrap>
				</div>
			) ) }
		</Slider>
	);
}

ImageSlider.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			image: PropTypes.string.isRequired,
		}),
	).isRequired,
};
