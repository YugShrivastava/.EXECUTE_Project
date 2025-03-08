const { default: mongoose } = require("../connection/connection");


const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date
});
const Event = mongoose.model("events", eventSchema);

module.exports = Event