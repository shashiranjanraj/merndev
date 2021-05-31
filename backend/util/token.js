const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const genrateToken = (user) => {
    return jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '3d' });
}

module.exports = genrateToken;

exports.matchPassword = function (enterPassword, dbPassword) {
    console.log({ enterPassword, dbPassword });
    return bcrypt.compare(enterPassword, dbPassword);
};