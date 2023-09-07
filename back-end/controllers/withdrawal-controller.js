const Joi = require('@hapi/joi');
const Withdraw = require('../models/Withdrawals/WithdrawalModel');
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  withAmount: Joi.number().required(),
  withToId: Joi.string().required(),
  targetUserId: Joi.string(),
});

exports.createWithdraw = async (req, res) => {
  const {targetUserId} = req.body;
  try {
    const user = req.user;
    const doc = req.body;
    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
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
      withAmount: doc.withAmount,
      withToId: doc.withToId,
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

exports.getWithrawal = async (req, res) => {
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

exports.getWithdrawals = async (req, res) => {
  const withdrawals = await Withdraw.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...withdrawals,
  });
};

exports.deleteWithdrawal = async (req, res) => {
  const withdrawalId = req.params.withdrawalId;

  try {
    const deletedWithdrawal = await Withdraw.findByIdAndDelete(withdrawalId);

    if (!deletedWithdrawal) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Withdrawal account deleted successfully',
      deletedWithdrawal: deletedWithdrawal,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Withdrawal account',
      error: error.message,
    });
  }
};

exports.updateWithdrawal = async (req, res) => {
  const withdrawalId = req.params.withdrawalId;
  const updatedData = req.body;

  try {
    const updatedWithdrawal = await Withdraw.findByIdAndUpdate(withdrawalId, updatedData, {
      new: true,
    });

    if (!updatedWithdrawal) {
      return res.status(404).json({error: 'Withdrawal account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'Withdrawal account updated successfully',
      updatedWithdrawal: updatedWithdrawal,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating Withdrawal account',
      error: error.message,
    });
  }
};
