import React from 'react';
import PropTypes from 'prop-types';

import ImageFrame from '../ImageFrame';
import { Slider, Wrap } from './styles';

export default function ImageSlider({ items }) {

	const settings = {
		infinite: true,
		speed: 500,
		arrows: false,
		rows: 2,
		slidesPerRow: 4,
		slidesToShow: 1,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 824,
				settings: {
					rows: 1,
					slidesPerRow: 1,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					rows: 2,
					slidesPerRow: 1,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 767,
				settings: {
					rows: 1,
					slidesPerRow: 1,
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 567,
				settings: {
					rows: 1,
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

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
