import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import TabNavigation from "../components/TabNavigation";
import EventList from "../components/EventList";
import EventCreationForm from "../components/EventCreationForm";
import QuizCreationForm from "../components/QuizCreationForm";
import ModerationPanel from "../components/ModerationPanel";
import AnalyticsPlaceholder from "../components/AnalyticsPlaceholder";
import { Calendar, Users, Award, AlertTriangle, User } from "lucide-react";

const OrganizerDashboard = ({ user }) => { // Adjusted prop destructuring
  const [organizedEvents, setOrganizedEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("events");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Added loading state
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchOrganizerData = async () => {
      try {
        const userId = user._id; // Assuming user._id is available
        const response = await fetch(`http://localhost:3000/api/users/dashboard/${userId}`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch organizer data");
        }

        const data = await response.json();
        console.log("Organizer Data:", data);

        // Map createdEvents to match the expected structure
        const eventsResponse = await fetch("http://localhost:3000/api/events", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!eventsResponse.ok) {
          throw new Error("Failed to fetch events data");
        }

        const allEvents = await eventsResponse.json();
        const organizerEvents = allEvents.filter(event => 
          event.organizer.toString() === userId
        ).map(event => ({
          id: event._id,
          name: event.name,
          date: event.date,
          time: event.time,
          venue: event.venue,
          status: event.isLive ? "Live" : new Date(event.date) > new Date() ? "Upcoming" : "Past",
          registeredParticipants: event.registeredParticipants || [],
        }));

        setOrganizedEvents(organizerEvents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching organizer data:", error);
        setLoading(false);
        navigate("/"); // Redirect on error (e.g., invalid token)
      }
    };

    fetchOrganizerData();
  }, [user, navigate]);

  const handleEventCreated = async (newEvent) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch("http://localhost:3000/api/events/create", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newEvent,
          organizer: user._id, // Add organizer ID from user prop
          registeredParticipants: [], // Initialize empty participants
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const createdEvent = await response.json();
      setOrganizedEvents((prev) => [
        ...prev,
        {
          id: createdEvent.event._id,
          name: createdEvent.event.name,
          date: createdEvent.event.date,
          time: createdEvent.event.time,
          venue: createdEvent.event.venue,
          status: "Upcoming",
          registeredParticipants: createdEvent.event.registeredParticipants || [],
        },
      ]);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  const unreadCount = 0; // Placeholder; implement notifications if needed

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Updated to match token name
    navigate("/");
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black">
        <motion.div
          className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <DashboardHeader unreadCount={unreadCount} name = {user.name} />
      <main className="container mx-auto px-6 py-10 flex-1 overflow-y-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          <StatCard
            icon={Calendar}
            title="Events Organized"
            value={organizedEvents.length}
            color="hover:shadow-purple-500/20"
          />
          <StatCard
            icon={Users}
            title="Total Participants"
            value={organizedEvents.reduce(
              (acc, event) => acc + event.registeredParticipants.length,
              0
            )}
            color="hover:shadow-purple-600/20"
          />
          <StatCard
            icon={Award}
            title="Quizzes Created"
            value={0} // Placeholder; fetch quiz data if implemented
            color="hover:shadow-purple-700/20"
          />
          <StatCard
            icon={AlertTriangle}
            title="Pending Approvals"
            value={organizedEvents.reduce(
              (acc, event) =>
                acc +
                event.registeredParticipants.filter(
                  (p) => p.status === "pending"
                ).length,
              0
            )}
            color="hover:shadow-purple-800/20"
          />
        </motion.div>
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={[
            "events",
            "createEvent",
            "createQuiz",
            "moderation",
            "analytics",
          ]}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {activeTab === "events" && (
              <EventList
                events={organizedEvents}
                title="Your Organized Events"
                isRegistered={true}
                onDetailsClick={(event) => console.log("Event Details:", event)}
              />
            )}
            {activeTab === "createEvent" && (
              <EventCreationForm onEventCreated={handleEventCreated} />
            )}
            {activeTab === "createQuiz" && <QuizCreationForm />}
            {activeTab === "moderation" && (
              <ModerationPanel events={organizedEvents} />
            )}
            {activeTab === "analytics" && <AnalyticsPlaceholder />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Festify - Powered by the College Management. All rights reserved.
          </p>
        </div>
      </footer>

      <div className="absolute top-5 right-5 flex items-center">
        <button
          onClick={toggleProfileMenu}
          className="p-2 bg-purple-600 text-white rounded-full"
        >
          <User size={24} />
        </button>

        {profileMenuOpen && (
          <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-md shadow-lg">
            <div className="p-4">
              <p className="font-semibold">User Profile</p>
              <p className="text-sm text-gray-400">{user.name || "Organizer"}</p> {/* Display user name */}
            </div>
            <div className="border-t border-gray-700">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-700"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizerDashboard;