const { User } = require("../../models/index.js");
const { showError } = require("../../lib/index.js");
const bcrypt = require("bcryptjs");
class UserController {
  index = async (req, res, next) => {
    try {
      const users = await User.find({ type: "Normal" });
      res.json(users);
    } catch (err) {
      showError(err, next);
    }
  };

  store = async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
      await User.create({
        name,
        email,
        password: hash,
      });
      res.json({
        message: "User Added",
        status: 422,
      });
    } catch (err) {
      showError(err, next);
    }
  };

  show = async (req, res, next) => {
    const { id } = req.params;

    try {
      const user = await User.findById(id);
      res.json(user);
    } catch (err) {
      showError(err, data);
    }
  };

  update = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      await User.findByIdAndUpdate(id, { name });
      res.json({
        message: "User updated",
        status: 200,
      });
    } catch (err) {
      showError(err, next);
    }
  };

  delete = async (req, res, next) => {
    const { id } = req.params;

    try {
      await User.findByIdAndDelete(id);
      res.json({
        message: "User deleted",
        status: 200,
      });
    } catch (err) {
      showError(err, next);
    }
  };
}

module.exports = new UserController();
