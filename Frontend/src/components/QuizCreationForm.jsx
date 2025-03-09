import React, { useState, useEffect } from "react";

const QuizCreationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    maxScore: "",
    questions: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
  });

  const [quizzes, setQuizzes] = useState([]);

  // Load existing quizzes from localStorage on component mount
  useEffect(() => {
    const savedQuizzes = localStorage.getItem("quizzes");
    if (savedQuizzes) {
      setQuizzes(JSON.parse(savedQuizzes));
    }
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new quiz object with a unique ID and timestamp
    const newQuiz = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    
    // Add the new quiz to the quizzes array
    const updatedQuizzes = [...quizzes, newQuiz];
    
    // Save to localStorage
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));
    
    // Update state
    setQuizzes(updatedQuizzes);
    
    // Reset form
    setFormData({
      title: "",
      description: "",
      maxScore: "",
      questions: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
    });
    
    alert("Quiz saved to localStorage successfully!");
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
          Save Quiz to LocalStorage
        </button>
      </form>
      
      {/* Display saved quizzes count */}
      <div className="mt-6 text-gray-400">
        {quizzes.length > 0 ? (
          <p>You have {quizzes.length} quiz(es) saved in localStorage.</p>
        ) : (
          <p>No quizzes saved yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuizCreationForm;