const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');
const User = require('../models/Users/UserModel');

const createUserSchema = Joi.object().keys({
  role: Joi.string(),
  fullName: Joi.string().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  role: Joi.string(),
  email: Joi.string()
    .required()
    .email({tlds: {allow: false}}),
});

exports.register = async (req, res) => {
  try {
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    const salt = await bcrypt.genSalt(10);
    const generatedPassword = await bcrypt.hash(doc.password, salt);
    const genrateReferal = generateRandomNumber() + doc.username;

    const params = {
      role: doc.role,
      email: doc.email,
      fullName: doc.fullName,
      username: doc.username,
      phoneNumber: doc.phoneNumber,
      password: generatedPassword,
      referalId: genrateReferal,
    };

    const user = new User(params);
    await user.save();
    delete user.password;
    if (user) {
      return res.status(201).json({
        status: 'success',
        data: user,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

const LoginSchema = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().email({tlds: {allow: false}}),
});

exports.login = async (req, res) => {
  try {
    const doc = req.body;
    const {error} = LoginSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    if (!user) {
      res.status(401).json({error: 'invalid credentials'});
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      res.status(401).json({error: 'invalid credentials'});
    } else {
      const token = user.getSignedJwtToken();

      // const activity = new Activity({ title: 'logged in', user: user._id });
      // await activity.save();
      // const activities = await Activity.find({ user: user._id })
      res.status(200).json({
        status: 'success',
        token,
        user,
      });
    }
  } catch (e) {}
};

exports.authorizeAccount = async (req, res) => {
  if (!req.user.username) res.status(401).json({error: 'expired token'});
  res.status(200).json({
    status: 'success',
    user: req.user,
  });
};

// exports.getUser = async (req, res) => {
//   const userId = req.body;
//   const user = await User.findById(userId);
//   res.status(201).json({
//     user: user,
//   });
// };

exports.getUsers = async (req, res) => {
  const users = await User.retrievePaginated({
    ...req.query,
  });
  res.status(201).json({
    status: 'success',
    ...users,
  });
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const userToDelete = await User.findById(userId);

    if (!userToDelete) {
      return res.status(404).json({error: 'User not found'});
    }

    if (userToDelete.role === 'admin') {
      return res.status(403).json({error: 'Admin user cannot be deleted'});
    }

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'User deleted successfully',
      deletedUser: deletedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting user',
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.params.userId;
  const updatedData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {new: true});

    if (!updatedUser) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'User updated successfully',
      updatedUser: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating user',
      error: error.message,
    });
  }
};

const generateRandomNumber = () => {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  return randomNumbers.join('');
};
