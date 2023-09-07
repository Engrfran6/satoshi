const Joi = require('@hapi/joi');
const Investment = require('../models/Investment/InvestmentModel');
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  invAmount: Joi.string().required(),
  packageId: Joi.string().required(),
  targetUserId: Joi.string(),
});

exports.createInvestment = async (req, res) => {
  const user = req.user;
  const {targetUserId} = req.body;
  try {
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    if (Number(doc.invAmount) > Number(user?.balance)) {
      return res.status(400).json({error: 'You cant invest more than your balance'});
    }

    if (user.role !== 'admin' && user.role !== 'user') {
      return res.status(500).json({
        error: 'User Id required to create an investment',
      });
    }

    const userId = () => {
      if (user.role == 'admin') {
        return targetUserId;
      } else {
        return user?._id;
      }
    };

    const params = {
      user: userId(),
      invAmount: doc.invAmount,
      dailyProfit: doc.dailyProfit,
      dailyLoss: doc.dailyLoss,
      netProfit: doc.netProfit,
      totalReturn: doc.totalReturn,
      monthlyProfit: doc.monthlyProfit,
      monthlyLoss: doc.monthlyLoss,
      referalBonus: doc.referalBonus,
      rewards: doc.rewards,
      packageId: doc.packageId,
    };

    const investment = new Investment(params);
    await investment.save();
    const activity = new Activity({title: 'new investment', user: user._id});
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

exports.getInvestment = async (req, res) => {
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

exports.getInvestments = async (req, res) => {
  const investments = await Investment.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...investments,
  });
};

exports.deleteInvestment = async (req, res) => {
  const investmentId = req.params.investmentId;

  try {
    const investmentToDelete = await Investment.findById(investmentId);

    if (!investmentToDelete) {
      return res.status(404).json({error: 'Investment not found'});
    }

    const deletedInvestment = await Investment.findByIdAndDelete(investmentId);

    res.status(201).json({
      status: 'success',
      message: 'Investment deleted successfully',
      deletedInvestment: deletedInvestment,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Investment account',
    });
  }
};

exports.updateInvestment = async (req, res) => {
  const investmentId = req.params.investmentId;
  const updatedData = req.body;

  try {
    const updatedInvestment = await Investment.findByIdAndUpdate(investmentId, updatedData, {
      new: true,
    });

    if (!updatedInvestment) {
      return res.status(404).json({error: 'Investment account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'Investment updated successfully',
      updatedInvestment: updatedInvestment,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating Investment',
    });
  }
};
