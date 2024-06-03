import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import { getDatabase, ref, push, get, child } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { app } from '..';

function EventOrganizerContent({ hikeEvents }) {
    const [categories, setCategories] = useState(['Unorganized Hikes']);
    const [newCategory, setNewCategory] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 
    const auth = getAuth(app);

    const handleInputChange = (event) => {
        setNewCategory(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (newCategory.trim() !== '') {
            if (!categories.includes(newCategory)) {
                setCategories([...categories, newCategory]);
                setNewCategory('');
                setShowModal(false);
            } else {
                setError('Category already exists.');
            }
        }
    };

    const handleCategorySave = () => {
        setLoading(true);
        setError(null);
        const currentUser = auth.currentUser;
        if (currentUser) {
            const db = getDatabase();
            const categoriesRef = ref(db, 'users/' + currentUser.uid + '/categories');

            // Want to only save new categories, so we have to load and check already saved categories
            get(categoriesRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const categoriesData = snapshot.val();
                    const existingCategories = Object.values(categoriesData);
                    
                    const newCategories = categories.filter(category => !existingCategories.includes(category));
                    newCategories.forEach(category => {
                        push(categoriesRef, category)
                            .catch((error) => {
                                setError(error.message);
                            });
                    });
                } else {
                    categories.forEach(category => {
                        push(categoriesRef, category)
                            .catch((error) => {
                                setError(error.message);
                            });
                    });
                }
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                setError(error.message);
            });
        } else {
            setLoading(false);
            setError('No user is signed in.');
        }
    };

    // Loads in the categories previously created and saved by users
    useEffect(() => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            const dbRef = ref(getDatabase());
            get(child(dbRef, 'users/' + currentUser.uid + '/categories')).then((snapshot) => {
                setLoading(false); 
                if (snapshot.exists()) {
                    const categoriesData = snapshot.val();
                    const categoryNames = Object.values(categoriesData);
                    setCategories(categoryNames); 
                } 
            }).catch((error) => {
                setLoading(false); 
                setError(error.message);
            });
        }
    }, [auth]);

    const eventCards = categories.map((category, index) => (
        <div key={index}>
            <h3 className="event-organizer-title">{category}</h3>
            <div className="container">
                <div className="row">
                    {hikeEvents
                        .filter(event => event.selected_category === category)
                        .map((hike) => (
                            <EventCard key={hike.id} eventData={hike} />
                    ))}
                </div>
            </div>
        </div>
    ));

    return (
        <section>
            <button className="btn btn-dark category-btn" onClick={() => setShowModal(true)}>Add New Category</button>
            <button className='btn btn-dark category-btn' onClick={handleCategorySave}> Save Category Data</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="btn" onClick={() => setShowModal(false)}>X</button>
                        <form onSubmit={handleFormSubmit}>
                            <label htmlFor="newCategory">Category Title:</label>
                            <input
                                type="text"
                                id="newCategory"
                                value={newCategory}
                                onChange={handleInputChange}
                                placeholder="Enter category title"
                            />
                            <button type="submit" className="btn btn-dark category-btn">Add Category</button>
                        </form>
                    </div>
                </div>
            )}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && eventCards}
        </section>
    );
}

export default EventOrganizerContent;