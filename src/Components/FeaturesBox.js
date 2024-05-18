import React from 'react';

let FeaturesBox = () => {
    return (
        <section class="features-box">
            <div class="container">
                <div class="row">

                    <div class="col-sm-12 col-md-6 d-flex justify-content-center">
                        <div class="card m-4">
                            <div class="card-body text-center">
                                <h2>Event Creator</h2>
                                <p class="card-text">
                                    Create hiking events you can share with your friends and family!
                                </p>
                                <a href="event_creator.html" class="btn btn-dark">Event Creator</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6 d-flex justify-content-center">
                        <div class="card m-4">
                            <div class="card-body text-center"> 
                                <h2>Event Organizer</h2>
                                <p class="card-text">
                                    View and organize your created events!
                                </p>
                                <a href="event_organizer.html" class="btn btn-dark">Event Organizer</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-12 d-flex justify-content-center">
                        <div class="card m-4">
                            <div class="card-body text-center">
                                <h2>Interest List Creator</h2>
                                <p class="card-text">
                                    Create ranked lists of hikes based on the ones you've enjoyed!
                                </p>
                                <a href="interest_list_creator.html" class="btn btn-dark">Interest List Creator</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FeaturesBox; 