import React, { useState } from "react";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";


const EventList = ({ events, title, isRegistered, onRegister }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDetailsClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRegister = (eventId) => {
    if (onRegister) {
      onRegister(eventId);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-neumorphic">
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-purple-400">{title}</h2>
      </div>
      <div className="p-6 space-y-4">
        {events.length > 0 ? (
          events.map((event) => (
            <EventCard 
              key={event._id} 
              event={event} 
              onDetailsClick={handleDetailsClick} 
              isRegistered={isRegistered} 
            />
          ))
        ) : (
          <div className="text-center py-4 text-gray-400">
            {isRegistered ? "No events registered yet" : "No events on the horizon"}
          </div>
        )}
      </div>

      <EventDetailsModal
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onRegister={handleRegister}
      />
    </div>
  );
};

export default EventList;