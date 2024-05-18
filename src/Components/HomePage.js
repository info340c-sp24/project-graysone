import React from 'react';
import Header from './Navigation';
import FeaturesBox from './FeaturesBox';
import IntroBox from './IntroBox';

function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <IntroBox />
        <FeaturesBox />
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