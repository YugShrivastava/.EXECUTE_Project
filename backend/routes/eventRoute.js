const express = require('express');
const Event = require('../models/eventModel');
const User = require('../models/userModel');
const eventRouter = express.Router();


eventRouter.post("/create", async (req, res) => {
    try {
        const newEvent = new Event({ ...req.body });
        const { organizer, registeredParticipants } = req.body

        await newEvent.save().then(async savedEvent => {
            if (savedEvent.organizer != undefined) {
                const user = await User.findByIdAndUpdate(organizer,
                    { $push: { createdEvents: savedEvent._id } }
                );
            }

            if (savedEvent.registeredParticipants.length != undefined) {
                savedEvent.registeredParticipants.map(async registered => {
                    const user = await User.findByIdAndUpdate(registeredParticipants.userId, {
                        $push: {
                            createdEvents:
                                savedEvent._id,
                        }
                    });
                    user?.createdEvents.push({
                        userId: registered._id,
                        role: "organizer"
                    })
                })
            }
        })
        res.status(201).json({ message: "Event created successfully", event: newEvent });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal Server Error" });
    }
});


eventRouter.get("/", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal Server Error" });
    }
});


eventRouter.put("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedEvent = await Event.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json({ message: "Event updated successfully", event: updatedEvent });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


eventRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await Event.findByIdAndDelete(id);
        if (!deletedEvent) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.json({ message: "Event deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = eventRouter