import React, { useState } from 'react';
  
export function EventCard({eventData}) {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="card m-3 created-event">
                <div className="card-body">
                    <h4>{eventData.name} @ {eventData.time}</h4>
                    <a className="card-text" href={eventData.link}>Hike at {eventData.name} planned for {eventData.date} at {eventData.time}. Click for full details</a>
                </div>
            </div>
        </div>
    )
}

function EventOrganizerContent({hikeEvents}) {
    let [categories, setCategories] = useState(['Unorganized Hikes']);
    let [newCategory, setNewCategory] = useState('');
    let [showModal, setShowModal] = useState(false);

    let handleInputChange = (event) => {
        setNewCategory(event.target.value);
    };

    let handleFormSubmit = (event) => {
        event.preventDefault();
        if (newCategory.trim() !== '') {
            setCategories([...categories, newCategory]);
            setNewCategory('');
            setShowModal(false);
        }
    };

    return (
        <section>
            <button className="btn btn-dark category-btn" onClick={() => setShowModal(true)}>Add New Category</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p className="close" onClick={() => setShowModal(false)}>X</p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                value={newCategory}
                                onChange={handleInputChange}
                                placeholder="Enter category title"
                            />
                            <button type="submit" className="btn btn-dark category-btn">Add Category</button>
                        </form>
                    </div>
                </div>
            )}
            {categories.map((category, index) => (
                <div key={index}>
                    <h3 className="event-organizer-title">{category}</h3>
                    <div className="container">
                        <div className="row">
                            {hikeEvents.filter((hike => hike.category === category)).map((hike, index) => (
                                    <EventCard key={index} eventData={hike} />
                                ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default EventOrganizerContent;
