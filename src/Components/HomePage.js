import React from 'react';
import Header from './Navigation';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <section className="intro-box">
          <p>
            Welcome to Hike Helper, a new website that will help you plan hikes, and share those plans with friends and family!  
          </p>
          <p>The Pacific Northwest has so much beautiful nature, such as Mount Rainier </p>
          <img src="img/Mount_Rainier_img.jpg" alt="a photo of Mount Rainier from afar"/>
          <p>and Cannon Beach</p>
          <img src="img/Cannon_Beach_img.jpg" alt="a photo of Cannon Beach in the morning"/>
          <p>But organizing events and plans can be needlessly difficult and frustrating. Plans can become confusing, and someone organizing the event 
              can get overwhelmed with all the work! This is where Hike Helper comes in. It is a website designed to make hike and trail planning easier,
              as well as allow you to share the places you're interested in with other people. 
          </p>
          <p>This website has three primary features, those being:</p>
          <ul>
            <li>
              The Event creator: Allows you to create hiking events. These events will contain information about an upcoming hike you have planned, 
              and provide a simple way to share that information with the people you plan to hike with! 
            </li>
            <li>
              The Event Organizer: Allows you to view and organize your created hiking events. This feature will also allow you to organize 
              your existing hiking events into various categories for better organization.
            </li>
            <li>
              The Interest List Creator: Allows you to create interest lists based on hikes you have gone on or would like to go to. You can then 
              share your interest lists with friends and family to get them excited!  
            </li>
          </ul>
          <p>
              You can access these features using the boxes down below, or with the navigation bar at the top. Have Fun!
          </p>
        </section>
        <section className="features-box">
          <div className="container">
            <div className="row">

              <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <div className="card m-4">
                  <div className="card-body text-center">
                    <h2>Event Creator</h2>
                    <p className="card-text">
                      Create hiking events you can share with your friends and family!
                    </p>
                    <a href="event_creator.html" className="btn btn-dark">Event Creator</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <div className="card m-4">
                  <div className="card-body text-center"> 
                    <h2>Event Organizer</h2>
                    <p className="card-text">
                      View and organize your created events!
                    </p>
                    <a href="event_organizer.html" className="btn btn-dark">Event Organizer</a>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-12 d-flex justify-content-center">
                <div className="card m-4">
                  <div className="card-body text-center">
                    <h2>Interest List Creator</h2>
                    <p className="card-text">
                      Create ranked lists of hikes based on the ones you've enjoyed!
                    </p>
                    <a href="interest_list_creator.html" className="btn btn-dark">Interest List Creator</a>
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

export default HomePage;