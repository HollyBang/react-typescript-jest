import { combineReducers } from 'redux';
import counter from './components/Counter/reducer';

export enum ActionTypes {
  ADD_COUNT = 'ADD_COUNT',
}

export interface ReduxBaseAction {
  type: ActionTypes;
}

const rootReducer = combineReducers({
  counter,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
