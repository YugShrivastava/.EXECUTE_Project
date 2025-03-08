// components/LoadingSpinner.jsx
import React from "react";
import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen bg-black">
    <motion.div
      className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  </div>
);

export default LoadingSpinner;