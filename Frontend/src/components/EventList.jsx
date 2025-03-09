import React from "react";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const EventCard = ({ event, onDetailsClick }) => (
  <motion.div
    className="flex items-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
    whileHover={{ scale: 1.02 }}
  >
    <div className="bg-purple-800 rounded-lg p-3 text-white mr-4 text-center min-w-[60px]">
      <div className="text-sm font-bold">
        {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
      </div>
      <div className="text-lg font-extrabold">
        {new Date(event.date).toLocaleDateString("en-US", { day: "numeric" })}
      </div>
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-white">{event.name}</h3>
      <div className="text-sm text-gray-400 mt-1">
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center mt-1">
          <Users className="h-4 w-4 mr-1" />
          <span>{event.venue}</span>
        </div>
      </div>
    </div>
    <button
      onClick={() => onDetailsClick(event)}
      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
    >
      Details
    </button>
  </motion.div>
);

const EventList = ({ events, title, isRegistered, onDetailsClick }) => (
  <div className="bg-gray-900 rounded-lg shadow-neumorphic">
    <div className="px-6 py-4 border-b border-gray-800">
      <h2 className="text-xl font-bold text-purple-400">{title}</h2>
    </div>
    <div className="p-6 space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <EventCard key={event.id} event={event} onDetailsClick={onDetailsClick} />
        ))
      ) : (
        <div className="text-center py-4 text-gray-400">No events available</div>
      )}
    </div>
  </div>
);

export default EventList;