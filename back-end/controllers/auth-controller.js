const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const User = require('../models/Users/UserModel');
const Package = require('../models/Packages/PackageModel');
const Activity = require('../models/Activities/ActivityModel');
const Investment = require('../models/Investment/InvestmentModel');

const createUserSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  password: Joi.string().required(),
  username: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  email: Joi.string()
    .required()
    .email({tlds: {allow: false}}),
});

const LoginSchema = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().email({tlds: {allow: false}}),
});

exports.register = async (req, res) => {
  try {
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    // const package = await Package.findOne({_id: doc.packageId});
    // if (!package) {
    //   return res.status(400).json({error: `no package found with id ${doc.packageId}`});
    // }

    const salt = await bcrypt.genSalt(10);
    const generatedPassword = await bcrypt.hash(doc.password, salt);
    const genrateReferal = generateRandomNumber() + doc.username;

    const params = {
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
      const investments = await Investment.find({user: user._id}).populate('package');
      res.status(200).json({
        status: 'success',
        token,
        user,
        investments,
        // activities,
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

const generateRandomNumber = () => {
  const randomNumbers = [];
  for (let i = 0; i < 3; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  return randomNumbers.join('');
};
