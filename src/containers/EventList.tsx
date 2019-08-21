import { connect } from 'react-redux'
import { State } from '../reducers'
import { getEventList } from '../selectors';
import { deleteEvent, setUpdateStateToEvent, SetDoneStateToEvent, updateEvent, unSetUpdateStateToEvent } from '../actions';
import EventList from '../components/EventList';

const mapStateToProps = (state: State) => ({
  eventList: getEventList(state)
})

const mapDispatchToProps = {
  onDeleteClicked: deleteEvent,
  onSetUpdateState: setUpdateStateToEvent,
  onSetDoneState: SetDoneStateToEvent,
  onUpdateEvent: updateEvent,
  onUnSetUpdateState: unSetUpdateStateToEvent

}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)