const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: [Boolean]
    },

});

module.exports = User = mongoose.model('user', userSchema);