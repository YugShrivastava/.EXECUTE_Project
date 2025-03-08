// frontend/src/pages/OrganizerDashboard.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import TabNavigation from "../components/TabNavigation";
import EventList from "../components/EventList";
import EventCreationForm from "../components/EventCreationForm";
import QuizCreationForm from "../components/QuizCreationForm";
import ModerationPanel from "../components/ModerationPanel";
import AnalyticsPlaceholder from "../components/AnalyticsPlaceholder";
import { Calendar, Users, Award, AlertTriangle } from "lucide-react";

const OrganizerDashboard = () => {
  const [organizedEvents, setOrganizedEvents] = useState([]);
  const [activeTab, setActiveTab] = useState("events");

  useEffect(() => {
    // Mock data for organized events
    const mockEvents = [
      {
        id: 1,
        name: "Hackathon 2025",
        date: "2025-03-15",
        time: "09:00 AM",
        venue: "Tech Lab",
        status: "Upcoming",
        registeredParticipants: [
          { userId: "user1", role: "team leader", status: "pending" },
          { userId: "user2", role: "participant", status: "confirmed" },
        ],
      },
      {
        id: 2,
        name: "CodeFest 2025",
        date: "2025-04-10",
        time: "10:00 AM",
        venue: "Main Hall",
        status: "Live",
        registeredParticipants: [
          { userId: "user3", role: "participant", status: "confirmed" },
          { userId: "user4", role: "team leader", status: "pending" },
          { userId: "user5", role: "participant", status: "pending" },
        ],
      },
    ];

    setOrganizedEvents(mockEvents);
  }, []);

  const handleEventCreated = (newEvent) => {
    // Mock event creation by adding to the state
    setOrganizedEvents((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newEvent,
        status: "Upcoming",
        registeredParticipants: [],
      },
    ]);
  };

  const unreadCount = 0; // Placeholder since notifications are not implemented for organizers

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <DashboardHeader unreadCount={unreadCount} />
      <main className="container mx-auto px-6 py-10">
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
            value={organizedEvents.reduce((acc, event) => acc + event.registeredParticipants.length, 0)}
            color="hover:shadow-purple-600/20"
          />
          <StatCard
            icon={Award}
            title="Quizzes Created"
            value={2} // Mock value
            color="hover:shadow-purple-700/20"
          />
          <StatCard
            icon={AlertTriangle}
            title="Pending Approvals"
            value={organizedEvents.reduce(
              (acc, event) => acc + event.registeredParticipants.filter((p) => p.status === "pending").length,
              0
            )}
            color="hover:shadow-purple-800/20"
          />
        </motion.div>

        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["events", "createEvent", "createQuiz", "moderation", "analytics"]}
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
                isRegistered={false}
                onDetailsClick={(event) => console.log("Event Details:", event)}
              />
            )}
            {activeTab === "createEvent" && <EventCreationForm onEventCreated={handleEventCreated} />}
            {activeTab === "createQuiz" && <QuizCreationForm />}
            {activeTab === "moderation" && <ModerationPanel events={organizedEvents} />}
            {activeTab === "analytics" && <AnalyticsPlaceholder />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 FestX Neon - Powered by the Night. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default OrganizerDashboard;