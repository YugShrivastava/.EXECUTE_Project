// // frontend/src/components/QuizCreationForm.jsx
// import React, { useState } from "react";

// const QuizCreationForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     date: "",
//   });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Placeholder for quiz creation logic (API call to be added later)
//     setSuccess("Quiz creation placeholder - API not implemented yet.");
//     setError(null);
//     console.log("Quiz Data:", formData);
//     setFormData({ name: "", description: "", date: "" });
//   };

//   return (
//     <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
//       <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Quiz</h2>
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       {success && <p className="text-green-500 mb-4">{success}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-gray-400 mb-1">Quiz Name</label>
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
//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
//         >
//           Create Quiz
//         </button>
//       </form>
//     </div>
//   );
// };

// export default QuizCreationForm;

// frontend/src/components/QuizCreationForm.jsx
import React, { useState } from "react";

const QuizCreationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock quiz creation logic
    setSuccess("Quiz created successfully (mock)!");
    setError(null);
    console.log("Mock Quiz Data:", formData);
    setFormData({ name: "", description: "", date: "" });
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-neumorphic p-6">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Quiz</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400 mb-1">Quiz Name</label>
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
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizCreationForm;