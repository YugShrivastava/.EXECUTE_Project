import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardHeader from "./DashboardHeader";
import StatCard from "./StatCard";
import TabNavigation from "./TabNavigation";
import EventList from "./EventList";
import NotificationList from "./NotificationList";
import QuizList from "./QuizList";
import Feedback from "../pages/Feedback";
import LoadingSpinner from "./LoadingSpinner";
import { CheckSquare, Calendar, Award, Bell, MessageSquare } from "lucide-react";

const Dashboard = ({ user }) => {
  const [allEvents, setAllEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [quizScores, setQuizScores] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const userId = user._id; // Assuming user._id is available; adjust if necessary

        // Fetch Dashboard Data
        const dashboardResponse = await fetch(
          `http://localhost:3000/api/users/dashboard/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!dashboardResponse.ok) {
          throw new Error("Failed to fetch dashboard data");
        }

        const dashboardData = await dashboardResponse.json();
        console.log("Dashboard Data:", dashboardData);

        // Set Registered Events
        setRegisteredEvents(
          dashboardData.registeredEvents.map((event) => ({
            id: event.id,
            name: event.name,
            status: event.status,
            teamName:
              event.role === "team_leader" ? "Team Leader" : "Participant",
          }))
        );

        // Fetch All Events for Upcoming Events
        const eventsResponse = await fetch("http://localhost:3000/api/events", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!eventsResponse.ok) {
          throw new Error("Failed to fetch events data");
        }

        const eventsData = await eventsResponse.json();
        console.log("Events Data:", eventsData);

        // Set Upcoming Events (filtering future events)
        const currentDate = new Date();
        setUpcomingEvents(
          eventsData
            .filter((event) => new Date(event.date) > currentDate)
            .map((event) => ({
              id: event._id,
              name: event.name,
              date: event.date,
              time: event.time, // Now available from /events
              venue: event.venue, // Now available from /events
            }))
        );

        // Set Quiz Scores
        setQuizScores(
          dashboardData.quizScores.map((quiz) => ({
            id: quiz.id,
            name: quiz.title,
            score: `${quiz.score}/${quiz.maxScore}`,
            rank: "N/A", // Rank not provided in backend
            date: quiz.date || new Date().toISOString(), // Fallback date
          }))
        );

        // Set Notifications (mocked from event descriptions)
        const mockNotifications = dashboardData.registeredEvents.flatMap(
          (event) =>
            event.description
              ? [
                  {
                    id: event.id,
                    message: `Update for ${event.name}: ${event.description}`,
                    time: new Date(event.date).toLocaleTimeString(),
                    isRead: event.status === "confirmed",
                  },
                ]
              : []
        );
        setNotifications(mockNotifications);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false); // Stop loading even on error
      }
    };

    fetchDashboardData();
  }, [user]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  if (loading) {
    return <LoadingSpinner />;
  }

  // Add the new Feedback icon to the stats cards
  const statCards = [
    {
      icon: CheckSquare,
      title: "Registered",
      value: registeredEvents.length,
      color: "hover:shadow-purple-500/20",
    },
    {
      icon: Calendar,
      title: "Upcoming",
      value: upcomingEvents.length,
      color: "hover:shadow-purple-600/20",
    },
    {
      icon: Award,
      title: "Quiz Scores",
      value: quizScores.length,
      color: "hover:shadow-purple-700/20",
    },
    {
      icon: Bell,
      title: "Alerts",
      value: notifications.length,
      color: "hover:shadow-purple-800/20",
    },
    {
      icon: MessageSquare,
      title: "Feedbacks",
      value: 0, // This would be updated with actual feedback count when available
      color: "hover:shadow-purple-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <DashboardHeader name={user.name} unreadCount={unreadCount} />
      <main className="container mx-auto px-6 py-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {statCards.map((card, index) => (
            <StatCard
              key={index}
              icon={card.icon}
              title={card.title}
              value={card.value}
              color={card.color}
            />
          ))}
        </motion.div>

        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <EventList events={upcomingEvents} title="Upcoming Events" />
                <NotificationList
                  notifications={notifications.slice(0, 3)}
                  onMarkAsRead={markAsRead}
                  title="Latest Alerts"
                  showViewAll={notifications.length > 3}
                  setActiveTab={setActiveTab}
                />
              </div>
            )}
            {activeTab === "events" && (
              <EventList
                events={registeredEvents}
                title="My Events"
                isRegistered
              />
            )}
            {activeTab === "quizzes" && <QuizList quizzes={quizScores} />}
            {activeTab === "notifications" && (
              <NotificationList
                notifications={notifications}
                onMarkAsRead={markAsRead}
                title="All Alerts"
              />
            )}
            {activeTab === "feedback" && <Feedback  />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 relative bottom-0 w-full">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Festify - Powered by the College Management. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;