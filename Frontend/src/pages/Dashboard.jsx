// // import React, { useState, useEffect } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   Calendar,
// //   Clock,
// //   Award,
// //   Bell,
// //   User,
// //   Users,
// //   CheckSquare,
// //   BarChart2,
// //   FileText,
// //   AlertTriangle,
// // } from "lucide-react";

// // // Modularized Components
// // const StatCard = ({ icon: Icon, title, value, color }) => (
// //   <motion.div
// //     className={`bg-gray-900 rounded-xl p-5 flex items-center transform hover:scale-105 transition-all duration-300 shadow-neumorphic ${color}`}
// //     whileHover={{ y: -5 }}
// //   >
// //     <div className="bg-gray-800 rounded-full p-3 mr-4">
// //       <Icon className="h-6 w-6 text-white" />
// //     </div>
// //     <div>
// //       <p className="text-gray-400 text-sm">{title}</p>
// //       <p className="text-3xl font-bold text-white">{value}</p>
// //     </div>
// //   </motion.div>
// // );

// // const EventCard = ({ event, onDetailsClick }) => (
// //   <motion.div
// //     className="flex items-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
// //     whileHover={{ scale: 1.02 }}
// //   >
// //     <div className="bg-purple-800 rounded-lg p-3 text-white mr-4 text-center min-w-[60px]">
// //       <div className="text-sm font-bold">
// //         {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
// //       </div>
// //       <div className="text-lg font-extrabold">
// //         {new Date(event.date).toLocaleDateString("en-US", { day: "numeric" })}
// //       </div>
// //     </div>
// //     <div className="flex-1">
// //       <h3 className="font-bold text-white">{event.name}</h3>
// //       <div className="text-sm text-gray-400 mt-1">
// //         <div className="flex items-center">
// //           <Clock className="h-4 w-4 mr-1" />
// //           <span>{event.time}</span>
// //         </div>
// //         <div className="flex items-center mt-1">
// //           <Users className="h-4 w-4 mr-1" />
// //           <span>{event.venue}</span>
// //         </div>
// //       </div>
// //     </div>
// //     <button
// //       onClick={() => onDetailsClick(event)}
// //       className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
// //     >
// //       Details
// //     </button>
// //   </motion.div>
// // );

// // const NotificationCard = ({ notif, onMarkAsRead }) => (
// //   <motion.div
// //     className={`flex items-center p-4 rounded-lg ${
// //       !notif.isRead ? "bg-purple-950" : "bg-gray-800"
// //     } hover:bg-gray-700 transition-colors`}
// //     onClick={() => onMarkAsRead(notif.id)}
// //     whileHover={{ scale: 1.02 }}
// //   >
// //     <div
// //       className={`rounded-full p-2 mr-3 ${
// //         !notif.isRead ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-400"
// //       }`}
// //     >
// //       <Bell className="h-5 w-5" />
// //     </div>
// //     <div className="flex-1">
// //       <p
// //         className={`text-sm ${
// //           !notif.isRead ? "font-bold text-white" : "text-gray-300"
// //         }`}
// //       >
// //         {notif.message}
// //       </p>
// //       <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
// //     </div>
// //     {!notif.isRead && (
// //       <button
// //         onClick={(e) => {
// //           e.stopPropagation();
// //           onMarkAsRead(notif.id);
// //         }}
// //         className="text-purple-400 hover:text-purple-300 text-sm"
// //       >
// //         Mark as read
// //       </button>
// //     )}
// //   </motion.div>
// // );

