import React from "react";

const ModerationPanel = ({ events }) => {
  const pendingParticipants = events.flatMap(event =>
    event.registeredParticipants.filter(p => p.status === "pending").map(p => ({ ...p, eventName: event.name }))
  );

  const handleApprove = (userId, eventName) => {
    console.log(`Approve ${userId} for ${eventName}`);
    // Implement API call to update participant status
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Moderation Panel</h2>
      {pendingParticipants.length > 0 ? (
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Event</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">User ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {pendingParticipants.map((participant, index) => (
              <tr key={index} className="hover:bg-gray-800 transition-colors">
                <td className="px-6 py-4 text-sm text-white">{participant.eventName}</td>
                <td className="px-6 py-4 text-sm text-white">{participant.userId}</td>
                <td className="px-6 py-4 text-sm text-white">{participant.role}</td>
                <td className="px-6 py-4 text-sm">
                  <button
                    onClick={() => handleApprove(participant.userId, participant.eventName)}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-400 text-center">No pending approvals</p>
      )}
    </div>
  );
};

export default ModerationPanel;