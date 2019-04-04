import React from 'react';
import PropTypes from 'prop-types';

import ImageFrame from '../ImageFrame';

import {
	Link,
	Meta,
	Title,
	Wrap,
} from './styles';

export default function ItemSlider( props ) {

	return (
		<Wrap>
			<ImageFrame alt={ props.image } src={ props.image } />
			<Meta>
				<Link href={ props.link }>
					<Title>{ props.title }</Title>
				</Link>
			</Meta>
		</Wrap>
	);
}

ItemSlider.propTypes = {
	image: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
