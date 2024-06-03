import React, { useState } from 'react';
import EventForm from './EventCreatorForm';
import { getDatabase, ref, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '..';

function EventCard({ eventData }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(eventData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const database = getDatabase(app);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormUpdate = (event) => {
    event.preventDefault();
    setLoading(true);
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const eventId = eventData.id;
      const eventRef = ref(database, 'events/' + userUid + '/' + eventId);
      update(eventRef, formData)
        .then(() => {
          setShowModal(false);
        })
        .catch((error) => {
          setError(error.message);
        })
        .then(() => {
          setLoading(false);
        });
    }
  };

  const [eventDate, eventTime] = formData.date_time.split('T');

  return (
    <div className="col-sm-12 col-md-4">
      <div className="card m-3 created-event">
        <div className="card-body">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          <h4>{eventData.hike_name}</h4>
          <p>{eventData.hike_address}</p>
          <p>On {eventDate} At {eventTime}</p>
          <button className="btn btn-dark" onClick={() => setShowModal(true)}>View/Edit Details</button>
        </div>
      </div>
      {showModal && (
        <div>     
            {!loading && !error && (
              <EventForm
                formData={formData}
                onInputChange={handleInputChange}
                onFormSubmit={handleFormUpdate} 
                setShowModal={handleCloseModal}/>
            )}
        </div>
      )}
    </div>
  );
}

export default EventCard;