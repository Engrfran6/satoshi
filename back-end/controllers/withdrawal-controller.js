const Joi = require('@hapi/joi');
const Withdraw = require('../models/Withdrawals/WithdrawalModel');
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  withAmount: Joi.string().required(),
  withTo: Joi.string(),
});

exports.createWithdraw = async (req, res) => {
  try {
    const user = req.user;
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    const userId = user._id;
    const params = {
      user: userId,
      withAmount: doc.depAmount,
      withTo: doc.withTo,
    };

    const withdraw = new Withdraw(params);
    await withdraw.save();
    const activity = new Activity({title: 'Withdrawal', user: user._id});
    await activity.save();
    if (withdraw) {
      return res.status(201).json({
        status: 'success',
        data: withdraw,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getWithraws = async (req, res) => {
  try {
    const userId = req.user._id;
    const withdraws = await Withdraw.findOne({user: userId});

    return res.status(201).json({
      status: 'success',
      data: withdraws,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
