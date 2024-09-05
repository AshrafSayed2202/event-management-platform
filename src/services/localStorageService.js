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
};

export default localStorageService;
