const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs')
const { v4: uuidv4 } = require('uuid');

const User = require('../models/Users/UserModel')
const Account = require('../models/Accounts/AccountModel');


const createUserSchema = Joi.object().keys({
  fullName: Joi.string().required(),
  username: Joi.string().required(),
  phoneNumber: Joi.string().required(),
  accountId: Joi.string().required(),
  country: Joi.string().required(),
  state: Joi.string().required(),
  email: Joi.string().required().email({ tlds: { allow: false } }),
});

const LoginSchema = Joi.object().keys({
  password: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }),
});


exports.register = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const account = await Account.findOne({ _id: doc.accountId })
    if (!account) {
      return res.status(400).json({ error: `no account found with id ${doc.accountId}` });
    }
    const generatedPassword = uuidv4()
    const salt = await bcrypt.genSalt(10);

    const params = {
      email: doc.email,
      fullName: doc.fullName,
      username: doc.username,
      phoneNumber: doc.phoneNumber,
      account: doc.accountId,
      referal: doc.phoneNumber,
      country: doc.country,
      state: doc.state,
      password: await bcrypt.hash(generatedPassword, salt)
    }

    const user = new User(params);
    await user.save();
    delete user.password
    if (user) {
      return res.status(201).json({
        status: 'success',
        data: user
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