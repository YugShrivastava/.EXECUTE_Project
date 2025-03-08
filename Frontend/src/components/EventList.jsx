// components/EventList.jsx
import React from "react";
import EventCard from "./EventCard";

const EventList = ({ events, title, isRegistered }) => (
  <div className="bg-gray-900 rounded-lg shadow-neumorphic">
    <div className="px-6 py-4 border-b border-gray-800">
      <h2 className="text-xl font-bold text-purple-400">{title}</h2>
    </div>
    <div className="p-6 space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} event={event} onDetailsClick={() => console.log(event)} isRegistered={isRegistered} />
        ))
      ) : (
        <div className="text-center py-4 text-gray-400">
          {isRegistered ? "No events registered yet" : "No events on the horizon"}
        </div>
      )}
    </div>
  </div>
);

export default EventList;