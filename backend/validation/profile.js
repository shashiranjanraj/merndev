const validator = require('validator');
const isEmpaty = require('./isEmpty');

module.exports = function validateProfile(data) {

    data.handle = !isEmpaty(data.handle) ? data.handle : '';
    data.place = !isEmpaty(data.place) ? data.place : '';
    data.website = !isEmpaty(data.website) ? data.website : '';
    data.mobile = !isEmpaty(data.mobile) ? data.mobile : '';
    data.linkedin = !isEmpaty(data.linkedin) ? data.linkedin : '';
    data.github = !isEmpaty(data.github) ? data.github : '';
    data.skills = !isEmpaty(data.skills) ? data.skills : '';
    data.title = !isEmpaty(data.title) ? data.title : '';
    data.company = !isEmpaty(data.company) ? data.company : '';
    data.location = !isEmpaty(data.location) ? data.location : '';
    data.jobType = !isEmpaty(data.jobType) ? data.jobType : '';
    data.constactPerson = !isEmpaty(data.constactPerson) ? data.constactPerson : '';
    data.workingFrom = !isEmpaty(data.workingFrom) ? data.workingFrom : '';
    data.workingTo = !isEmpaty(data.workingTo) ? data.workingTo : '';
    data.current = !isEmpaty(data.current) ? data.current : '';
    data.school = !isEmpaty(data.school) ? data.school : '';
    data.degree = !isEmpaty(data.degree) ? data.degree : '';
    data.grade = !isEmpaty(data.grade) ? data.grade : '';
    data.youtube = !isEmpaty(data.youtube) ? data.youtube : '';
    data.facebook = !isEmpaty(data.facebook) ? data.facebook : '';
    data.instagram = !isEmpaty(data.instagram) ? data.instagram : '';
    data.twitter = !isEmpaty(data.twitter) ? data.twitter : '';
    data.linkedin = !isEmpaty(data.linkedin) ? data.linkedin : '';

    const errors = {};

    if (isEmpaty(data.handle)) {
        errors.handle = "User Name is Required";
    }
    if (isEmpaty(data.mobile)) {
        errors.mobile = "Please enter mobile Number";
    }
    if (!validator.isMobilePhone(data.mobile, ['en-IN'])) {
        errors.mobile = "Please Enter Valid Mobile Number";
    }
    if (!validator.isURL(data.website)) {
        errors.website = "Please enter correct URL of Website";
    }
    if (!validator.isDate(data.workingFrom)) {
        errors.workingFrom = "Please Enter Date only";
    }


    return {
        errors, isValid: isEmpaty(errors)
    }

};