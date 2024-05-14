import React from 'react';
import Header from './Navigation';

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
        <section>
          <button className="btn btn-dark category-btn">Add New Category</button>
          <h3 className="event-organizer-title">Hikes With Friends</h3>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card m-3 created-event">
                  <div className="card-body">
                    <h4>Iron Goat Trail @ 7:00 AM</h4>
                    <p className="card-text">Hike at Iron Goat Trail planned for 5/4 at 7:00 AM. Click for full details</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card m-3 created-event">
                  <div className="card-body">
                    <h4>Clear Creek Trail @ 8:30 AM</h4>
                    <p className="card-text">Hike at Clear Creek Trail planned for 5/17 at 8:30 AM. Click for full details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="event-organizer-title">Hikes with Family</h3>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card m-3 created-event">
                  <div className="card-body">
                    <h4>Poo Poo Point @ 11:00 AM</h4>
                    <p className="card-text">Hike at Poo Poo Point planned for 5/10 at 11:00 AM. Click for full details</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default EventOrganizerPage;