import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function FeedbackPage() {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form submission (e.g., send data to an API)
    console.log('Feedback submitted:', { email, feedback });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-black to-gray-900 flex items-center justify-center p-8">
      {/* Feedback Form Container */}
      <div className="w-full max-w-md">
        <div className="p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-purple-500 mb-6 text-left">
            Feedback
          </h1>
          {submitted ? (
            <div className="text-center text-purple-300">
              Thank you for your feedback!
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-purple-300 mb-2">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="feedback" className="block text-purple-300 mb-2">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Your feedback"
                  className="w-full px-4 py-2 rounded bg-gray-800 text-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                Submit Feedback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}


export default FeedbackPage;


