import React, { useEffect, useState } from "react";
import EventList from "../components/events/EventList";
import EventCreationForm from "../components/events/EventCreationForm";

function EventPage() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/api/events/");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
      setError(null);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError("Failed to load events. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleEventCreated = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/api/events/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          organizer: localStorage.getItem("userId") || "6405e8ecb0234567891234", // Fallback to a default ID
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const data = await response.json();
      setEvents([...events, data.event]);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const handleRegister = async (eventId) => {
    const userId = localStorage.getItem("userId") || "6405e8ecb0234567891234"; // Fallback to a default ID
    
    try {
      // Add registration logic here
      alert(`Registration for event ${eventId} will be implemented soon!`);
      
      // After registration, refresh events
      fetchEvents();
    } catch (error) {
      console.error("Error registering for event:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          {error && <div className="bg-red-900 text-white p-4 rounded mb-6">{error}</div>}
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          ) : (
            <EventList 
              events={events} 
              title="Upcoming Events" 
              isRegistered={false}
              onRegister={handleRegister}
            />
          )}
        </div>
        
        <div>
          <EventCreationForm onEventCreated={handleEventCreated} />
        </div>
      </div>
    </div>
  );
}

export default EventPage;