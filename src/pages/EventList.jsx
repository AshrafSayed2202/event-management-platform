import React, { useEffect, useState } from 'react';
import localStorageService from '../services/localStorageService';
import EventCard from '../components/EventCard';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = localStorageService.getEvents();
        setEvents(storedEvents);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-xl mb-4">Upcoming Events</h1>
            <div className="grid grid-cols-3 gap-4">
                {events.map(event => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default EventList;
