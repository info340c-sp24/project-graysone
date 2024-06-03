import React from 'react';
import HomePage from './Components/HomePage';
import EventCreatorPage from './Components/EventCreator';
import EventOrganizerPage from './Components/EventOrganizer';
import InterestListCreatorPage from './Components/InterestList';
import SignInScreen from './Components/signin';
import {Routes, Route} from 'react-router-dom'
import EventDetails from './Components/EventCreatorDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInScreen />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/event-creator" element={<EventCreatorPage />} >
        <Route path=":event-name" element={<EventDetails />} />
      </Route>
      <Route path="/event-organizer" element={<EventOrganizerPage />} />
      <Route path="/interest-list" element={<InterestListCreatorPage />} />
    </Routes>
  );
}

export default App;
