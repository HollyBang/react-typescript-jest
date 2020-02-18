import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';

// import PageInterface from '../interfaces/PageInterface';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<h1>Welcome to React with Typescript АУЕ</h1>
				</div>
			</Provider>
		);
	}
}

export default App;
