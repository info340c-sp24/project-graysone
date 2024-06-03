import React from 'react';

function EventDetails({ formData }) {
    const eventDetailsMapping = {
        "Hike Address": "hike_address",
        "Date and Time": "date_time",
        "Organizer Name": "organizer_name",
        "Organizer Contact": "organizer_contact",
        "Hike Length": "hike_length",
        "Things to Bring": "things_to_bring",
        "Required Permits": "required_permits",
        "Carpool Plans": "carpool_plans",
        "Link to Other Database": "link_to_other_database"
    };

    const eventDetailsItems = Object.entries(eventDetailsMapping).map(([title, key]) => (
        <div className="col-sm-12 col-md-4" key={key}>
            <div className="card m-3 event-detail">
                <div className="card-body">
                    <h4>{title}:</h4>
                    <p className="card-text">{formData[key]}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="event-box">
            <div className='container'>
                <h3 className='event-name'>{formData.hike_name}</h3>
                <div className='row'>
                    {eventDetailsItems}
                </div>
            </div>
        </div>
    );
}

export default EventDetails;