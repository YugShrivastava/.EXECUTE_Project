import React, { useEffect, useState } from "react";
import Events from "../components/events/Events";

function EventPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/events/"); 
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      {events.length > 0 ? (
        events.map((event) => (
          <Events
            key={event.id}
            name={event.name}
            description={event.description}
            date={event.date}
            time={event.time}
            venue={event.venue}
          />
        ))
      ) : (
        <p className="text-gray-400 text-lg">Loading events...</p>
      )}
    </div>
  );
}

export default EventPage;
