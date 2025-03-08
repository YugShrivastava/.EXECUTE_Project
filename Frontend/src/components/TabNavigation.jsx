// frontend/src/components/TabNavigation.jsx
import React from "react";
import { motion } from "framer-motion";

const TabNavigation = ({ activeTab, setActiveTab, tabs = ["overview", "events", "quizzes", "notifications"] }) => (
  <motion.div
    className="flex justify-center mb-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <nav className="inline-flex bg-gray-900 rounded-full p-2 space-x-4 shadow-neumorphic">
      {tabs.map((tab) => (
        <motion.button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-full font-medium text-sm uppercase tracking-wide transition-all ${
            activeTab === tab
              ? "bg-purple-700 text-white shadow-inner"
              : "text-gray-400 hover:text-white hover:bg-gray-800"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {tab.replace(/([A-Z])/g, " $1").trim()} {/* Convert camelCase to readable text */}
        </motion.button>
      ))}
    </nav>
  </motion.div>
);

export default TabNavigation;