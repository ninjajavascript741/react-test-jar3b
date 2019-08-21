import EventModel from "../models/event.model";
import { Action, ActionTypes } from "../actions/event-list-actions";

export interface State {
    events: EventModel[]
}


export const initialState: State = {
    events: JSON.parse(localStorage.getItem('events') || '[]')
}

export function reducer(state: State = initialState, action: Action) {
    const newState = ((state: State, action: Action) => {
        switch (action.type) {
            case ActionTypes.ADD_EVENT: {
                const { event } = action.payload;
                const { events } = state;
                const lastId = events.length > 0 ? events[events.length - 1].id : 0;
                return {
                    ...state,
                    events: [...events, { ...event, id: lastId + 1 }]
                }
            }

            case ActionTypes.DELETE_EVENT: {
                const { eventId } = action.payload;
                const { events } = state;
                events.splice(state.events.findIndex(e => e.id === eventId), 1);
                return {
                    ...state,
                    events: [...events]
                }
            }

            case ActionTypes.SET_DONE_STATE_TO_EVENT: {
                const { eventId } = action.payload;
                return {
                    ...state,
                    events: state.events.map(e => e.id === eventId ? { ...e, done: true } : e)
                }
            }

            case ActionTypes.SET_UPDATE_STATE_TO_EVENT: {
                const { eventId } = action.payload;
                return {
                    ...state,
                    events: state.events.map(e => e.id === eventId ? { ...e, updateState: true } : e)
                }
            }

            case ActionTypes.UNSET_UPDATE_STATE_TO_EVENT: {
                const { eventId } = action.payload;
                return {
                    ...state,
                    events: state.events.map(e => e.id === eventId ? { ...e, updateState: false } : e)
                }
            }

            case ActionTypes.UPDATE_EVENT: {
                const { event } = action.payload;
                return {
                    ...state,
                    events: state.events.map(e => e.id === event.id ? { ...event } : e)
                }
            }

            default:
                return state
        }
    })(state, action);
    localStorage.setItem('events', JSON.stringify(newState.events));
    return newState;
}