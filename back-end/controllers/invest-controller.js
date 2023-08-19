const Joi = require('@hapi/joi');
const Investment = require('../models/Investment/InvestmentModel');
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  invAmount: Joi.string().required(),
  packageId: Joi.string().required(),
});

exports.createInvestment = async (req, res) => {
  try {
    const user = req.user;
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    if (Number(doc.invAmount) > Number(user.balance)) {
      return res.status(400).json({error: 'You cant invest more than your balance'});
    }
    const userId = user._id;
    const params = {
      user: userId,
      invAmount: doc.invAmount,
      dailyProfit: doc.dailyProfit,
      dailyLoss: doc.dailyLoss,
      netProfit: doc.netProfit,
      totalReturn: doc.totalReturn,
      monthlyProfit: doc.monthlyProfit,
      monthlyLoss: doc.monthlyLoss,
      referalBonus: doc.referalBonus,
      rewards: doc.rewards,
      package: doc.packageId,
    };

    const investment = new Investment(params);
    await investment.save();
    const activity = new Activity({title: 'started a new investment', user: user._id});
    await activity.save();
    if (investment) {
      return res.status(201).json({
        status: 'success',
        data: investment,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getInvestments = async (req, res) => {
  try {
    const userId = req.user._id;
    const investment = await Investment.find({user: userId});

    return res.status(201).json({
      status: 'success',
      data: investment,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};
