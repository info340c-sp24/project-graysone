import React from 'react';

function Header() {
    return (
        <header>
            <div className="title-content">
                <div className="logo-container">
                    <h1>Hike <img src="img/tree_logo.png" alt="An Evergreen tree with a tan background" className="logo"/> Helper</h1>
                </div>
            </div>
            <nav>
                <ul>    
                    <li><a href="index.html">Home</a></li>
                    <li><a href="event_creator.html">Event Creator</a></li>
                    <li><a href="event_organizer.html">Event Organizer</a></li>
                    <li><a href="interest_list_creator.html">Interest List Creator</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;