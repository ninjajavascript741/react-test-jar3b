import React from 'react';
import AddEventForm from './containers/AddEventForm';
import EventList from './containers/EventList';

const App: React.FC = () => {
  return (
    <div className="App">
      <AddEventForm />
      <EventList />
    </div>
  );
}

export default App;
