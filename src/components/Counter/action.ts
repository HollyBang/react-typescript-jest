import { ActionTypes, ReduxBaseAction } from '../../rootReducers';

export interface AddCountAction extends ReduxBaseAction {
  type: ActionTypes.ADD_COUNT;
}

export default function addCount(): AddCountAction {
  console.log('addCount ACTION');
  return {
    type: ActionTypes.ADD_COUNT,
  };
}
