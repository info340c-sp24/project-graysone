import React, { useState } from 'react';
import Header from './Navigation';
import EventForm from './EventCreatorForm';
import EventDetails from './EventCreatorDetails';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, push } from 'firebase/database';
import { app } from '..';

function EventCreatorPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    selected_category: '',
    hike_name: '',
    hike_address: '',
    date_time: '',
    organizer_name: '',
    organizer_contact: '',
    hike_length: '',
    things_to_bring: '',
    required_permits: '',
    carpool_plans: '',
    link_to_other_database: '',
  });

  const auth = getAuth(app);
  const database = getDatabase(app);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    setShowModal(false);

    const selectedCategoryCheck = {
      ...formData,
      selected_category: formData.selected_category || 'Unorganized Hikes'
    };

    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const eventsRef = ref(database, 'events/' + userUid);
      push(eventsRef, selectedCategoryCheck);
    }
  };

  const resetForm = () => {
    setFormData({
      selected_category: '',
      hike_name: '',
      hike_address: '',
      date_time: '',
      organizer_name: '',
      organizer_contact: '',
      hike_length: '',
      things_to_bring: '',
      required_permits: '',
      carpool_plans: '',
      link_to_other_database: '',
    });
  };

  const handleCreateNewEvent = () => {
    resetForm();
    setIsFormSubmitted(false);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Event Creator</h2>

        <section className="intro-box">
          <p>
            Welcome to the event creator! Below you there is a form that you will be able to fill out to create your hiking event. The first five inputs are required, but after that you can choose what details to add. Note: You may want to go to the Event Organizer and add/save a couple categories if you already have ones in mind. Nonetheless, you'll be able to change the category your event is in later.
          </p>
          <div className='button-flex'>
            <button className="btn btn-dark event-btn" onClick={handleCreateNewEvent}>Create New Hike Event</button>
          </div>
        </section>

        <section>
          {showModal && (
            <EventForm
              formData={formData}
              onInputChange={handleInputChange}
              onFormSubmit={handleFormSubmit}
              setShowModal={handleCloseModal}
            />
          )}
          {isFormSubmitted && <EventDetails formData={formData} />}
        </section>

      </main>

      <footer>
        <section className="footer-box">
          <p>&copy; Grayson Ellard graysone@uw.edu</p>
        </section>
      </footer>

    </div>
  );
}

export default EventCreatorPage;