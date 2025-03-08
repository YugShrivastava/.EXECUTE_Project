// components/StatCard.jsx
import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, title, value, color }) => (
  <motion.div
    className={`bg-gray-900 rounded-xl p-5 flex items-center transform hover:scale-105 transition-all duration-300 shadow-neumorphic ${color}`}
    whileHover={{ y: -5 }}
  >
    <div className="bg-gray-800 rounded-full p-3 mr-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  </motion.div>
);

export default StatCard;