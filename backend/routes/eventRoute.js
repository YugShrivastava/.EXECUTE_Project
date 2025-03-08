const express = require('express');
const Event = require('../models/eventModel');
const eventRouter = express.Router();


eventRouter.post("/create", async (req, res) => {
    try {
        const { name, description, date } = req.body;
        const newEvent = new Event({ name, description, date });
        await newEvent.save();
        res.status(201).json({ message: "Event created successfully", event: newEvent });
    } catch (err) {
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