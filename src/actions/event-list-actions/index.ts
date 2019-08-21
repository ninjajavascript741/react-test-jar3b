import EventModel from "../../models/event.model";


/*
 * In order to automatically generate id for our events
 */  
let nextId = 0

/*
 * I am defining every action name constant here
 */
export enum ActionTypes {
  ADD_EVENT = '[event-list-action] ADD_EVENT',
  DELETE_EVENT = '[event-list-action] DELETE_EVENT',
  UPDATE_EVENT = '[event-list-action] UPDATE_EVENT',
  SET_UPDATE_STATE_TO_EVENT = '[event-list-action] SET_UPDATE_STATE_TO_EVENT',
  UNSET_UPDATE_STATE_TO_EVENT = '[event-list-action] UNSET_UPDATE_STATE_TO_EVENT',
  SET_DONE_STATE_TO_EVENT = '[event-list-action] SET_DONE_STATE_TO_EVENT',
}

/*
 * Define return types of actions 
 * Every action returns a type and a payload
 */
export interface AddEventAction { 
    type: ActionTypes.ADD_EVENT,
    payload: { event: EventModel } 
}
export interface DeleteEventAction { 
  type: ActionTypes.DELETE_EVENT, 
  payload: { eventId: number } 
}
export interface UpdateEventAction { 
  type: ActionTypes.UPDATE_EVENT,
  payload: { event: EventModel }
}
export interface SetUpdateStateToEventAction { 
  type: ActionTypes.SET_UPDATE_STATE_TO_EVENT, 
  payload: { eventId: number } 
}
export interface UnSetUpdateStateToEventAction { 
  type: ActionTypes.UNSET_UPDATE_STATE_TO_EVENT, 
  payload: { eventId: number } 
}

export interface SetDoneStateToEventAction { 
  type: ActionTypes.SET_DONE_STATE_TO_EVENT, 
  payload: { eventId: number } 
}

/*
 * Define our actions creators
 * We are returning the right Action for each function
 */
export function addEvent(name: string): AddEventAction {
  return {
    type: ActionTypes.ADD_EVENT,
    payload: {
      event: {
        id: nextId++,
        name: name,
        done: false,
        updateState: false
      }
    }
  }
}

export function deleteEvent(eventId: number): DeleteEventAction {
  return {
    type: ActionTypes.DELETE_EVENT,
    payload: {
      eventId
    }
  }
}

export function updateEvent(event: EventModel): UpdateEventAction {
  return {
    type: ActionTypes.UPDATE_EVENT,
    payload: {
      event
    }
  }
}

export function setUpdateStateToEvent(eventId: number): SetUpdateStateToEventAction {
  return {
    type: ActionTypes.SET_UPDATE_STATE_TO_EVENT,
    payload: {
      eventId
    }
  }
}

export function unSetUpdateStateToEvent(eventId: number): UnSetUpdateStateToEventAction {
  return {
    type: ActionTypes.UNSET_UPDATE_STATE_TO_EVENT,
    payload: {
      eventId
    }
  }
}

export function SetDoneStateToEvent(eventId: number): SetDoneStateToEventAction {
  return {
    type: ActionTypes.SET_DONE_STATE_TO_EVENT,
    payload: {
      eventId
    }
  }
}

/*
 * Define the Action type
 * It can be one of the types defining in action/todos file
 */
export type Action = 
  | AddEventAction
  | DeleteEventAction
  | UpdateEventAction
  | SetUpdateStateToEventAction
  | UnSetUpdateStateToEventAction
  | SetDoneStateToEventAction