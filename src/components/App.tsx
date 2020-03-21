import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux';
import Counter from './Counter';
import CheckBox from './CheckBox';

// import PageInterface from '../interfaces/PageInterface';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Wazzuup!</h1>
      </div>
      <Counter />
      <CheckBox labelOn="on" labelOff="off" />
    </Provider>
  );
};

export default App;
