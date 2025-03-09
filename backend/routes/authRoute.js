const express = require("express");
const User = require("../models/userModel");
const Auth = express.Router();
const jwt = require("jsonwebtoken")

const secret_key = "yugggiieeiieieieieiei";

Auth.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await User.findOne({
            email: email,
            password: password
        })

        if (existingUser) {
            res.status(400).json({ message: "user already exists" })
            return;
        }

        const user = new User({ ...req.body })
        await user.save();
        res.status(200).json({ message: "User registered Successfully" })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Error registering user" })
    }
});


Auth.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })

        if (!user) {
            res.status(400).json({ message: "user not found" })
            return;
        }
        const JWTtoken = jwt.sign(user.toObject(), secret_key, { expiresIn: '1d' });

        res.status(200).json({ token: JWTtoken })

    } catch (error) {
        console.log(error);
    }
})

Auth.get("/autho", async (req, res) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        const user = jwt.verify(token, secret_key);

        if (!user) {
            res.status(400).json({ message: "invalid token" })
            return;
        }
        res.status(200).json({ ...user });

    } catch (error) {
        console.log(error)
    }
})

module.exports = Auth