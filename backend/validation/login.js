const validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateLogin(data) {
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    var errors = {};
    if (!validator.isEmail(data.email)) {
        errors.email = "Please Enter Valid Email";
    }
    if (isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if (isEmpty(data.password)) {
        errors.password = "Password is Required";
    }

    return {
        errors,
        isValid: !isEmpty(errors)
    };

};