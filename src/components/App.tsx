import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import Counter from './Counter';

// import PageInterface from '../interfaces/PageInterface';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>Wazzuup!</h1>
        </div>
        <Counter />
      </Provider>
    );
  }
}

export default App;
