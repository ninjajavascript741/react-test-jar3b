import { combineReducers } from 'redux'
import * as fromEventList from './event-list.reduser';

export interface State {
  eventList: fromEventList.State
}

export const initialState: State = {
  eventList: fromEventList.initialState
}

export const reducer = combineReducers<State>({
  eventList: fromEventList.reducer
})