import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import localStorageService from '../services/localStorageService';

const EventRegistration = () => {
    const { id } = useParams();
    const events = localStorageService.getEvents();
    const event = events.find(event => event.id === parseInt(id));
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleRegistration = (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert('Please provide both your name and email.');
            return;
        }

        const newRegistration = {
            eventId: event.id,
            name,
            email,
        };

        localStorageService.addRegistration(newRegistration);
        setSuccessMessage(`You have successfully registered for ${event.name}`);
        setName('');
        setEmail('');
    };

    if (!event) {
        return <p>Event not found!</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Register for {event.name}</h1>
            <form onSubmit={handleRegistration} className="bg-gray-100 p-4 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 rounded w-full"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white p-2 rounded mt-4 hover:bg-green-600 transition"
                >
                    Register
                </button>
            </form>

            {successMessage && (
                <div className="mt-4 text-green-500 font-bold">{successMessage}</div>
            )}
        </div>
    );
};

export default EventRegistration;
