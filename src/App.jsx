import React from 'react';

import Container from './components/Container';


/**
 * this container is defined as class so we can modify state
 */
class App extends React.Component {
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
	render() {
		return (
			<Container/>
		);
	}
}

export default App;
