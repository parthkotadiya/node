const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
    username: String,
    password: Number
 

});

module.exports = mongoose.model("App", AppSchema);