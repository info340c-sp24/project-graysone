import React from 'react';
import Header from './Navigation';
import EventOrganizerContent from './EventOrganizerContent';

let hikesPlaceholder = [
  {
    name: "Clear Creek Trail",
    date: "5/17",
    time: "8:30 AM",
    link: null,
    category: 'Unorganized Hikes'
  },
  {
    name: "Poo Poo Point",
    date: "5/10",
    time: "11:00 AM",
    link: null,
    category: 'Unorganized Hikes'
  },
  {
    name: "Iron Goat Trail",
    date: "5/4",
    time: "7:00 AM",
    link: null,
    category: 'Unorganized Hikes'
  }
];

function EventOrganizerPage() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Event Organizer</h2>
        <section className="intro-box">
          <p>
            Welcome to the event organizer! Below you can view your created hiking events, and organize them into different categories. 
          </p>
        </section>
        <EventOrganizerContent hikeEvents={hikesPlaceholder} />
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