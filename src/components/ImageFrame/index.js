import React from 'react';
import PropTypes from 'prop-types';

import { Image, Wrap } from './styles';

export default function ImageFrame({ alt, src }) {

    return (
        <Wrap>
            <Image alt={ alt } src={ src }/>
        </Wrap>
    )
}

ImageFrame.propTypes = {
	alt: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
};
