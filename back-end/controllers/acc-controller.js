const Joi = require('@hapi/joi');
const Account = require('../models/Accounts/AccountModel')

const createAccSchema = Joi.object().keys({
  name: Joi.string().required(),
});


exports.createAccount = async (req, res) => {
  try {
    const doc = req.body;
    const { error } = createAccSchema.validate({...doc});
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const account = new Account({ name: doc.name });
    await account.save();
    if (account) {
      return res.status(201).json({
        status: 'success',
        data: account
      });
    }
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    });
  }
};

exports.getAccounts = async (req, res) => {
  try {
    const account = await Account.find({})
    return res.status(200).json({
      status: 'success',
      data: account
    });
  } catch (e) {
    res.status(500).json({
      status: "failed",
      message: e.message
    });
  }
};
