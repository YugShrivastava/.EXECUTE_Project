// components/EventCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Clock, Users } from "lucide-react";

const EventCard = ({ event, onDetailsClick, isRegistered }) => (
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
        {isRegistered ? (
          <>
            <div className="flex items-center">
              <span>Team: {event.teamName}</span>
            </div>
            <div className="flex items-center mt-1">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  event.status === "Confirmed" ? "bg-purple-700 text-white" : "bg-gray-700 text-gray-300"
                }`}
              >
                {event.status}
              </span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center mt-1">
              <Users className="h-4 w-4 mr-1" />
              <span>{event.venue}</span>
            </div>
          </>
        )}
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

export default EventCard;