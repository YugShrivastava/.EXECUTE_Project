// components/DashboardHeader.jsx
import React from "react";
import { motion } from "framer-motion";
import { Bell, User } from "lucide-react";

const DashboardHeader = ({ unreadCount, name }) => (
  <header className="bg-gradient-to-r from-black to-purple-900 shadow-lg sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <motion.h1
        className="text-3xl font-extrabold tracking-wider"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Festify
      </motion.h1>
      <div className="flex items-center space-x-6">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Bell className="h-6 w-6 cursor-pointer hover:text-purple-400 transition-colors" />
          {unreadCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {unreadCount}
            </span>
          )}
        </motion.div>
        <motion.div
          className="flex items-center space-x-2 bg-purple-900 rounded-full p-1 pr-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className="bg-white rounded-full p-2">
            <User className="h-5 w-5 text-black" />
          </div>
          <span className="font-medium">{name}</span>

        </motion.div>
      </div>
    </div>
  </header>
);

export default DashboardHeader;