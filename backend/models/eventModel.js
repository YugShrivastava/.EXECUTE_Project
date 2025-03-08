const mongoose = require("../connection/connection")

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    venue: { type: String, required: true },

    category: { 
        type: String, 
        enum: ["Technical", "Cultural", "Sports", "Workshop", "Other"], 
        required: true 
    },

    organizer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "users", 
        required: true 
    }, 

    maxParticipants: { type: Number, default: 1 },
    registeredParticipants: [{ 
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        role: { type: String, enum: ["participant", "team leader"], required: true },
        status: { type: String, enum: ["pending", "confirmed"], default: "pending" }
    }], 

    announcements: [
        {
            message: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ], 

    isLive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Event = mongoose.model("events", EventSchema);
module.exports = Event