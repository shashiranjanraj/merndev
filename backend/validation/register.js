const validator = require("validator");

const isEmpty = require("./isEmpty");

module.exports = function validateRegisterUser(data) {
    data.email = !isEmpty(data.email) ? data.email : '';
    data.name = !isEmpty(data.name) ? data.name : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
    const errors = {};
    if (!validator.isEmail(data.email)) {
        errors.email = "Please enter the valid Email";
    }
    if (isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if (!validator.isLength(data.name, {
        min: 4,
        max: 30
    })) {
        errors.name = "Name must be more 2 and less then 30";
    }
    if (isEmpty(data.name)) {
        errors.name = "Name is required";
    }
    if (!validator.isLength(data.password, {
        min: 6,
        max: 30
    })) {
        errors.password = "password must be more then 6 digits";
    }

    if (isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if (!validator.equals(data.password2, data.password)) {
        errors.password2 = "confirm password Must be equal to password";
    }

    if (isEmpty(data.password2)) {
        errors.password2 = "Confirm Password is required";
    }



    return {
        errors,
        isValid: !isEmpty(errors)
    };

};