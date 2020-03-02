import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addCount from './action';
import { AppState, AppStore } from '../../rootReducers';

const Count: React.FC = () => {
  const count = useSelector((state): AppState => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount())}>Add to count</button>
    </main>
  );
};

export default Count;
