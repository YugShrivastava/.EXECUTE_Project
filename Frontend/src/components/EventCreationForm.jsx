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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);

    try {
      // Call the callback function passed from the parent component
      await onEventCreated(formData);
      
      setSuccess("Event created successfully!");
      
      // Reset form
      setFormData({
        name: "",
        description: "",
        date: "",
        time: "",
        venue: "",
        category: "Technical",
        maxParticipants: 1,
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err) {
      console.error("Error creating event:", err);
      setError("Failed to create event. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-neumorphic">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Event</h2>

      
      {error && (
        <div className="bg-red-900/50 border border-red-500 text-white p-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-900/50 border border-green-500 text-white p-3 rounded mb-4">
          {success}
        </div>
      )}
      
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

            className="w-full p-2 bg-gray-800 text-white rounded-lg"
            rows="3"
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

          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <span className="animate-spin h-4 w-4 mr-2 border-t-2 border-b-2 border-white rounded-full"></span>
              Creating...
            </span>
          ) : (
            "Create Event"
          )}
        </button>
      </form>
    </div>
  );
};

export default EventCreationForm;