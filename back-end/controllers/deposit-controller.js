const Joi = require('@hapi/joi');
const Deposit = require("../models/Deposits/DepositModel");
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  depAmount: Joi.string().required(),
  packageId: Joi.string().required(),
  photo: Joi.string(),
});

exports.createDeposit = async (req, res) => {
  try {
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const doc = req.body;
    const userId = req.user._id
    const package = await Package.findOne({_id: doc.packageId});
    if (!package) {
      return res.status(400).json({error: `no package found with id ${doc.packageId}`});
    }

    const params = {
      user: userId,
      depAmount: doc.depAmount,
      photo: doc.photo
    };

    const deposit = new Deposit(params);
    await deposit.save();
    const activity = new Activity({ title: 'created a deposit', user: user._id });
    await activity.save();
    if (deposit) {
      return res.status(201).json({
        status: 'success',
        data: deposit,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getDeposits = async (req, res) => {
  try {
    const userId = req.user._id
    const deposits = await Deposit.findOne({ user: userId });

    return res.status(201).json({
      status: 'success',
      data: deposits,
    });

  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};