import React from 'react';
import Header from './Navigation';
import InterestListContent from './InterestListContent';

function InterestListCreatorPage() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Interest List Creator</h2>
        <section className="intro-box">
          <p>
            Welcome to the Interest List Creator! Here you can create interest lists based on the hikes you enjoy. To name your list, simply use the provided button, and to add new entries use the button right next to it. You can reorder your entries by dragging and dropping them. Make sure to grab a screenshot of your list before you leave if you'd like to share it online! 
          </p>
        </section>
        <InterestListContent />
      </main>
      <footer>
        <section className="footer-box">
          <p>&copy; Grayson Ellard graysone@uw.edu</p>
        </section>
      </footer>
    </div>
  );
}

export default InterestListCreatorPage;