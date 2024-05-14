import React from 'react';
import Header from './Navigation';

function EventCreatorPage() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Event Creator</h2>
        <section className="intro-box">
          <p>
            Welcome to the event creator! Below you there is a form that you will be able to fill out to create your hiking event. The first five 
            inputs are required, but after that you can choose what details to add. 
          </p>
          <form action="">
            <label htmlFor="hike_name">Hike Name:</label>
            <input type="text" id="hike_name" name="hike_name" required/><br/><br/>

            <label htmlFor="hike_address">Hike Address:</label>
            <input type="text" id="hike_address" name="hike_address" required/><br/><br/>

            <label htmlFor="date_time">Hike Time and Date:</label>
            <input type="datetime-local" id="date_time" name="date_time" required/><br/><br/>

            <label htmlFor="organizer_name">Organizer Name:</label>
            <input type="text" id="organizer_name" name="organizer_name" required/><br/><br/>

            <label htmlFor="organizer_contact">Organizer Contact Information:</label>
            <input type="text" id="organizer_contact" name="organizer_contact" required/><br/><br/>

            <label htmlFor="hike_length">Hike Length:</label>
            <input type="text" id="hike_length" name="hike_length" /><br/><br/>

            <label htmlFor="things_to_bring">Things to Bring:</label><br/>
            <textarea id="things_to_bring" name="things_to_bring" rows="2" ></textarea><br/><br/>

            <label htmlFor="required_permits">Required Permits:</label><br/>
            <textarea id="required_permits" name="required_permits" rows="2"></textarea><br/><br/>

            <label htmlFor="carpool_plans">Carpool Plans:</label><br/>
            <textarea id="carpool_plans" name="carpool_plans" rows="4"></textarea><br/><br/>

            <label htmlFor="link_to_other_database">Link to Hike on Other Database:</label>
            <input type="url" id="link_to_other_database" name="link_to_other_database"/><br/><br/>

            <input type="submit" value="Create Event" className="form-button" role="button"/>
          </form>
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