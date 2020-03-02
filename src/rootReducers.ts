import { combineReducers, Reducer } from 'redux';
import counter, { CountState } from './components/Counter/reducer';

export enum ActionTypes {
  ADD_COUNT = 'ADD_COUNT',
}

export interface ReduxBaseAction {
  type: ActionTypes;
}

export interface AppStore {
  counter: CountState;
}

const rootReducer: Reducer<AppStore> = combineReducers<AppStore>({
  counter,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
