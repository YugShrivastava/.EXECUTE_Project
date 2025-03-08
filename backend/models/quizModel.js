const { default: mongoose } = require("../connection/connection");

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "events", 
        required: true 
    },
    organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    questions: [
        {
            questionText: { type: String, required: true },
            options: [{ type: String, required: true }],
            correctAnswer: { type: String, required: true },
            type: { 
                type: String, 
                enum: ["mcq", "coding"], 
                required: true 
            },
            codingTestCase: {
                input: { type: String },
                expectedOutput: { type: String }
            }
        }
    ],
    duration: { type: Number, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    participants: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
            score: { type: Number, default: 0 },
            submittedAt: { type: Date }
        }
    ],
    createdAt: { type: Date, default: Date.now }
});

const Quiz = mongoose.model("quizzes", QuizSchema);
module.exports = Quiz;