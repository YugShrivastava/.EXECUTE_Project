// components/NotificationList.jsx
import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationList = ({ notifications, onMarkAsRead, title, showViewAll, setActiveTab }) => (
  <div className="bg-gray-900 rounded-lg shadow-neumorphic">
    <div className="px-6 py-4 border-b border-gray-800">
      <h2 className="text-xl font-bold text-purple-400">{title}</h2>
    </div>
    <div className="p-6 space-y-4">
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <NotificationCard key={notif.id} notif={notif} onMarkAsRead={onMarkAsRead} />
        ))
      ) : (
        <div className="text-center py-4 text-gray-400">
          {title === "All Alerts" ? "No alerts to show" : "All quiet for now"}
        </div>
      )}
      {showViewAll && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setActiveTab("notifications")}
            className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
          >
            View All
          </button>
        </div>
      )}
    </div>
  </div>
);

export default NotificationList;