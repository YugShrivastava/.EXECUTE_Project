import React from "react";

function Events({ name, description, date, time, venue }) {
  return (
    <div className="max-w-lg w-full bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold text-[#E94560]">{name}</h2>
      <p className="text-gray-400 mt-2">{description}</p>
      <div className="mt-4 text-sm text-gray-300">
        <p>
          <span className="font-semibold">Date:</span> {date}
        </p>
        <p>
          <span className="font-semibold">Time:</span> {time}
        </p>
        <p>
          <span className="font-semibold">Venue:</span> {venue}
        </p>
      </div>
    </div>
  );
}

export default Events;
