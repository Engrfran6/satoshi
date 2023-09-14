const Joi = require('@hapi/joi');
const BankTransfer = require('../../models/PaymentOptions/BankTransferModel');
const ComapyBankAccount = require('../../models/PaymentOptions/BankTransferModel');
const User = require('../../models/Users/UserModel');

const createBankTransferSchema = Joi.object().keys({
  accountNumber: Joi.string().required(),
  amountName: Joi.string().required(),
  bankName: Joi.string().required(),
  bankAddress: Joi.string().required(),
  routingNumber: Joi.string().required(),
  clientAddress: Joi.string().required(),
  targetUserId: Joi.string(),
});

exports.createBankTransfer = async (req, res) => {
  const {targetUserId} = req.body;
  try {
    const user = req.user;
    const doc = req.body;
    let {accountNumber, amountName, bankName, bankAddress, routingNumber, clientAddress} = req.body;

    const {error} = createBankTransferSchema.validate({...doc});
    if (error) {
      return res.status(400).json({error: error.details[0].message});
    }
    accountNumber = Number(accountNumber);
    routingNumber = Number(routingNumber);

    const userId = () => {
      if (targetUserId) {
        return targetUserId;
      } else {
        return user?._id;
      }
    };

    const params = {
      user: userId(),
      accountNumber,
      amountName,
      bankName,
      bankAddress,
      routingNumber,
      clientAddress,
    };

    const bankDetails = new BankTransfer(params);

    await bankDetails.save();
    if (bankDetails) {
      return res.status(201).json({
        status: 'success',
        data: bankDetails,
      });
    }
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getBank = async (req, res) => {
  try {
    const userId = req.user._id;
    const bank = await BankTransfer.find({user: userId});

    return res.status(201).json({
      status: 'success',
      data: bank,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getAdminBanks = async (req, res) => {
  try {
    const bank = await BankTransfer.find({});
    const user = await User.find({});

    const adminUsers = user?.filter((user) => user.role == 'admin');
    const adminUserIds = adminUsers?.map((admin) => admin._id);

    const adminBanksData = bank?.filter((bank) => adminUserIds.includes(bank.user));

    return res.status(201).json({
      status: 'success',
      data: adminBanksData,
    });
  } catch (e) {
    res.status(500).json({
      status: 'failed',
      message: e.message,
    });
  }
};

exports.getBanks = async (req, res) => {
  const banks = await BankTransfer.retrievePaginated({
    ...req.query,
  });
  res.status(200).json({
    status: 'success',
    ...banks,
  });
};

exports.deleteBank = async (req, res) => {
  const bankId = req.params.bankId;

  try {
    const deletedBank = await BankTransfer.findByIdAndDelete(bankId);

    if (!deletedBank) {
      return res.status(404).json({error: 'Bank not found'});
    }

    res.status(201).json({
      status: 'success',
      message: 'Bank account deleted successfully',
      deletedBank: deletedBank,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error deleting bank account',
      error: error.message,
    });
  }
};

exports.updateBank = async (req, res) => {
  const bankId = req.params.bankId;
  const updatedData = req.body;

  try {
    const updatedBank = await BankTransfer.findByIdAndUpdate(bankId, updatedData, {new: true});

    if (!updatedBank) {
      return res.status(404).json({error: 'bank account not found'});
    }

    res.status(200).json({
      status: 'success',
      message: 'bank details updated successfully',
      updatedBank: updatedBank,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'Error updating bank account details',
      error: error.message,
    });
  }
};
