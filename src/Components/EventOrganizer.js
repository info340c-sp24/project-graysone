import React, { useState, useEffect } from 'react';
import Header from './Navigation';
import EventOrganizerContent from './EventOrganizerContent';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from '..';

function EventOrganizerPage() {
  const [hikeEvents, setHikeEvents] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const database = getDatabase(app);

  // Loads user data for display in Event Organizer
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userUid = user.uid;
      const eventsRef = ref(database, 'events/' + userUid);
      onValue(eventsRef, (snapshot) => {
        const data = snapshot.val();
        setLoading(false);
        if (data) {
          const eventsArray = Object.entries(data).map(([key, value]) => ({
            id: key,
            ...value,
          }));
          setHikeEvents(eventsArray);
        } else {
          setHikeEvents([]);
        }
      }, (error) => {
        setLoading(false); 
        setError(error.message); 
      });
    }
  }, [auth, database]);

  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Event Organizer</h2>
        <section className="intro-box">
          <p>
            Welcome to the event organizer! Below you can view your created hiking events, and organize them into different categories. To edit or view your events, simply press the button present on the event and change the categories as you see fit. After resubmitting the form, your event details will be changed! Furthermore, you can add categories using the provided button, just be sure to save them before leaving the page, using the other button!
          </p>
        </section>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && <EventOrganizerContent hikeEvents={hikeEvents} />}
      </main>
      <footer>
        <section className="footer-box">
          <p>&copy; Grayson Ellard graysone@uw.edu</p>
        </section>
      </footer>
    </div>
  );
}

export default EventOrganizerPage;