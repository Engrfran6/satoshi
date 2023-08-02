const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');
const kue = require('kue');
const moment = require('moment');

const User = require('../models/Users/UserModel')
const Mailer = require('../libs/mailer')


const createUserSchema = Joi.object().keys({
  role: Joi.string().valid(...['user','admin']).required(),
  email: Joi.string().required().email({ tlds: { allow: false } }),
});

const LoginSchema = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
});

const recoverPasswordSchema = Joi.object().keys({
  email: Joi.string().email({ tlds: { allow: false } }),
});

const changePasswordSchema = Joi.object().keys({
  email: Joi.string().email({ tlds: { allow: false } }),
  newPassword: Joi.string().required(),
  resetPasswordToken: Joi.string().required(),
});

exports.register = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const generatedPassword = uuidv4()
    const salt = await bcrypt.genSalt(10);

    const params = {
      email: doc.email,
      role: doc.role,
      password: await bcrypt.hash(generatedPassword, salt)
    }

    const user = new User(params);
    await user.save();
    if (user) {
      return res.status(201).json({
        email: user.email,
        password: generatedPassword
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    });
  }
};

exports.login = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = LoginSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({ error: "invalid credentials"});
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      res.status(401).json({ error: "invalid credentials"});
    } else {
      const token = user.getSignedJwtToken();
      res.status(200).json({
        status: "success",
        token
      });
    }
  } catch (e) {
    
  }
}

exports.recoverPassword = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = recoverPasswordSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { email } = req.body;
    const user =  await User.findOne({ email })
    if (user) {
      const resetPasswordToken =  user.getSignedJwtToken("1h");
      await User.findByIdAndUpdate(user._id, {
        resetPasswordToken,
        resetPasswordExpire: moment().toISOString()
      })

      const DOMAIN_URL = process.env.DOMAIN_URL
      const resetPasswordUrl = DOMAIN_URL+'/reset-password-token/'+resetPasswordToken

      const queues = kue.createQueue();
      const type = "recoverPasswordJob"
      queues
        .create(type, {
          email: user.email,
          subject: 'Password Reset',
          resetPasswordUrl
        })
        .priority("high")
        .save();
      await Mailer.sendMail(type, 'password-reset')
      res.status(200).json({
        status: "success",
        message: `Password Recovery Email Sent To ${email}`
      });

    } else {
      res.status(401).json({
        status: "failed",
        message: "No user found with That Email"
      });
    }
  } catch (err) {

  }
};

exports.changePassword = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = changePasswordSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const { newPassword, resetPasswordToken, email } = doc;
    const user =  await User.findOne({ resetPasswordToken, email }).select('+password');
    if (user) {
      await User.findByIdAndUpdate(user._id, {
        resetPasswordToken: "null", password: newPassword }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
      });
      res.status(200).json({
        status: "success",
        message: "Password Change Successful"
      })
    } else {
      res.status(401).json({
        status: "failed",
        message: "No user found"
      });
    }
  } catch (err) {

  }
};
