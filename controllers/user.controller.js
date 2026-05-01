const jwt = require("jsonwebtoken");
const userService = require("../services/user.service");

exports.register = (req, res) => {
    const user = req.body;

    userService.registerUser(user, (err, result) => {
        if (err) return res.status(500).send(err);

        res.send({ message: "User registered" });
    });
};

exports.login = (req, res) => {
    const { email } = req.body;

    userService.getUserByEmail(email, (err, results) => {
        if (err) return res.status(500).send(err);

        if (results.length === 0) {
            return res.status(404).send("User not found");
        }

        const token = jwt.sign({ id: results[0].id }, process.env.JWT_SECRET);

        res.send({ token });
    });
};