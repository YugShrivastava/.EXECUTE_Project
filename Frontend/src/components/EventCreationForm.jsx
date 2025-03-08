// // frontend/src/components/EventCreationForm.jsx
// import React, { useState } from "react";
// import axios from "axios";

// const API_BASE_URL = "http://localhost:3000/api";

// const EventCreationForm = ({ onEventCreated }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     date: "",
//     time: "",
//     venue: "",
//     category: "Technical",
//     maxParticipants: 1,
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       const config = { headers: { Authorization: `Bearer ${token}` } };
//       await axios.post(`${API_BASE_URL}/events/create`, formData, config);
//       setSuccess("Event created successfully!");
//       setError(null);
//       setFormData({
//         name: "",
//         description: "",
//         date: "",
//         time: "",
//         venue: "",
//         category: "Technical",
//         maxParticipants: 1,
//       });
//       onEventCreated();
//     } catch (err) {
//       console.error("Error creating event:", err);
//       setError("Failed to create event. Please try again.");
//       setSuccess(null);
//     }
//   };

//   return (
//     <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
//       <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Event</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       {success && <p className="text-green-500 mb-4">{success}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-400 mb-1">Event Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Description</label>
//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Date</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Time</label>
//           <input
//             type="text"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             placeholder="e.g., 09:00 AM"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Venue</label>
//           <input
//             type="text"
//             name="venue"
//             value={formData.venue}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             required
//           />
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//           >
//             <option value="Technical">Technical</option>
//             <option value="Cultural">Cultural</option>
//             <option value="Sports">Sports</option>
//             <option value="Workshop">Workshop</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label className="block text-gray-400 mb-1">Max Participants</label>
//           <input
//             type="number"
//             name="maxParticipants"
//             value={formData.maxParticipants}
//             onChange={handleChange}
//             className="w-full p-2 bg-gray-800 text-white rounded-lg"
//             min="1"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
//         >
//           Create Event
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EventCreationForm;

// frontend/src/components/EventCreationForm.jsx
import React, { useState } from "react";

const EventCreationForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    venue: "",
    category: "Technical",
    maxParticipants: 1,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Mock event creation
      onEventCreated(formData);
      setSuccess("Event created successfully (mock)!");
      setError(null);
      setFormData({
        name: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        category: "Technical",
        maxParticipants: 1,
      });
    } catch (err) {
      console.error("Mock error creating event:", err);
      setError("Failed to create event (mock error).");
      setSuccess(null);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Event</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-1">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Time</label>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            placeholder="e.g., 09:00 AM"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
          >
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Max Participants</label>
          <input
            type="number"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventCreationForm;