const expressAsyncHandler = require("express-async-handler");

const validateRegisterUser = require("../validation/register");
const validateLogin = require("../validation/login");
const User = require("../models/User");
const Profile = require("../models/Profile");
const bcrypt = require('bcryptjs');
const genrateToken = require('../util/token');
const validateProfile = require('../validation/profile');
exports.register = function (req, res) {

    const {
        errors,
        isValid
    } = validateRegisterUser(req.body);

    if (isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    }).then(user => {
        if (user) {
            return res.status(400).json("user already exists!!!!!!!");
        } else {
            const resUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                isActive: 1
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(resUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    resUser.password = hash;
                    resUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });


        }
    })






};

exports.login = function (req, res) {
    const { email, password } = req.body;
    const { errors, isValid } = validateLogin(req.body);

    if (isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: email }).then(user => {

        if (!user) {
            res.status(400).json("user not find");
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                res.json({
                    success: true,
                    token: 'Bearer ' + genrateToken(user)
                });
            }
        });
    });

};

exports.getUsers = function (req, res) {
    res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id,
        isActive: req.user.isActive,
    });
};

exports.createProfile = function (req, res) {

    const { errors, isValid } = validateProfile(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Profile.findOne({ handle: req.body.handle }).then(profile => {
        if (profile) {
            return res.status(400).json({ handle: "User Name already exist" });
        }
    }).catch(err => {
        console.log(err);
    })
    User.findById(req.user.id).then(user => {
        if (user) {
            Profile.findOne({ user: user.id }).then(profile => {
                if (profile) {
                    return res.status(400).json("Profile allready exist");
                }
            }).catch(err => {
                console.log(err);
            });
            let social = {};

            social.youtube = req.body.youtube;
            social.facebook = req.body.facebook;
            social.instagram = req.body.instagram;
            social.twitter = req.body.twitter;
            social.linkedin = req.body.linkedin;

            const createProfileObject = new Profile({
                handle: req.body.handle,
                mobile: req.body.mobile,
                website: req.body.website,
                workingFrom: req.body.workingFrom,
                linkedin: req.body.linkedin,
                place: req.body.place,
                github: req.body.github,
                skills: req.body.skills.split(","),
                social: social,
                user: req.user.id
            });

            createProfileObject.save().then(profile => {
                res.json(profile);
            }).catch(err => {
                console.log(err);
            });


        }
    });


};

exports.experiance = function (req, res) {

    Profile.findOne({ user: req.user.id }).then(profile => {

        console.log(profile);

        if (!profile) {
            return res.status(400).json("Profile Not find");
        }

        const newEpress = {
            title: req.body.title,
            company: req.body.company,
            degree: req.body.description,
            grade: req.body.location,
            degreeType: req.body.degreeType,
            from: req.body.contactPerson,
            to: req.body.workingFrom,
            purshuing: req.body.current,
        };

        profile.experiance.unshift(newEpress);

        profile.save().then(profile => {
            console.log(profile);
        }).catch(err => {
            console.log(err);
        });

    }).catch(err => {
        console.log(err);
    });
};
exports.education = function (req, res) {

    Profile.findOne({ user: req.user.id }).then(profile => {

        if (!profile) {
            return res.status(400).json("Profile Not find");
        }

        const newEducation = {
            title: req.body.title,
            school: req.body.school,
            degree: req.body.degree,
            grade: req.body.grade,
            degreeType: req.body.degreeType,
            from: req.body.from,
            to: req.body.to,
            purshuing: req.body.purshuing,
        };

        profile.education.unshift(newEducation);

        profile.save().then(profile => {
            res.json(profile.education);
        }).catch(err => {
            console.log(err);
        });

    }).catch(err => {
        console.log(err);
    });
};

exports.deleteExperiance = function (req, res) {
    Profile.findOne({ user: req.user.id }).then(profile => {
        const removeIndex = profile.experiance.map(item => item.id).indexOf(req.params.exp_id);
        profile.experiance.splice(removeIndex, 1);
        profile.save().then(profile => { res.json(profile); });
    }).catch(err => {
        console.log(err);
    });
};


exports.deleteEducation = function(req,res){
    Profile.findOne({user:req.user.id}).then(profile=>{
        const removeIndex = profile.education.map(item=>item.id).indexOf()
    })  
};