import React from 'react';
import { useParams, Link } from 'react-router-dom';
import localStorageService from '../services/localStorageService';

const EventDetails = () => {
    const { id } = useParams();
    const events = localStorageService.getEvents();
    const event = events.find(event => event.id === parseInt(id));

    if (!event) {
        return <p className="text-center text-red-500 font-bold mt-6">Event not found!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-md">
            <h1 className="text-3xl font-bold mb-4 text-center">{event.name}</h1>
            <p className="text-gray-700 mb-2">
                <span className="font-bold">Date:</span> {event.date}
            </p>
            <p className="text-gray-700 mb-2">
                <span className="font-bold">Location:</span> {event.location}
            </p>
            <p className="text-gray-700 mb-6">
                <span className="font-bold">Description:</span> {event.description}
            </p>
            <Link
                to={`/register/${event.id}`}
                className="block text-center bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition w-full"
            >
                Register for Event
            </Link>
        </div>
    );
};

export default EventDetails;
