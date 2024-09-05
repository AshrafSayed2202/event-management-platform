import React from 'react';
import { useParams } from 'react-router-dom';
import localStorageService from '../services/localStorageService';
import { Link } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const events = localStorageService.getEvents();
    const event = events.find(event => event.id === parseInt(id));

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">{event.name}</h1>
            <p className="mt-2">Date: {event.date}</p>
            <p className="mt-2">Location: {event.location}</p>
            <p className="mt-2">Description: {event.description}</p>
            <Link to={`/register/${event.id}`} className="bg-green-500 text-white p-2 mt-4 inline-block">
                Register for Event
            </Link>
        </div>
    );
};

export default EventDetails;
