import React from 'react';
import Header from './Navigation';

function InterestListCreatorPage() {
  return (
    <div>
      <Header />
      <main>
        <h2 className="page-header">Interest List Creator</h2>
        <section className="intro-box">
          <p>
            Welcome to the Interest List Creator! Here you can create interest lists based on the hikes you enjoy. To reorder the hikes, 
            simply drag them into place! 
          </p>
        </section>
        <section className="list-box">
          <button className="btn btn-dark">Add New Entry</button>
          <button className="btn btn-dark">Rename Interest List</button>
          <h3 className="interest-list-title">Top 5 Hikes with a Lake</h3>
          <ol className="interest-list">
            <li><h4>North Lake</h4> A long distance hike with a small lake and beautiful wildflowers around it.</li>
            <li><h4>Boulder Lake</h4> This hike was pretty hard but I thought Boulder lake was such a beautiful color. </li>
            <li><h4>Diablo Lake</h4> The trail was pretty busy which was kind of annoying, the views were great though! </li>
            <li><h4>Lena Lake</h4> Super easy hike and a very enjoyable view of the lake! I loved all the birds.</li>
            <li><h4>Gilette Lake and Greenleaf Overlook</h4> Both the lake and overlook were beautiful.</li>
          </ol>
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

export default InterestListCreatorPage;