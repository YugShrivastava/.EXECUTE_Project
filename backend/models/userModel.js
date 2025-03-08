const mongoose = require("../connection/connection");
const Event = require("./eventModel");
const Quiz = require("./quizModel");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["participant", "organizer", "admin"],
        default: "participant"
    },
    registeredEvents: [{
        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "events"
        },
        role: {
            type: String,
            enum: ["participant", "team_leader"]
        },
        status: {
            type: String,
            enum: ["registered", "pending", "canceled"],
            default: "registered"
        }
    }],
    createdEvents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "events"
    }],
    quizScores: [{
        quizId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "quizzes"
        },
        score: Number
    }]
}, { timestamps: true });

const User = mongoose.model("users", userSchema);
module.exports = User;
