const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    handle: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    website: {
        type: String,
    },
    mobile: {
        type: String,
        required: true
    },
    linkedin: {
        type: String,
    },
    github: {
        type: String,
    },

    skills: {
        type: [String],
        required: true
    },

    experiance: [
        {
            title: {
                type: String,
                required: true
            },
            company: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            location: {
                type: String,
                required: true
            },
            jobType: {
                type: String,
            },
            contactPerson: {
                type: String,
            },
            workingFrom: {
                type: Date,
                require: true,
            },
            workingTo: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            }

        }
    ],
    education: [
        {
            title: {
                type: String,
                required: true
            },
            school: {
                type: String,
                required: true
            },
            degree: {
                type: String,
                required: true
            },
            grade: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                require: true,
            },
            to: {
                type: Date,
            },
            purshuing: {
                type: Boolean,
                default: false
            },
            degreeType: {
                type: String
            }

        }
    ],
    social: {
        youtube: {
            type: String,
        },
        facebook: {
            type: String,
        },
        instagram: {
            type: String,
        },
        twitter: {
            type: String,
        },
        linkedin: {
            type: String,
        },
    },
    interests: {
        type: [String]
    },
    laguages: {
        type: [String]
    },
    date: {
        type: Date,
        default: Date.now
    }


});

module.exports = Profile = mongoose.model("profile", ProfileSchema);