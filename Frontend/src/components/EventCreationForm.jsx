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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEventCreated(formData);
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      venue: "",
      category: "Technical",
      maxParticipants: 1,
    });
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-neumorphic">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400">Event Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Venue</label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-400">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
          >
            <option value="Technical">Technical</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Workshop">Workshop</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-400">Max Participants</label>
          <input
            type="number"
            name="maxParticipants"
            value={formData.maxParticipants}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            min="1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventCreationForm;