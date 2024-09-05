import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    return (
        <div className="border p-4">
            <h2 className="text-lg font-bold">{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <Link to={`/event/${event.id}`} className="text-blue-500">Details</Link>
        </div>
    );
};

export default EventCard;
