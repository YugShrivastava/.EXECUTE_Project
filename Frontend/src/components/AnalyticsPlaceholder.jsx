// // frontend/src/components/AnalyticsPlaceholder.jsx
// import React from "react";

// const AnalyticsPlaceholder = () => (
//   <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
//     <h2 className="text-xl font-bold text-purple-400 mb-4">Analytics</h2>
//     <p className="text-gray-400">
//       Analytics coming soon! This section will display insights such as participant engagement,
//       event attendance trends, and quiz performance metrics.
//     </p>
//   </div>
// );

// export default AnalyticsPlaceholder;

// frontend/src/components/AnalyticsPlaceholder.jsx
import React from "react";

const AnalyticsPlaceholder = () => (
  <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
    <h2 className="text-xl font-bold text-purple-400 mb-4">Analytics</h2>
    <p className="text-gray-400 mb-4">
      Mock Analytics Data:
    </p>
    <ul className="space-y-2 text-gray-300">
      <li>Total Events Organized: 2</li>
      <li>Total Participants: 5</li>
      <li>Average Attendance Rate: 85%</li>
      <li>Most Popular Event: Hackathon 2025</li>
    </ul>
  </div>
);

export default AnalyticsPlaceholder;