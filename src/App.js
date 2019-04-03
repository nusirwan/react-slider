import React, { Component, Fragment } from 'react';

import GlobalStyle from '../src/base-styles/globalStyle';
import Container from '../src/components/Container';

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<GlobalStyle />
				<Container>
					<p>React Slider</p>
				</Container>
			</Fragment>
		);
	}
}
