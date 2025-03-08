// components/QuizList.jsx
import React from "react";

const QuizList = ({ quizzes }) => (
  <div className="bg-gray-900 rounded-lg shadow-neumorphic">
    <div className="px-6 py-4 border-b border-gray-800">
      <h2 className="text-xl font-bold text-purple-400">Quiz Scores</h2>
    </div>
    <div className="p-6">
      {quizzes.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-800">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Quiz</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {quizzes.map((quiz) => (
                <tr key={quiz.id} className="hover:bg-gray-800 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-white">{quiz.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{quiz.score}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-700 text-white">
                      #{quiz.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{new Date(quiz.date).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-purple-400 hover:text-purple-300">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-4 text-gray-400">No quiz scores yet</div>
      )}
    </div>
  </div>
);

export default QuizList;