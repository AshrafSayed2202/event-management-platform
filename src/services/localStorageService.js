const localStorageService = {
    getEvents: () => {
        const events = localStorage.getItem('events');
        return events ? JSON.parse(events) : [];
    },
    addEvent: (event) => {
        const events = localStorageService.getEvents();
        const newEvent = { ...event, id: events.length + 1 };
        localStorage.setItem('events', JSON.stringify([...events, newEvent]));
    },
    getRegistrations: () => {
        const registrations = localStorage.getItem('registrations');
        return registrations ? JSON.parse(registrations) : [];
    },
    addRegistration: (registration) => {
        const registrations = localStorageService.getRegistrations();
        localStorage.setItem('registrations', JSON.stringify([...registrations, registration]));
    },
};

export default localStorageService;
