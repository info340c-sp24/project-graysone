import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); 
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
        setLoading(true); 
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                setError(error.message); 
            });
    };

    return (
        <header>
            <div className="title-content">
                <div className="logo-container">
                    <h1>Hike <img src="img/tree_logo.png" alt="An Evergreen tree with a tan background" className="logo"/> Helper</h1>
                </div>
            </div>
            
            <nav>
                <ul>    
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/event-creator">Event Creator</Link></li>
                    <li><Link to="/event-organizer">Event Organizer</Link></li>
                    <li><Link to="/interest-list">Interest List Creator</Link></li>
                    <button className='btn btn-light log-out' onClick={handleSignOut} disabled={loading}>Log Out</button>
                </ul>
            </nav>
            {loading && <p>Logging out...</p>}
            {error && <p>Error: {error}</p>}
        </header>
    );
}

export default Header;