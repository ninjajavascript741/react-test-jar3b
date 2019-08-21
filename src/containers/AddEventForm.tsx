import { connect } from 'react-redux'
import { addEvent } from '../actions';
import AddEventForm from '../components/AddEventForm';

export default connect<any, any, any>(null, {
  handleSubmit: addEvent
})(AddEventForm)