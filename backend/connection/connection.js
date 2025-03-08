const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://vanshdubey101963:XppugHUxOxYpjKcJ@festx.uwj1v.mongodb.net/festX").catch(e => { console.log(e) })
module.exports = mongoose