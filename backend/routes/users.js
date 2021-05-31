const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
    register,
    login,
    getUsers,
    createProfile,
    experiance,
    education,
    deleteExperiance
} = require('../controllers/usersControllers');



router.post('/register', register);

router.post("/login", login);

router.get("/getUsers", passport.authenticate('jwt', { session: false }), getUsers);

router.post('/createProfile', passport.authenticate('jwt', { session: false }), createProfile);
router.post('/experiance', passport.authenticate('jwt', { session: false }), experiance);
router.post("/education", passport.authenticate("jwt", { session: false }), education);
router.delete("/experiance/:exp_id", passport.authenticate('jwt', { session: false }), deleteExperiance);




module.exports = router;