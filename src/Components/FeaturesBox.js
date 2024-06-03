import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesBox() {
    return (
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
                                <Link to="/event-creator" className="btn btn-dark">Event Creator</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <div className="card m-4">
                            <div className="card-body text-center">
                                <h2>Event Organizer</h2>
                                <p className="card-text">
                                    View, organize, and edit your created events!
                                </p>
                                <Link to="/event-organizer" className="btn btn-dark">Event Organizer</Link>
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
                                <Link to="/interest-list" className="btn btn-dark">Interest List Creator</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturesBox;