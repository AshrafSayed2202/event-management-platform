import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 text-white">
            <Link to="/" className="mr-4">Events</Link>
            <Link to="/create" className="mr-4">Create Event</Link>
        </nav>
    );
};

export default Navbar;
