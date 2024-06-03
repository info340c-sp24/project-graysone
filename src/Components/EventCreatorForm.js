    import React, { useState, useEffect } from 'react';
    import Dropdown from 'react-dropdown';
    import 'react-dropdown/style.css';
    import { getAuth } from 'firebase/auth';
    import { getDatabase, ref, child, get } from 'firebase/database';
    import { app } from '..';

    function EventForm({ formData, onInputChange, onFormSubmit, setShowModal }) {
        const [categories, setCategories] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
        const auth = getAuth(app);

        // Ensures that user created categories will be avalible to choose in event form
        useEffect(() => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                setLoading(true);
                const dbRef = ref(getDatabase());
                get(child(dbRef, 'users/' + currentUser.uid + '/categories')).then((snapshot) => {
                    if (snapshot.exists()) {
                        const categoriesData = snapshot.val();
                        const categoryNames = Object.values(categoriesData); 
                        setCategories(categoryNames);
                    } 
                }).catch((error) => {
                    setError(error.message); 
                }).finally(() => {
                    setLoading(false);
                });
            }
        }, [auth]);
        
        const handleCategoryChange = (selectedOption) => {
            const { value } = selectedOption;
            onInputChange({ target: { id: 'selected_category', value } });
        };

        return (
            <div className="modal">
                <div className="modal-content">
                    <button className="btn" onClick={() => setShowModal(false)}>X</button>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {!loading && !error && (
                        <form onSubmit={onFormSubmit}>
                        <label htmlFor='selected_category'>Category:</label>
                        <Dropdown
                            type="text"
                            id="selected_category"
                            value={formData.selected_category}
                            onChange={handleCategoryChange}
                            options={categories}
                            placeholder="Select a category"
                        />

                        <label htmlFor="hike_name">Hike Name:</label>
                        <input
                            type="text"
                            id="hike_name"
                            value={formData.hike_name}
                            onChange={onInputChange}
                            required
                        />

                        <label htmlFor="hike_address">Hike Address:</label>
                        <input
                            type="text"
                            id="hike_address"
                            value={formData.hike_address}
                            onChange={onInputChange}
                            required
                        />

                        <label htmlFor="date_time">Hike Time and Date:</label>
                        <input
                            type="datetime-local"
                            id="date_time"
                            value={formData.date_time}
                            onChange={onInputChange}
                            required
                        />

                        <label htmlFor="organizer_name">Organizer Name:</label>
                        <input
                            type="text"
                            id="organizer_name"
                            value={formData.organizer_name}
                            onChange={onInputChange}
                            required
                        />

                        <label htmlFor="organizer_contact">Organizer Contact Information:</label>
                        <input
                            type="text"
                            id="organizer_contact"
                            value={formData.organizer_contact}
                            onChange={onInputChange}
                            required
                        />

                        <label htmlFor="hike_length">Hike Length:</label>
                        <input
                            type="text"
                            id="hike_length"
                            value={formData.hike_length}
                            onChange={onInputChange}
                        />

                        <label htmlFor="things_to_bring">Things to Bring:</label>
                        <textarea
                            id="things_to_bring"
                            value={formData.things_to_bring}
                            onChange={onInputChange}
                            rows="2"
                        ></textarea>

                        <label htmlFor="required_permits">Required Permits:</label>
                        <textarea
                            id="required_permits"
                            value={formData.required_permits}
                            onChange={onInputChange}
                            rows="2"
                        ></textarea>

                        <label htmlFor="carpool_plans">Carpool Plans:</label>
                        <textarea
                            id="carpool_plans"
                            value={formData.carpool_plans}
                            onChange={onInputChange}
                            rows="4"
                        ></textarea>

                        <label htmlFor="link_to_other_database">Link to Hike on Other Database:</label>
                        <input
                            type="text"
                            id="link_to_other_database"
                            value={formData.link_to_other_database}
                            onChange={onInputChange}
                        />

                        <button type="submit" className="btn btn-dark">Create Event</button>
                    </form>
                    )}
                </div>
            </div>
        );
    }

    export default EventForm;   