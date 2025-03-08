const express = require("express");
const User = require("../models/userModel");
const Event = require("../models/eventModel");
const router = express.Router();


router.get("/dashboard/:userId", async (req, res) => {
    try {
        const { userId } = req.params; 
        const user = await User.findById(userId)
            .populate({
                path: "registeredEvents.eventId",
                select: "name date description"
            })
            .populate({
                path: "createdEvents",
                select: "name date description"
            })
            .populate({
                path: "quizScores.quizId",
                select: "title maxScore"
            });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }


        const dashboardData = {
            userInfo: {
                name: user.name,
                email: user.email,
                role: user.role
            },
            registeredEvents: user.registeredEvents.map(reg => ({
                id: reg.eventId._id,
                name: reg.eventId.name,
                date: reg.eventId.date,
                description: reg.eventId.description,
                role: reg.role,
                status: reg.status
            })),
            createdEvents: user.createdEvents.map(event => ({
                id: event._id,
                name: event.name,
                date: event.date,
                description: event.description
            })),
            quizScores: user.quizScores.map(quiz => ({
                id: quiz.quizId._id,
                title: quiz.quizId.title,
                maxScore: quiz.quizId.maxScore,
                score: quiz.score
            }))
        };

        res.status(200).json(dashboardData);
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
