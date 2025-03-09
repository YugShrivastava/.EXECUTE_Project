import React, { useState } from "react";

const QuizCreationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    maxScore: "",
    questions: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
  });

  const handleChange = (e, index) => {
    if (index !== undefined) {
      const newQuestions = [...formData.questions];
      if (e.target.name.startsWith("option")) {
        const optionIndex = parseInt(e.target.name.split("-")[1]);
        newQuestions[index].options[optionIndex] = e.target.value;
      } else {
        newQuestions[index][e.target.name] = e.target.value;
      }
      setFormData({ ...formData, questions: newQuestions });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addQuestion = () => {
    setFormData({
      ...formData,
      questions: [...formData.questions, { question: "", options: ["", "", "", ""], correctAnswer: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    try {
      const response = await fetch("http://localhost:3000/api/quizzes/create", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, organizer: localStorage.getItem("userId") }), // Assuming userId is stored
      });

      if (!response.ok) throw new Error("Failed to create quiz");
      alert("Quiz created successfully!");
      setFormData({
        title: "",
        description: "",
        maxScore: "",
        questions: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
      });
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-neumorphic">
      <h2 className="text-xl font-bold text-purple-400 mb-4">Create New Quiz</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-400">Quiz Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
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
          <label className="block text-gray-400">Max Score</label>
          <input
            type="number"
            name="maxScore"
            value={formData.maxScore}
            onChange={handleChange}
            className="w-full p-2 bg-gray-800 text-white rounded"
            required
          />
        </div>
        {formData.questions.map((q, index) => (
          <div key={index} className="space-y-2 border-t border-gray-800 pt-4">
            <label className="block text-gray-400">Question {index + 1}</label>
            <input
              type="text"
              name="question"
              value={q.question}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 bg-gray-800 text-white rounded"
              required
            />
            {q.options.map((opt, optIndex) => (
              <input
                key={optIndex}
                type="text"
                name={`option-${optIndex}`}
                value={opt}
                onChange={(e) => handleChange(e, index)}
                className="w-full p-2 bg-gray-800 text-white rounded mt-2"
                placeholder={`Option ${optIndex + 1}`}
                required
              />
            ))}
            <input
              type="text"
              name="correctAnswer"
              value={q.correctAnswer}
              onChange={(e) => handleChange(e, index)}
              className="w-full p-2 bg-gray-800 text-white rounded mt-2"
              placeholder="Correct Answer"
              required
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg mt-4"
        >
          Add Question
        </button>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg"
        >
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default QuizCreationForm;