// // const Dashboard = () => {
// //   const [upcomingEvents, setUpcomingEvents] = useState([]);
// //   const [registeredEvents, setRegisteredEvents] = useState([]);
// //   const [notifications, setNotifications] = useState([]);
// //   const [quizScores, setQuizScores] = useState([]);
// //   const [activeTab, setActiveTab] = useState("overview");
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setUpcomingEvents([
// //         { id: 1, name: "Hackathon 2025", date: "2025-03-15", time: "09:00 AM", venue: "Tech Lab" },
// //         { id: 2, name: "Cultural Night", date: "2025-03-16", time: "06:00 PM", venue: "Auditorium" },
// //         { id: 3, name: "Coding Challenge", date: "2025-03-17", time: "10:00 AM", venue: "CS Building" },
// //       ]);
// //       setRegisteredEvents([
// //         { id: 1, name: "Hackathon 2025", status: "Confirmed", teamName: "Code Ninjas" },
// //         { id: 3, name: "Coding Challenge", status: "Pending", teamName: "Solo Participant" },
// //       ]);
// //       setNotifications([
// //         { id: 1, message: "Hackathon venue changed to Tech Lab", time: "2 hours ago", isRead: false },
// //         { id: 2, message: "Your team is confirmed for Hackathon 2025", time: "1 day ago", isRead: true },
// //         { id: 3, message: "Quiz results for Tech Trivia are out!", time: "2 days ago", isRead: true },
// //       ]);
// //       setQuizScores([
// //         { id: 1, name: "Tech Trivia", score: "85/100", rank: 7, date: "2025-03-05" },
// //         { id: 2, name: "Coding Quiz", score: "92/100", rank: 3, date: "2025-03-02" },
// //       ]);
// //       setLoading(false);
// //     }, 1000);
// //   }, []);

// //   const markAsRead = (id) => {
// //     setNotifications((prev) =>
// //       prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif))
// //     );
// //   };

// //   const unreadCount = notifications.filter((n) => !n.isRead).length;

// //   if (loading) {
// //     return (
// //       <div className="flex justify-center items-center h-screen bg-black">
// //         <motion.div
// //           className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-black text-white font-sans">
// //       {/* Header */}
// //       <header className="bg-gradient-to-r from-black to-purple-900 shadow-lg sticky top-0 z-10">
// //         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
// //           <motion.h1
// //             className="text-3xl font-extrabold tracking-wider"
// //             initial={{ x: -50, opacity: 0 }}
// //             animate={{ x: 0, opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             FestX Neon
// //           </motion.h1>
// //           <div className="flex items-center space-x-6">
// //             <motion.div
// //               className="relative"
// //               whileHover={{ scale: 1.1 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <Bell className="h-6 w-6 cursor-pointer hover:text-purple-400 transition-colors" />
// //               {unreadCount > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
// //                   {unreadCount}
// //                 </span>
// //               )}
// //             </motion.div>
// //             <motion.div
// //               className="flex items-center space-x-2 bg-purple-900 rounded-full p-1 pr-3"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <div className="bg-white rounded-full p-2">
// //                 <User className="h-5 w-5 text-black" />
// //               </div>
// //               <span className="font-medium">John Doe</span>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Main Content */}
// //       <main className="container mx-auto px-6 py-10">
// //         {/* Stats Overview */}
// //         <motion.div
// //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
// //           initial={{ opacity: 0, y: 50 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, staggerChildren: 0.1 }}
// //         >
// //           <StatCard icon={CheckSquare} title="Registered" value={registeredEvents.length} color="hover:shadow-purple-500/20" />
// //           <StatCard icon={Calendar} title="Upcoming" value={upcomingEvents.length} color="hover:shadow-purple-600/20" />
// //           <StatCard icon={Award} title="Quiz Scores" value={quizScores.length} color="hover:shadow-purple-700/20" />
// //           <StatCard icon={Bell} title="Alerts" value={notifications.length} color="hover:shadow-purple-800/20" />
// //         </motion.div>

// //         {/* Tabs */}
// //         <motion.div
// //           className="flex justify-center mb-8"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           <nav className="inline-flex bg-gray-900 rounded-full p-2 space-x-4 shadow-neumorphic">
// //             {["overview", "events", "quizzes", "notifications"].map((tab) => (
// //               <motion.button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide transition-all ${
// //                   activeTab === tab
// //                     ? "bg-purple-700 text-white shadow-inner"
// //                     : "text-gray-400 hover:text-white hover:bg-gray-800"
// //                 }`}
// //                 whileHover={{ scale: 1.05 }}
// //                 whileTap={{ scale: 0.95 }}
// //               >
// //                 {tab}
// //               </motion.button>
// //             ))}
// //           </nav>
// //         </motion.div>

// //         {/* Tab Content */}
// //         <AnimatePresence mode="wait">
// //           <motion.div
// //             key={activeTab}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.3 }}
// //             className="space-y-8"
// //           >
// //             {activeTab === "overview" && (
// //               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //                 {/* Upcoming Events */}
// //                 <div className="bg-gray-900 rounded-lg shadow-neumorphic">
// //                   <div className="px-6 py-4 border-b border-gray-800">
// //                     <h2 className="text-xl font-bold text-purple-400">Upcoming Events</h2>
// //                   </div>
// //                   <div className="p-6 space-y-4">
// //                     {upcomingEvents.length > 0 ? (
// //                       upcomingEvents.map((event) => (
// //                         <EventCard key={event.id} event={event} onDetailsClick={() => console.log(event)} />
// //                       ))
// //                     ) : (
// //                       <div className="text-center py-4 text-gray-400">No events on the horizon</div>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Recent Notifications */}
// //                 <div className="bg-gray-900 rounded-lg shadow-neumorphic">
// //                   <div className="px-6 py-4 border-b border-gray-800">
// //                     <h2 className="text-xl font-bold text-purple-400">Latest Alerts</h2>
// //                   </div>
// //                   <div className="p-6 space-y-4">
// //                     {notifications.length > 0 ? (
// //                       notifications.slice(0, 3).map((notif) => (
// //                         <NotificationCard key={notif.id} notif={notif} onMarkAsRead={markAsRead} />
// //                       ))
// //                     ) : (
// //                       <div className="text-center py-4 text-gray-400">All quiet for now</div>
// //                     )}
// //                     {notifications.length > 3 && (
// //                       <div className="mt-4 text-center">
// //                         <button
// //                           onClick={() => setActiveTab("notifications")}
// //                           className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
// //                         >
// //                           View All
// //                         </button>
// //                       </div>
// //                     )}
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {activeTab === "events" && (
// //               <div className="bg-gray-900 rounded-lg shadow-neumorphic">
// //                 <div className="px-6 py-4 border-b border-gray-800">
// //                   <h2 className="text-xl font-bold text-purple-400">My Events</h2>
// //                 </div>
// //                 <div className="p-6">
// //                   {registeredEvents.length > 0 ? (
// //                     <div className="overflow-x-auto">
// //                       <table className="min-w-full divide-y divide-gray-800">
// //                         <thead className="bg-gray-800">
// //                           <tr>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Event</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Team</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody className="divide-y divide-gray-800">
// //                           {registeredEvents.map((event) => (
// //                             <tr key={event.id} className="hover:bg-gray-800 transition-colors">
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{event.name}</td>
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{event.teamName}</td>
// //                               <td className="px-6 py-4 whitespace-nowrap">
// //                                 <span
// //                                   className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                                     event.status === "Confirmed" ? "bg-purple-700 text-white" : "bg-gray-700 text-gray-300"
// //                                   }`}
// //                                 >
// //                                   {event.status}
// //                                 </span>
// //                               </td>
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                                 <button className="text-purple-400 hover:text-purple-300 mr-4">Details</button>
// //                                 <button className="text-gray-400 hover:text-white">Cancel</button>
// //                               </td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   ) : (
// //                     <div className="text-center py-4 text-gray-400">No events registered yet</div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}

// //             {activeTab === "quizzes" && (
// //               <div className="bg-gray-900 rounded-lg shadow-neumorphic">
// //                 <div className="px-6 py-4 border-b border-gray-800">
// //                   <h2 className="text-xl font-bold text-purple-400">Quiz Scores</h2>
// //                 </div>
// //                 <div className="p-6">
// //                   {quizScores.length > 0 ? (
// //                     <div className="overflow-x-auto">
// //                       <table className="min-w-full divide-y divide-gray-800">
// //                         <thead className="bg-gray-800">
// //                           <tr>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Quiz</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Score</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
// //                             <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
// //                           </tr>
// //                         </thead>
// //                         <tbody className="divide-y divide-gray-800">
// //                           {quizScores.map((quiz) => (
// //                             <tr key={quiz.id} className="hover:bg-gray-800 transition-colors">
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{quiz.name}</td>
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{quiz.score}</td>
// //                               <td className="px-6 py-4 whitespace-nowrap">
// //                                 <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-700 text-white">
// //                                   #{quiz.rank}
// //                                 </span>
// //                               </td>
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(quiz.date).toLocaleDateString()}</td>
// //                               <td className="px-6 py-4 whitespace-nowrap text-sm">
// //                                 <button className="text-purple-400 hover:text-purple-300">Details</button>
// //                               </td>
// //                             </tr>
// //                           ))}
// //                         </tbody>
// //                       </table>
// //                     </div>
// //                   ) : (
// //                     <div className="text-center py-4 text-gray-400">No quiz scores yet</div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}

// //             {activeTab === "notifications" && (
// //               <div className="bg-gray-900 rounded-lg shadow-neumorphic">
// //                 <div className="px-6 py-4 border-b border-gray-800">
// //                   <h2 className="text-xl font-bold text-purple-400">All Alerts</h2>
// //                 </div>
// //                 <div className="p-6 space-y-4">
// //                   {notifications.length > 0 ? (
// //                     notifications.map((notif) => (
// //                       <NotificationCard key={notif.id} notif={notif} onMarkAsRead={markAsRead} />
// //                     ))
// //                   ) : (
// //                     <div className="text-center py-4 text-gray-400">No alerts to show</div>
// //                   )}
// //                 </div>
// //               </div>
// //             )}
// //           </motion.div>
// //         </AnimatePresence>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-gray-900 border-t border-gray-800">
// //         <div className="container mx-auto px-6 py-6">
// //           <p className="text-center text-gray-400 text-sm">
// //             © 2025 FestX Neon - Powered by the Night. All rights reserved.
// //           </p>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardHeader from "../components/DashboardHeader";
import StatCard from "../components/StatCard";
import TabNavigation from "../components/TabNavigation";
import EventList from "../components/EventList";
import NotificationList from "../components/NotificationList";
import QuizList from "../components/QuizList";
import LoadingSpinner from "../components/LoadingSpinner";
import {
  CheckSquare,
  Calendar,
  Award,
  Bell,
} from "lucide-react";

const Dashboard = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [quizScores, setQuizScores] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setUpcomingEvents([
        { id: 1, name: "Hackathon 2025", date: "2025-03-15", time: "09:00 AM", venue: "Tech Lab" },
        { id: 2, name: "Cultural Night", date: "2025-03-16", time: "06:00 PM", venue: "Auditorium" },
        { id: 3, name: "Coding Challenge", date: "2025-03-17", time: "10:00 AM", venue: "CS Building" },
      ]);
      setRegisteredEvents([
        { id: 1, name: "Hackathon 2025", status: "Confirmed", teamName: "Code Ninjas" },
        { id: 3, name: "Coding Challenge", status: "Pending", teamName: "Solo Participant" },
      ]);
      setNotifications([
        { id: 1, message: "Hackathon venue changed to Tech Lab", time: "2 hours ago", isRead: false },
        { id: 2, message: "Your team is confirmed for Hackathon 2025", time: "1 day ago", isRead: true },
        { id: 3, message: "Quiz results for Tech Trivia are out!", time: "2 days ago", isRead: true },
      ]);
      setQuizScores([
        { id: 1, name: "Tech Trivia", score: "85/100", rank: 7, date: "2025-03-05" },
        { id: 2, name: "Coding Quiz", score: "92/100", rank: 3, date: "2025-03-02" },
      ]);
      setLoading(false);
    }, 1000);
    fetch('http://localhost:3000/api/events')
    .then(res => {
      console.log(res);
      if(res.statusText == 'OK') {
        return res.json();
      } else throw new Error('vansh ka code galat hai');
    }).then(res => {
      if(res) {
        console.log(res);
        
      }
    }).catch(err => console.log(err));
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif))
    );
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  if (loading) {
    return <LoadingSpinner />;
  }

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
          <StatCard icon={CheckSquare} title="Registered" value={registeredEvents.length} color="hover:shadow-purple-500/20" />
          <StatCard icon={Calendar} title="Upcoming" value={upcomingEvents.length} color="hover:shadow-purple-600/20" />
          <StatCard icon={Award} title="Quiz Scores" value={quizScores.length} color="hover:shadow-purple-700/20" />
          <StatCard icon={Bell} title="Alerts" value={notifications.length} color="hover:shadow-purple-800/20" />
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
                <NotificationList notifications={notifications.slice(0, 3)} onMarkAsRead={markAsRead} title="Latest Alerts" showViewAll={notifications.length > 3} setActiveTab={setActiveTab} />
              </div>
            )}
            {activeTab === "events" && <EventList events={registeredEvents} title="My Events" isRegistered />}
            {activeTab === "quizzes" && <QuizList quizzes={quizScores} />}
            {activeTab === "notifications" && <NotificationList notifications={notifications} onMarkAsRead={markAsRead} title="All Alerts" />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="bg-gray-900 border-t border-gray-800 absolute bottom-0 w-full">
        <div className="container mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 FestX Neon - Powered by the Night. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;