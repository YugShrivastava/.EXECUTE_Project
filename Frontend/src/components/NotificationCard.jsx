// components/NotificationCard.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";

const NotificationCard = ({ notif, onMarkAsRead }) => (
  <motion.div
    className={`flex items-center p-4 rounded-lg ${
      !notif.isRead ? "bg-purple-950" : "bg-gray-800"
    } hover:bg-gray-700 transition-colors`}
    onClick={() => onMarkAsRead(notif.id)}
    whileHover={{ scale: 1.02 }}
  >
    <div
      className={`rounded-full p-2 mr-3 ${
        !notif.isRead ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-400"
      }`}
    >
      <Bell className="h-5 w-5" />
    </div>
    <div className="flex-1">
      <p
        className={`text-sm ${
          !notif.isRead ? "font-bold text-white" : "text-gray-300"
        }`}
      >
        {notif.message}
      </p>
      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
    </div>
    {!notif.isRead && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onMarkAsRead(notif.id);
        }}
        className="text-purple-400 hover:text-purple-300 text-sm"
      >
        Mark as read
      </button>
    )}
  </motion.div>
);

export default NotificationCard;