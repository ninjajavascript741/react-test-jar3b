import * as React from 'react'
import EventModel from '../models/event.model';
import Event from './Event'

interface Props {
  eventList: EventModel[],
  onDeleteClicked: (eventId: number) => void,
  onSetUpdateState: (eventId: number) => void,
  onUnSetUpdateState: (eventId: number) => void,
  onSetDoneState: (eventId: number) => void,
  onUpdateEvent: (event: EventModel) => void
}
interface State {
  eventList: EventModel[]
}

export default class EventList extends React.Component<Props, State> {
  constructor(public props: Props) {
    super(props)
  }

  render() {
    const { eventList, onDeleteClicked, onSetUpdateState, onUnSetUpdateState, onSetDoneState, onUpdateEvent } = this.props;

    return (
      <table className="event-list">
        <tbody>
          {
            eventList.map(e => (
                <Event
                  className="event-list__item"
                  key={e.id}
                  event={e}
                  onDeleteClicked={onDeleteClicked}
                  onSetUpdateState={onSetUpdateState}
                  onUnSetUpdateState={onUnSetUpdateState}
                  onSetDoneState={onSetDoneState}
                  onUpdateEvent={onUpdateEvent}
                />
            ))
          }
        </tbody>
      </table>
    )
  }
}