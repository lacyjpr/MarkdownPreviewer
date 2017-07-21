import React from 'react';
import Input from './Input';
import Output from './Output';

class Container extends React.Component {
	render() {
		return (
			<div>
				<Input/>
				<Output/>
			</div>
		);
	}
}

export default Container;