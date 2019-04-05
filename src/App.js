import React, { Component, Fragment } from 'react';

import GlobalStyle from '../src/base-styles/globalStyle';
import Container from '../src/components/Container';
import ImageSlider from '../src/components/ImageSlider';
import Items from '../src/static/images';

export default class App extends Component {

	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<ImageSlider items={ Items }/>
				</Container>
			</Fragment>
		);
	}
}
