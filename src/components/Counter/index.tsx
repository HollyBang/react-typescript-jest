import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addCount, { AddCountAction } from './action';
import { AppState } from '../../rootReducers';

const Count: React.FC = () => {
  const count = useSelector((state: AppState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={(): AddCountAction => dispatch(addCount())}>Add to count</button>
    </main>
  );
};

export default Count;
