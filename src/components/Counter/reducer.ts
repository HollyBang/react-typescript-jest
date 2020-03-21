import { ActionTypes } from '../../rootReducers';
import { AddCountAction } from './action';

export interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const counter = (state: CountState = initialState, action: AddCountAction): CountState => {
  console.log('Count reducer', action);
  const { type } = action;

  switch (type) {
    case ActionTypes.ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default counter;
