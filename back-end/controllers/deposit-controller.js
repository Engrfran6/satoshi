const Joi = require('@hapi/joi');
const multer = require('multer');
const path = require('path');
const Deposit = require('../models/Deposits/DepositModel');
const Activity = require('../models/Activities/ActivityModel');

const createUserSchema = Joi.object().keys({
  depAmount: Joi.required().required(),
  photoUrl: Joi.string(),
  targetUserId: Joi.string(),
});

// Create a storage engine for multer
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

exports.upload = multer({
  storage: storage,
});

exports.createDeposit = async (req, res) => {
  const {targetUserId} = req.body;
  const user = req.user;
  const doc = req.body;

  try {
    const userId = user.role == 'admin' ? targetUserId : user?._id;
    const photoUrl = user.role == 'admin' ? 'admin: no upload' : req.file.path;

    const {error} = createUserSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }

    const params = {
      user: userId,
      depAmount: doc.depAmount,
      proofOfPayment: photoUrl,
    };

    const deposit = new Deposit(params);
    await deposit.save();

    const activity = new Activity({title: 'Deposit', user: user._id});
    await activity.save();
    if (deposit) {
      return res.status(201).json({
        status: 'success',
        data: deposit,
        message: 'your deposit was successful!',
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: 'Image upload failed',
    });
  }
};

exports.getDeposit = async (req, res) => {
  try {
    const userId = req.user._id;
    const deposits = await Deposit.findOne({user: userId});

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

exports.getDeposits = async (req, res) => {
  const deposits = await Deposit.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...deposits,
  });
};

exports.deleteDeposit = async (req, res) => {
  const depositId = req.params.depositId;

  try {
    const deletedDeposit = await Deposit.findByIdAndDelete(depositId);

    if (!deletedDeposit) {
      return res.status(404).json({error: 'User not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Deposit deleted successfully',
      deletedDeposit: deletedDeposit,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting Deposit',
      error: error.message,
    });
  }
};

exports.updateDeposit = async (req, res) => {
  const depositId = req.params.depositId;
  console.log('deposit', req.body);
  const updatedData = req.body;

  try {
    const updatedDeposit = await Deposit.findByIdAndUpdate(depositId, updatedData, {new: true});

    if (!updatedDeposit) {
      return res.status(404).json({error: 'OOPs: failed to update amount'});
    }

    res.status(200).json({
      status: 'success',
      message: 'Deposit updated successfully',
      updatedDeposit: updatedDeposit,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating Deposit',
      error: error.message,
    });
  }
};
