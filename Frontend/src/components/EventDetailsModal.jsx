import React from "react";
import { motion } from "framer-motion";
import { Clock, Users, Calendar, Tag, UserCircle } from "lucide-react";

const EventDetailsModal = ({ event, isOpen, onClose, onRegister, isRegistered = false }) => {
  if (!isOpen || !event) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-800 rounded-lg w-full max-w-2xl overflow-hidden"
      >
        <div className="bg-purple-700 p-4">
          <h2 className="text-xl font-bold text-white">{event.name}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-300">{event.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-2 text-purple-400" />
              <span>Date: {formatDate(event.date)}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="h-5 w-5 mr-2 text-purple-400" />
              <span>Time: {event.time}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Users className="h-5 w-5 mr-2 text-purple-400" />
              <span>Venue: {event.venue}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Tag className="h-5 w-5 mr-2 text-purple-400" />
              <span>Category: {event.category}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <UserCircle className="h-5 w-5 mr-2 text-purple-400" />
              <span>Max Participants: {event.maxParticipants}</span>
            </div>
          </div>

          {event.announcements && event.announcements.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-2">Announcements</h3>
              <div className="space-y-2">
                {event.announcements.map((announcement, index) => (
                  <div key={index} className="bg-gray-700 p-3 rounded">
                    <p className="text-gray-300">{announcement.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(announcement.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
            {isRegistered || <button
              onClick={() => onRegister(event._id)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
            >
              Register
            </button>}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventDetailsModal;