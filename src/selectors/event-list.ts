import { State } from '../reducers'
import { createSelector } from 'reselect'

/*
 * Get the todos state from the root state
 */
const getEventListState = ((state: State) => state.eventList)

/*
 * Getting todos array from todos State
 */
export const getEventList = createSelector([getEventListState], s => s.events)