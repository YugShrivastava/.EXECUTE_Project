// // frontend/src/components/ModerationPanel.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api";

// const ModerationPanel = ({ events }) => {
//   const [selectedEvent, setSelectedEvent] = useState(null);

//   const handleApprove = async (eventId, userId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = { headers: { Authorization: `Bearer ${token}` } };
//       await axios.put(
//         `${API_BASE_URL}/events/edit/${eventId}`,
//         {
//           registeredParticipants: events
//             .find((e) => e.id === eventId)
//             .registeredParticipants.map((p) =>
//               p.userId === userId ? { ...p, status: "confirmed" } : p
//             ),
//         },
//         config
//       );
//       alert("Participant approved!");
//       // Refresh events (this could be optimized with local state update)
//       window.location.reload();
//     } catch (err) {
//       console.error("Error approving participant:", err);
//       alert("Failed to approve participant.");
//     }
//   };

//   const handleReject = async (eventId, userId) => {
//     try {
//       const token = localStorage.getItem("token");
//       const config = { headers: { Authorization: `Bearer ${token}` } };
//       await axios.put(
//         `${API_BASE_URL}/events/edit/${eventId}`,
//         {
//           registeredParticipants: events
//             .find((e) => e.id === eventId)
//             .registeredParticipants.filter((p) => p.userId !== userId),
//         },
//         config
//       );
//       alert("Participant rejected!");
//       window.location.reload();
//     } catch (err) {
//       console.error("Error rejecting participant:", err);
//       alert("Failed to reject participant.");
//     }
//   };

//   return (
//     <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
//       <h2 className="text-xl font-bold text-purple-400 mb-4">Moderation Panel</h2>
//       <div className="mb-4">
//         <label className="block text-gray-400 mb-2">Select Event</label>
//         <select
//           value={selectedEvent || ""}
//           onChange={(e) => setSelectedEvent(e.target.value)}
//           className="w-full p-2 bg-gray-800 text-white rounded-lg"
//         >
//           <option value="">Select an event</option>
//           {events.map((event) => (
//             <option key={event.id} value={event.id}>
//               {event.name}
//             </option>
//           ))}
//         </select>
//       </div>
//       {selectedEvent && (
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-800">
//             <thead className="bg-gray-800">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Participant ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Role
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-800">
//               {events
//                 .find((e) => e.id === selectedEvent)
//                 .registeredParticipants.map((participant) => (
//                   <tr key={participant.userId} className="hover:bg-gray-800 transition-colors">
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
//                       {participant.userId}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
//                       {participant.role}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span
//                         className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                           participant.status === "confirmed"
//                             ? "bg-purple-700 text-white"
//                             : "bg-gray-700 text-gray-300"
//                         }`}
//                       >
//                         {participant.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       {participant.status === "pending" && (
//                         <>
//                           <button
//                             onClick={() => handleApprove(selectedEvent, participant.userId)}
//                             className="text-purple-400 hover:text-purple-300 mr-4"
//                           >
//                             Approve
//                           </button>
//                           <button
//                             onClick={() => handleReject(selectedEvent, participant.userId)}
//                             className="text-red-400 hover:text-red-300"
//                           >
//                             Reject
//                           </button>
//                         </>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ModerationPanel;

// frontend/src/components/ModerationPanel.jsx
import React, { useState } from "react";

const ModerationPanel = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleApprove = (eventId, userId) => {
    setOrganizedEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              registeredParticipants: event.registeredParticipants.map((p) =>
                p.userId === userId ? { ...p, status: "confirmed" } : p
              ),
            }
          : event
      )
    );
    alert("Participant approved (mock)!");
  };

  const handleReject = (eventId, userId) => {
    setOrganizedEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              registeredParticipants: event.registeredParticipants.filter((p) => p.userId !== userId),
            }
          : event
      )
    );
    alert("Participant rejected (mock)!");
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Moderation Panel</h2>
      <div className="mb-4">
        <label className="block text-gray-400 mb-2">Select Event</label>
        <select
          value={selectedEvent || ""}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="w-full p-2 bg-gray-800 text-white rounded-lg"
        >
          <option value="">Select an event</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>
      {selectedEvent && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Participant ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {events
                .find((e) => e.id === selectedEvent)
                .registeredParticipants.map((participant) => (
                  <tr key={participant.userId} className="hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {participant.userId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {participant.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          participant.status === "confirmed"
                            ? "bg-purple-700 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}
                      >
                        {participant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {participant.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleApprove(selectedEvent, participant.userId)}
                            className="text-purple-400 hover:text-purple-300 mr-4"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(selectedEvent, participant.userId)}
                            className="text-red-400 hover:text-red-300"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Since this is mock data, we define a local state setter here for simplicity
let setOrganizedEvents = () => {};

ModerationPanel.setOrganizedEvents = (setter) => {
  setOrganizedEvents = setter;
};

export default ModerationPanel;