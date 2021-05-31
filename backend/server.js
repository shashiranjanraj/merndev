const express = require('express');
const connectDb = require('./config/db');
const usersRoute = require("./routes/users");
var cors = require('cors');
const passport = require("passport");

require('dotenv').config();
connectDb();
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
        msg: "Welcome to express"
    });
});


app.use(passport.initialize());

require('../backend/util/passport')(passport);
// Parsers for POST data
app.use(express.json({
    limit: '20mb'
}));
app.use(express.urlencoded({
    extended: false,
    limit: '20mb'
}));
app.listen(process.env.PORT, () => {
    console.log(`Server started on port${process.env.PORT}`);
});

app.use("/api/users/", usersRoute);