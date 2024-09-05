import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import CreateEvent from './pages/CreateEvent';
import EventDetails from './components/EventDetails';
import EventRegistration from './pages/EventRegistration';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/register/:id" element={<EventRegistration />} />
      </Routes>
    </div>
  );
}

export default App;
