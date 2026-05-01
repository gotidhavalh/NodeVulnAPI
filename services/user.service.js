const userModel = require("../models/user.model");

exports.registerUser = (user, cb) => {
    userModel.createUser(user, cb);
};

exports.getUserByEmail = (email, cb) => {
    userModel.findByEmail(email, cb);
};